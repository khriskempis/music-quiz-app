import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth} from '../actions/auth';

import './loginButton.css';
import { clearAuthToken } from '../local-storage';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
})

export function button(props){

  return (
    <div className="dashboard-button-container">
      {props.isLoggedIn ? (
        <Link to="/" >
          <button 
            className="dashboard-button" 
            onClick={e => {
              props.dispatch(clearAuth())
              clearAuthToken();
              }}
            >Sign Out</button>
        </Link>
      ) : (
        <Link to="/signin" >
          <button 
          className="dashboard-button"
          >LOGIN</button>
        </Link>
      )}
    </div>
  )
};

export default connect(mapStateToProps)(button);