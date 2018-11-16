import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class hero extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Music Test</h1>
          <p>The best way to practice your sight-reading skills</p>
          <Link to="/test"><button>Take a Test!</button></Link>
        </header>
      </div>
    );
  }
}

export default hero;