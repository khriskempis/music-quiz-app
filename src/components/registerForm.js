import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, focus} from 'redux-form';

import './registerForm.css';

function mapStateToProps(state) {
  return {

  };
}

class registerForm extends Component {
  render() {
    return (
      <div class="register-form-container">
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

          <button type="submit">Sign me up</button>
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