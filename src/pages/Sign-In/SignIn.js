import React from 'react';
import {login} from '../../actions/auth';

import SignInForm from './signInForm';
import RequireLogin from '../../components/requireLogin'

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
    return (
        <main>
          <header className="sign-in-header">
            <h3>Welcome</h3>
            <p>Sign in to view your Dashboard</p>
          </header>
          <div className="sign-in-form-container">


            <SignInForm />
            
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

export default RequireLogin()(SignIn);