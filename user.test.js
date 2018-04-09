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
    website: 'https://javascriptplayground.com',
  }
  
  const url = 'https://jsonplaceholder.typicode.com/users/1'
 const mockUrlWithUser = user =>
    fetchMock.getOnce(url, {
      status: 200,
      body: user,
    })

describe('User', () => {
    it('shows the loading text then the data once it has been fetched', () => {
        mockUrlWithUser(dummyUser)
        
        const wrapper = shallow(<User id={1} /> )
        expect(wrapper.find('p').text()).toEqual('Loading!')
    })
})