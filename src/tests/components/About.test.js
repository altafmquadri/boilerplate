import React from 'react';
import { shallow } from 'enzyme'
import About from '../../components/About'

test('should render About', () => {
    const wrapper = shallow(<About />)
    expect(wrapper).toMatchSnapshot()
})