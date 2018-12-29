import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './results.css';

import Navigation from '../../components/navigationsScroll';

import {restartTest} from '../../actions/test-data';
import MyDashboardButton from '../../components/myDashboardButton';

const mapStateToProps = state => ({
  score: (state.testData.numberOfQuestions - state.testData.wrongAnswers.length) / state.testData.numberOfQuestions,
  numberOfQuestions: state.testData.numberOfQuestions,
  correctAnswers: state.testData.correctAnswers,
  wrongAnswers: state.testData.wrongAnswers,
  timeRemaining: state.testData.timeRemaining,
  hasFinished: state.testData.hasFinished,
  isLoggedIn: state.auth.currentUser !== null
})

function calculateScore(score){
  if(score === 0){
    return "0"
  }
  return score * 100
}

export function Results(props) {
  return (
    <div>
      <Navigation />

      <div className="results-container">

        {props.isLoggedIn && 
        <div className="results-dashboard-button">
           <MyDashboardButton />
        </div>}
        <div className="results-display">
          <header>
            <h3>Results</h3>
          </header>

          <p className="title">You Scored: </p>

          <p><span className="score-display">{calculateScore(props.score)}%</span></p>
        </div>
        <div className="score-details">
          <p className="title">Correct Notes:</p>
          <p className="correct-notes detail">{props.correctAnswers.length}/{props.numberOfQuestions}</p>
          <p className="title">Time Left:</p>
          <p className="time-taken detail">{props.timeRemaining}</p>
          <p className="title">Need to Practice</p>
          <p className="quickest-response detail">{props.wrongAnswers.join(', ')}</p>
        </div>

        <Link to="/test">
          <button 
            className="take-again-button"
            onClick={e => props.dispatch(restartTest())}>Take it Again</button>
         </Link>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Results)