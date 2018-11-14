import React from 'react';

function Results(props) {
  return (
    <div>
      <header>
        <h2>Results</h2>
      </header>

      <div className="results-container">

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