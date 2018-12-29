import React from 'react';
import {connect} from 'react-redux';

import RegisterForm from '../../components/registerForm';
import Navigation from '../../components/navigationsScroll';

import './register.css'

const mapStateToProps = state => ({
  hasFinished: state.testData.hasFinished,
  isLoggedIn: state.auth.currentUser !== null
})


export function Register(props) {

  return (

    <div className="register-container">
      <Navigation />
      <header>
        <h2>Register</h2>
      </header>

      <RegisterForm 
        hasFinished={props.hasFinished}
        isLoggedIn={props.isLoggedIn}
        />
        
    </div>
  );
}

export default connect(mapStateToProps)(Register);