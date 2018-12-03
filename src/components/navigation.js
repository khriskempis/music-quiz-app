import React from 'react';


import './navigation.css';

import Logo from './logo.js'
import LogInButton from './loginButton';

function navigation(props) {
  return (
      <nav>
        <Logo />
        <LogInButton />
      </nav>

  );
}


export default navigation;