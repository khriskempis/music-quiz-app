import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentCard: state.testData.currentCard,
  responses: state.testData.responses
})

function statusMessage(props) {
  return (
    <div className="test-status-message">
        {props.isCorrect ? ( 
          <p className="status-response correct animated tada">
            {props.responses[Math.floor(Math.random() * props.responses.length)]}
          </p>
          ) : (
          <p className="status-response incorrect animated shake">
            Incorrect
          </p>
          )
        }
      <p>The Correct Answer was <span className="test-correct-note">{props.currentCard.note}</span></p>
    </div>
  );
}

export default connect(mapStateToProps)(statusMessage);