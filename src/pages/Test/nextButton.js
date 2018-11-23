import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  isloggedIn: state.auth.currentUser !== null,
  isTestComplete: state.testData.currentQuestion === state.testData.numberOfQuestions
})


export function nextButton(props) {
    return (
      <div>
        {props.isTestComplete ? (
            <Link to={props.isloggedIn ? "/results" : "/register"}>
              <button className="test-button" onClick={e => props.endTest()}>See Results</button>
            </Link>  
          ) : (
            <button className="test-button" onClick={e => props.updateCard()}>Next</button>
          )
        }  
      </div>
    );
}


export default connect(
  mapStateToProps,
)(nextButton);