import React from 'react'
import { shallow, mount } from 'enzyme'
import CounterList from './counter-list'

describe('CounterList', () => {
    it('just for demo!', () => {
        const shallowWrapper = shallow(<CounterList /> )
        const mountWrapper = mount(<CounterList /> )

        console.log('shallow HTML', shallowWrapper.debug())
        console.log('mount HTML', mountWrapper.debug())
    })
})