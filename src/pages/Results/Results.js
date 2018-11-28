import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import './results.css';

import Navigation from '../../components/navigation';

import {restartTest} from '../../actions/test-data';
import MyDashboardButton from '../../components/myDashboardButton';
import { stat } from 'fs';

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
    return "0%"
  }

  return score * 100
}

function Results(props) {
  return (
    <div>
      <Navigation />

      <div className="results-container">

        {props.isLoggedIn<MyDashboardButton />}

        <header>
          <h2>Results</h2>
        </header>

        <p>You Scored: </p>

        <p><span className="score-display">{calculateScore(props.score)}%</span></p>

        <div className="score-details">
          <p>Correct Notes:</p>
          <span className="correct-notes">{props.correctAnswers.length}/{props.numberOfQuestions}</span>
          <p>Time Left:</p>
          <span className="time-taken">{props.timeRemaining}</span>
          <p>Need to Practice</p>
          <span className="quickest-response">{props.wrongAnswers.join(', ')}</span>
        </div>
      </div>
      <Link to="/test">
        <button onClick={e => props.dispatch(restartTest())}>Take it Again</button>
      </Link>
    </div>
  );
}

export default connect(mapStateToProps)(Results)