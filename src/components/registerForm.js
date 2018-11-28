import React, { Component } from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import { Redirect, Link } from 'react-router-dom';

import {registerUser} from '../actions/users';
import {login} from '../actions/auth'
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

const passwordLength = length({min: 6, max: 30});
const matchesPassword = matches('password');

class registerForm extends Component {
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
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" type="text" component={Input} />

          <label htmlFor="email">Email</label>
          <Field 
            name="email" 
            id="email" 
            type="text" 
            component={Input}
            validate={[required, nonEmpty, isTrimmed]}  
          />

          <label htmlFor="password">Password</label>
          <Field 
            name="password" 
            id="password" 
            type="password" 
            component={Input}
            validate={[required, passwordLength, isTrimmed]}  
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <Field 
            name="confirm-password" 
            id="confirm-password" 
            type="password" 
            component={Input}
            validate={[required, nonEmpty, matchesPassword]}
          />

          <button type="submit">Sign Me Up!</button>

          {/* {this.props.hasFinished ? (
          <Link to="/dashboard" ><button type="submit">Sign me up!</button></Link>
        ) : (
          <Link to="/results" ><button type="submit">Sign me up!</button></Link>
        )
      } */}
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