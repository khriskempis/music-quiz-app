import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './myDashboardButton.css';
import { setHasFinished } from '../actions/test-data';

export function myDashboardButton(props) {
  return (
    <div className="my-dashboard-button-container">
      <Link to="/dashboard" >
        <button
          className="my-dashboard-button"
          onClick={e => props.dispatch(setHasFinished())}
        >My Dashboard</button>
      </Link>
    </div>
  );
}


export default connect()(myDashboardButton)