import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import RegisterForm from '../../components/registerForm';

const mapStateToProps = state => ({
  hasFinished: state.testData.hasFinished,
  isLoggedIn: state.auth.currentUser !== null
})


function Register(props) {

  return (

    <div>
      <header>
        <h2>Register</h2>
      </header>

      <RegisterForm 
        hasFinished={props.hasFinished}
        isLoggedIn={props.isLoggedIn}
        />

      {/* {props.hasFinished ? (
          <Link to="/dashboard" ><button type="submit">Sign me up!</button></Link>
        ) : (
          <Link to="/results" ><button type="submit">Sign me up!</button></Link>
        )
      } */}

    </div>
  );
}

export default connect(mapStateToProps)(Register);