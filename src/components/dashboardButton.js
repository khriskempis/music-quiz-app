import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth} from '../actions/auth';

import './dashboardButton.css';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
})

export function button(props){

  return (
    <div>
      {props.isLoggedIn ? (
          <button 
            className="dashboard-button" 
            onClick={e => {props.dispatch(clearAuth())}}
            >Sign Out</button>
      ) : (
        <Link to="/signin" >
          <button 
          className="dashboard-button"
          >Sign In</button>
        </Link>
      )}
    </div>
  )
};

export default connect(mapStateToProps)(button);