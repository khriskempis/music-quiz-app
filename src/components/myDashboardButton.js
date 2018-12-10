import React from 'react';
import { Link } from 'react-router-dom';

import './myDashboardButton.css';

function myDashboardButton(props) {
  return (
    <div className="my-dashboard-button">
      <Link to="/dashboard" >
        My Dashboard
      </Link>
    </div>
  );
}


export default myDashboardButton