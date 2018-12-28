import React from 'react';
import {Link} from 'react-router-dom'

import './logo.css';

function logo(props) {
  return (
    <div className="logo">
      <Link to="/">Music Tests</Link>
    </div>
  );
}

export default logo