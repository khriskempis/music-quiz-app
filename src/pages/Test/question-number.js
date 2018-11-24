import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  numberOfQuestions: state.testData.numberOfQuestions,
  currentQuestion: state.testData.currentQuestion
})


function questionNumber(props) {
  return (
    <div className="test-question-number">
      <p><span>{props.currentQuestion}</span>/<span>{props.numberOfQuestions}</span></p>
    </div>
  );
}

export default connect(mapStateToProps)(questionNumber)