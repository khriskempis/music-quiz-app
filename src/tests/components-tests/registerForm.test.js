import React from 'react';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import {Field, reduxForm } from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';

import {registerForm as RegisterForm} from '../../components/registerForm'
import RegisterFormConnected from '../../components/registerForm'
import Input from '../../components/input';
import store from '../../store';

describe('<Form />', ()=> {
  it('should register without crashing', ()=> {
    const handleSubmit = jest.fn()
    shallow(<RegisterForm handleSubmit={handleSubmit}/>)
  })

  it('should have 4 inputs', ()=> {
    const handleSubmit = jest.fn()
    const wrapper = shallow(<RegisterForm handleSubmit={handleSubmit}/>)

    expect(wrapper.contains(
      <Field 
        label="Name"
        name="name" 
        id="name" 
        type="text" 
        component={Input}
        validate={[required, nonEmpty, isTrimmed]}/>)).toEqual(true);
  })

  it('should call onSubmit when submitted', ()=> {
    const handleSubmit = jest.fn()
    const wrapper = shallow(<RegisterForm handleSubmit={handleSubmit}/>)
    wrapper.simulate('submit')
    expect(handleSubmit).toHaveBeenCalled(); 
  })

  // it('should be submitted with the proper values', ()=> {
  //   const handleSubmit = jest.fn();
  //   const dispatch = jest.fn();
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <RegisterFormConnected handleSubmit={handleSubmit} dispatch={dispatch}/>
  //     </Provider>)
  //   const values = {
  //     name: "testName",
  //     email: "testEmail@email.com",
  //     password: "testPassword"
  //   }

  //   wrapper.instance().onSubmit(values)
  //   wrapper.simulate('submit');

  //   expect(handleSubmit).toHaveBeenCalledWith(values);

  // });

});