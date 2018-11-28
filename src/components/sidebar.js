import React from 'react';
import {Link} from 'react-router-dom';

import './sidebar.css';

function sidebar(props) {
  return (
    <div>
      <section>
        <div className="sidebar-links">

          <div className="user-image">
            <p>Welcome {props.user}!</p>
          </div>

          <ul>
            <li><Link to="/dashboard">Practice</Link></li>
          </ul>
        </div>
      </section>

    </div>
  );

}

export default sidebar