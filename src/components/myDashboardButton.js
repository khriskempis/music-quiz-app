import React from 'react';
import { Link } from 'react-router-dom';

function myDashboardButton(props) {
  return (
    <div className="my-dashboard-button">
      <Link to="/dashboard" >
        <button>My Dashboard</button>
      </Link>
    </div>
  );
}


export default myDashboardButton