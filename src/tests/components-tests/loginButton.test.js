import React from 'react';
import {shallow} from 'enzyme';

import {button as LogInButton} from '../../components/loginButton';

describe('<LogInButton />', ()=> {
  it('should render without crashing', ()=> {
    shallow(<LogInButton/>)
  })

  it('should render Login Button', ()=> {
    const wrapper = shallow(<LogInButton isLoggedIn={false}/>)
    const button = wrapper.find('.dashboard-button')
    expect(button.text()).toEqual('LOGIN')
  })

  it('should render Sign Out button', ()=> {
    const wrapper = shallow(<LogInButton isLoggedIn={true}/>)
    const button = wrapper.find('.dashboard-button');
    expect(button.text()).toEqual('Sign Out');
  })
})