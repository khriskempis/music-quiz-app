import React from 'react';

import './sidebar.css';

function sidebar(props) {
  return (
    <div>
      <section>
        <div className="sidebar-links">

          <div className="user-image">
            <p>student</p>
          </div>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Take a Test</a></li>
            <li><a href="#">Practice</a></li>
            <li><a href="#">History</a></li>
          </ul>
          <h4>Daily Goals</h4>
          <ul>
            <li>Score 90% or more</li>
            <li>Complete 2 Tests</li>
          </ul>
        </div>
      </section>

    </div>
  );

  }

export default sidebar