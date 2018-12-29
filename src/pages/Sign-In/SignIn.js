import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../components/input';
import {login} from '../../actions/auth';
import {required, nonEmpty} from '../../validators';

import {Redirect, Link} from 'react-router-dom';

import './signIn.css';

export class SignIn extends React.Component {
  state = {
    demoAccount: false
  }

  addDemoAccount = () => {
    this.setState({
      demoAccount: !this.state.demoAccount
    })

  }

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
        <div className="sign-in-form-error animated shake" aria-live="polite">
          {this.props.error}
        </div>
      )
    }
    return (
        <main>
          <header className="sign-in-header">
            <h3>Welcome</h3>
            <p>Sign in to view your Dashboard</p>
          </header>
          <div className="sign-in-form-container">
            
            <form 
              className="sign-in-form"
              onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
              <div>
                {error}
                <Field 
                  label="Email"
                  component={Input}
                  type="text" 
                  id="email" 
                  name="email"
                  placeholder="Email"
                  validate={[required, nonEmpty]}/>
              </div>
              <div>
                <Field 
                  label="Password"
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
                <Link to="/register">
                  <button className="sign-in-register-button">Register</button> 
                </Link>
            </form>
            <div className="demo-account">
                
                <button 
                  className="demo-account-button"
                  onClick={this.addDemoAccount}>View Demo Account</button>
                {this.state.demoAccount && 
                  <div className="demo-credentials">
                    <p className="demo-email-title">Email:</p> 
                    <p className="demo-email">demoAccount</p>
                    <p className="demo-password-title">Password:</p> 
                    <p className="demo-password">demoAccount</p>
                  </div>
                }
              </div>
          </div>
      </main>

    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(SignIn)