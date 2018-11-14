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
            <li><a href="#">Practice</a></li>
            <li><a href="#">Take a Test</a></li>
          </ul>
        </div>
      </section>

    </div>
  );

}

export default sidebar