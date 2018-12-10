import React from 'react';

import Logo from './logo';
import LogInButton from './loginButton';

export default function navigationsScroll(props) {
  return (
    <nav className="nav-scroll">
        <Logo />
        <LogInButton />
      </nav>
  );
}