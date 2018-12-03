import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchTestMiddle} from '../../actions/test-data'

function hero(props){
  return (
    <div>
      <header>
        <h1>Music Tests</h1>
        <p>The best way to practice your sight-reading skills</p>
        <Link to="/test">
          <button 
            onClick={e => props.dispatch(fetchTestMiddle())}>
            Take a Test!
          </button>
        </Link>
      </header>
    </div>
  );
}

export default connect()(hero);