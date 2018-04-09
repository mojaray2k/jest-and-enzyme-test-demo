import React from 'react'
import { shallow } from 'enzyme'
import User from './user'
import fetchMock from 'fetch-mock'
import * as api from './api'

const nextTick = async () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

const dummyUser = {
  id: 1,
  name: 'Jack Franklin',
  website: 'https://javascriptplayground.com',
}

describe('User', () => {
  //clear out spys between each tests so the tests relies on their own spys
  //This guarantees that one spy does not last outstide of the tests it is set in
  beforeEach(() => jest.restoreAllMocks())
  it('it shows the loading text before the data is fetched', async () => {
    jest
        .spyOn(api, 'fetchUser')
        .mockImplementation(() => Promise.resolve(dummyUser))

    const wrapper = shallow(<User id={1} />)
    expect(wrapper.find('p').text()).toEqual('Loading!')
  })

  it('shows the data once it has been fetched', async () => {
    jest
        .spyOn(api, 'fetchUser')
        .mockImplementation(() => Promise.resolve(dummyUser))

    const wrapper = shallow(<User id={1} />)

    await nextTick()
    wrapper.update()

    expect(wrapper.find('h4').text()).toEqual(dummyUser.name)
    expect(wrapper.find('p').text()).toContain(dummyUser.website)
  })
})
