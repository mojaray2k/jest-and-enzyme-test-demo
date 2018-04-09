import React from 'react'
import { shallow } from 'enzyme'
import User from './user'
import fetchMock from 'fetch-mock'

const nextTick = async () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

const dummyUser = {
    id: 1,
    name: 'Jack Franklin',
    website: 'https://javascriptplayground.com'
}

describe('User', () => {
    it('shows the loading text then the data once it has been fetched', () => {
        const wrapper = shallow(<User id={1} /> )
        expect(wrapper.find('p').text()).toEqual('Loading!')
    })
})