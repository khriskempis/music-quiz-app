import React from 'react';

import './results.css';

import Navigation from '../../components/navigation';

function Results(props) {
  return (
    <div>
      <Navigation />

      <div className="results-container">

        <header>
          <h2>Results</h2>
        </header>

        <p>You Scored: </p>

        <p><span className="score-display">80%</span></p>

        <div className="score-details">
          <p>Correct Notes:</p>
          <span className="correct-notes">8/10</span>
          <p>Time Taken:</p>
          <span className="time-taken">2:35</span>
          <p>Quickest Response:</p>
          <span className="quickest-response">2 sec</span>
          <p>Longest Response:</p>
          <span className="longest-response">10 sec</span>
        </div>
      </div>
      <button>Take it Again</button>
    </div>
  );
}

export default Results