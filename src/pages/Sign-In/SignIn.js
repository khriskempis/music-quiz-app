import React from 'react';
import {Link} from 'react-router-dom';

import './signIn.css';

export function SignIn(props) {
  return (
      <main>
        <header>
          <h3>Welcome</h3>
          <p>Sign in to view your Dashboard</p>
        </header>
        <div className="sign-in-form-container">
          <form className="sign-in-form">
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Username"/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password"/>
            </div>
            <Link to="/dashboard">
              <button className="sign-in-button">Sign In</button>
            </Link>
          </form>
        </div>
     </main>

  );
}

export default SignIn