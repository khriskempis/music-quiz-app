import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchTestMiddle, restartTest, fetchTestType} from '../../actions/test-data'

const startTest = props => {
  props.dispatch(restartTest());
  props.dispatch(fetchTestMiddle());
}

export function hero(props){
  return (
    <div>
      
      <header className="hero-section">
        <h1>The best way to practice your sight-reading!</h1>
        <p>Introducing Music Tests</p>
        <Link to="/test">
          <button 
            className="hero-button"
            onClick={e => startTest(props)}>
            Take a Test
          </button>
        </Link>
      </header>
    </div>
  );
}

export default connect()(hero);