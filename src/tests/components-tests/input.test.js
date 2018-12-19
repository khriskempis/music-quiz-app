import React from 'react';
import {shallow, mount} from 'enzyme';
import { Field } from 'redux-form';

import Input from '../../components/input';

describe('<input/>', () => {

  it('should render without crashing', ()=> {
    const meta = {
      touched: false,
      error: null,
      warning: null
    }
    const input = {
      name: "name"
    }
    shallow(<Input meta={meta} input={input}/>)
  });

  it('should render a warning', ()=>{
    const meta = {
      touched: true,
      error: null,
      warning: "Required"
    }
    const input = {
      name: "name"
    }
    const wrapper = shallow(<Input meta={meta} input={input}/>)
    expect(wrapper.find('.form-warning')).toHaveLength(1);
  });

  it('should render an error', ()=> {
    const meta = {
      touched: true,
      error: "Invalid email",
      warning: null
    }
    const input = {
      name: "name"
    }
    const wrapper = shallow(<Input meta={meta} input={input}/>)

    expect(wrapper.find('.form-error')).toHaveLength(1);
  })
})