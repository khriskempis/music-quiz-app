import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './results.css';

import Navigation from '../../components/navigation';

import {restartTest} from '../../actions/test-data';

const mapStateToProps = state => ({
  score: (state.testData.numberOfQuestions - state.testData.wrongAnswers.length) / state.testData.numberOfQuestions,
  numberOfQuestions: state.testData.numberOfQuestions,
  correctAnswers: state.testData.correctAnswers,
  wrongAnswers: state.testData.wrongAnswers,
  timeRemaining: state.testData.timeRemaining,
  hasFinished: state.testData.hasFinished
})

function Results(props) {
  if(!props.hasFinished){
    return <Redirect to="/test" />
  }

  return (
    <div>
      <Navigation />

      <div className="results-container">

        <header>
          <h2>Results</h2>
        </header>

        <p>You Scored: </p>

        <p><span className="score-display">{props.score * 100}%</span></p>

        <div className="score-details">
          <p>Correct Notes:</p>
          <span className="correct-notes">{props.correctAnswers.length}/{props.numberOfQuestions}</span>
          <p>Time Left:</p>
          <span className="time-taken">{props.timeRemaining}</span>
          <p>Need to Practice</p>
          <span className="quickest-response">{props.wrongAnswers.join(', ')}</span>
        </div>
      </div>
      <button onClick={e => {
        props.dispatch(restartTest())
      }
    }>Take it Again</button>
    </div>
  );
}

export default connect(mapStateToProps)(Results)