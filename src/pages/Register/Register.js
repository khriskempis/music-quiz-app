import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import RegisterForm from '../../components/registerForm';

const mapStateToProps = state => ({
  hasFinished: state.testData.hasFinished
})


function Register(props) {

  return (
    <div>
      <header>
        <h2>Register</h2>
      </header>

      <RegisterForm />

      {props.hasFinished ? (
          <Link to="/dashboard" ><button type="submit">Sign me up!</button></Link>
        ) : (
          <Link to="/results" ><button type="submit">Sign me up!</button></Link>
        )
      }

    </div>
  );
}

export default connect(mapStateToProps)(Register);