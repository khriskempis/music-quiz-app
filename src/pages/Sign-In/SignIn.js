import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/input';
import {login} from '../../actions/auth';
import {required, nonEmpty} from '../../validators';
import {Redirect} from 'react-router-dom';

import './signIn.css';

export class SignIn extends React.Component {

  onSubmit(values){
    return this.props.dispatch(login(values.email, values.password));
  }

  render() {

    if(this.props.submitSucceeded){
      return <Redirect to="/dashboard" />
    }

    let error;
    if(this.props.error){
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }
    return (
        <main>
          <header>
            <h3>Welcome</h3>
            <p>Sign in to view your Dashboard</p>
          </header>
          <div className="sign-in-form-container">
            
            <form 
              className="sign-in-form"
              onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
              <div>
                {error}
                <label htmlFor="username">Email</label>
                <Field 
                  component={Input}
                  type="text" 
                  id="email" 
                  name="email"
                  placeholder="Email"
                  validate={[required, nonEmpty]}/>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field 
                  component={Input}
                  type="password" 
                  id="password" 
                  name="password"
                  placeholder="Password"
                  validate={[required, nonEmpty]}/>
              </div>
                <button 
                  className="sign-in-button"
                  disabled={this.props.pristine || this.props.submitting}
                  >Sign In</button>
            </form>
          </div>
      </main>

    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(SignIn)