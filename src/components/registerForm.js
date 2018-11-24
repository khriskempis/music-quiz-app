import React, { Component } from 'react';
import { reduxForm, Field, focus} from 'redux-form';
import {Link} from 'react-router-dom';

import './registerForm.css';

class registerForm extends Component {
  render() {


    return (
      <div className="register-form-container">
        <h3>Start Testing!</h3>
        <form className="register-form">
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" type="text" component="input" />

          <label htmlFor="email">Email</label>
          <Field name="email" id="email" type="text" component="input" />

          <label htmlFor="password">Password</label>
          <Field name="password" id="password" type="text" component="input" />

          <label htmlFor="confirm-password">Confirm Password</label>
          <Field name="confirm-password" id="confirm-password" type="text" component="input" />
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