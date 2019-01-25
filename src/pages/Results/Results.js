import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './results.css';

import Navigation from '../../components/navigationsScroll';

import {restartTest} from '../../actions/test-data';
import MyDashboardButton from '../../components/myDashboardButton';

const mapStateToProps = state => ({
  numberOfQuestions: state.testData.numberOfQuestions,
  correctAnswers: state.testData.correctAnswers,
  wrongAnswers: state.testData.wrongAnswers,
  timeRemaining: state.testData.timeRemaining,
  hasFinished: state.testData.hasFinished,
  isLoggedIn: state.auth.currentUser !== null
})

const calculateScore = (correctAnswers, numberOfQuestions) => {
  return (correctAnswers/numberOfQuestions) * 100
}

const calculateWrongAnswers = wrongAnswers => {
  let needPracticeArr = Array.from(new Set(wrongAnswers))

  return needPracticeArr.join(', ')
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

          <p><span className="score-display">{calculateScore(props.correctAnswers.length, props.numberOfQuestions)}%</span></p>
        </div>
        <div className="score-details">
          <p className="title">Correct Notes:</p>
          <p className="correct-notes detail">{props.correctAnswers.length}/{props.numberOfQuestions}</p>
          <p className="title">Time Left:</p>
          <p className="time-taken detail">{props.timeRemaining}</p>
          {props.wrongAnswers.length !== 0 ? ( 
            <div className="practice-details">
              <p className="title">Need to Practice</p>
              <p className="quickest-response detail">{calculateWrongAnswers(props.wrongAnswers)}</p>
            </div>
            ) : (
            <div className="perfect-score animated heartBeat">
              <p>Perfect Score!</p>
            </div>
            )
        }
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