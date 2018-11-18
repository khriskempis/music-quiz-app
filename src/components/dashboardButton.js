import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import './dashboardButton.css';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
})

export function button(props){

  return (
    <div>
      {props.isLoggedIn ? (
        <Link to="/dashboard" >
          <button className="dashboard-button">My Dashboard</button>
        </Link>
      ) : (
        <Link to="/signin" >
          <button className="dashboard-button">Sign In</button>
        </Link>
      )}
    </div>
  )
};

export default connect(mapStateToProps)(button);