import './Test.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  numberOfQuestions: state.testData.numberOfQuestions,
  currentQuestion: state.testData.currentQuestion,
  data: "",
})

export class testForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      cardId: 1,
      note: "A"
    }
  }

  render() {
    return (
      <div>
        <form className="test-container">
          <div className="test-timer">
              <p>4:30</p>
            </div>

            <div className="test-question-number">
              <p><span>{this.props.currentQuestion}</span>/<span>{this.props.numberOfQuestions}</span></p>
            </div>

            <div className="test-question">
              <img src="" alt="picture of music note"/>
            </div>

            <div className="answers-container">
              <button>A</button>
              <button>G</button>
              <button>D</button>
              <button>C</button>
            </div>

            <button className="test-next">Next</button>

        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(testForm);