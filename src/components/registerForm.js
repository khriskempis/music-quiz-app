import React, { Component } from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import { Redirect, Link } from 'react-router-dom';

import {registerUser} from '../actions/users';
import {login} from '../actions/auth'
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

import './registerForm.css'

const passwordLength = length({min: 6, max: 30});
const matchesPassword = matches('password');

export class registerForm extends Component {
  onSubmit(values){
    const {name, email, password} = values;
    const user = {name, email, password}
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(email, password)));
  }

  render() {
    if(this.props.isLoggedIn && !this.props.hasFinished){
      return <Redirect to="/results" />
    }

    if(this.props.isLoggedIn){
      return <Redirect to="/dashboard"/>
    }

    return (
      <div className="register-form-container">
        <h3>Start Testing!</h3>
        <form 
          className="register-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
      

            <Field 
              label="Name"
              name="name" 
              id="name" 
              type="text" 
              component={Input}
              validate={[required, nonEmpty, isTrimmed]} />
            
          

          
            <Field 
              label="Email"
              name="email" 
              id="email" 
              type="text" 
              component={Input}
              validate={[required, nonEmpty, isTrimmed]}  
            />
          

          
            <Field 
              label="Password"
              name="password" 
              id="password" 
              type="password" 
              component={Input}
              validate={[required, passwordLength, isTrimmed]}  
            />
          

          
            <Field 
              label="Confirm Password"
              name="confirm-password" 
              id="confirm-password" 
              type="password" 
              component={Input}
              validate={[required, nonEmpty, matchesPassword]}
            />
          

          <button 
            className="register-button"
            type="submit">Sign Me Up!</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'register-email',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('register-email', Object.keys(errors)[0]))
})(registerForm);