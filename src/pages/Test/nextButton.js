import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NextIcon from '../../assets/icons/next'

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null,
  isTestComplete: state.testData.currentQuestion === state.testData.numberOfQuestions
})


export function nextButton(props) {
    return (
      <div>
        {props.isTestComplete ? (
            props.isLoggedIn ? (
              <Link to="/results" >
                <button className="test-button" onClick={e => props.endTest()}>See Results</button>
              </Link>  
            ) : (
              <Link to="/register" >
                <button className="test-button">See Results</button>
              </Link>
            )
          ) : (
            <button className="test-button" onClick={e => props.updateCard()}>
              <NextIcon />
            </button>
          )
        }  
      </div>
    );
}


export default connect(mapStateToProps)(nextButton);