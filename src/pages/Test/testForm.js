import "./Test.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import PianoKeyboard from "./pianoKeyboard";
import Timer from "./timer";
import QuestionNumber from "./question-number";
import NoteImg from "./noteImg";

import {
  setCurrentCard,
  setCurrentQuestion,
  addWrongAnswer,
  addCorrectAnswer,
  setHasFinished
} from "../../actions/test-data";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const bassImages = importAll(
  require.context("../../assets/BASS/JPGs", false, /\.(png|jpe?g|svg)$/)
);
const trebleImages = importAll(
  require.context("../../assets/TREBLE/JPGs", false, /\.(png|jpe?g|svg)$/)
);

const mapStateToProps = state => ({
  data: state.testData.data,
  currentCard: state.testData.currentCard,
  hasStarted: state.testData.hasStarted,
  hasFinished: state.testData.hasFinished,
  testType: state.testData.testType,
  currentQuestion: state.testData.currentQuestion
});

export class testForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: null,
      hasAnswered: false
    };
  }

  componentDidMount() {
    this.props.dispatch(setCurrentCard());
  }

  updateCard() {
    // sets a new Card while also incrementing question by 1
    this.props.dispatch(setCurrentCard());
    this.props.dispatch(setCurrentQuestion());
    // updates UI state where user has not answered yet
    this.setState({
      hasAnswered: false,
      isCorrect: null
    });
  }

  checkAnswer(answer) {
    // updates UI where user has made an answer
    this.setState({
      hasAnswered: true
    });

    const correctAnswer = this.props.currentCard.note;

    if (answer !== correctAnswer) {
      this.setState({
        isCorrect: false
      });
      this.props.dispatch(addWrongAnswer(correctAnswer));
    } else {
      this.setState({
        isCorrect: true
      });
      this.props.dispatch(addCorrectAnswer(correctAnswer));
    }
  }

  findImg(bassObj, trebleObj, noteId) {
    const bassArr = Object.keys(bassObj);
    const trebleArr = Object.keys(trebleObj);

    let bassImg = bassArr.find(item => {
      return item.slice(0, 2) === noteId;
    });

    let trebleImg = trebleArr.find(item => {
      return item.slice(0, 2) === noteId;
    });

    if (noteId === "C4T") {
      trebleImg = "C4.jpg";
    }
    return bassObj[bassImg] || trebleObj[trebleImg];
  }

  endTest() {
    this.props.dispatch(setHasFinished());
  }

  render() {
    return (
      <div>
        <div className="status-bar">
          {this.props.testType === "Test" && (
            <Timer
              hasAnswered={this.state.hasAnswered}
              hasStarted={this.props.hasStarted}
              hasFinished={this.props.hasFinished}
              endTest={e => this.endTest()}
            />
          )}

          <QuestionNumber />
        </div>

        <form className="test-container" onSubmit={e => e.preventDefault()}>
          <NoteImg
            currentQuestion={this.props.currentQuestion}
            img={this.findImg(
              bassImages,
              trebleImages,
              this.props.currentCard.noteId
            )}
            hasAnswered={this.state.hasAnswered}
          />

          <PianoKeyboard
            isCorrect={this.state.isCorrect}
            hasAnswered={this.state.hasAnswered}
            onClick={answer => this.checkAnswer(answer)}
            updateCard={e => this.updateCard()}
            endTest={e => this.endTest()}
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(testForm);
