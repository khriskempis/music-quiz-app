import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function hero(props){
  return (
    <div>
      <header>
        <h1>Music Test</h1>
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