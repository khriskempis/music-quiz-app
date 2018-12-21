import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchTestMiddle} from '../../actions/test-data'

export function hero(props){
  return (
    <div>
      
      <header className="hero-section">
        <h1>The best way to practice your sight-reading!</h1>
        <p>Introducing Music Tests</p>
        <Link to="/test">
          <button 
            className="hero-button"
            onClick={e => props.dispatch(fetchTestMiddle())}>
            Take a Test
          </button>
        </Link>
      </header>
    </div>
  );
}

export default connect()(hero);