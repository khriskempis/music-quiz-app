import './Test.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import PianoKeyboard from './pianoKeyboard';
import Timer from './timer';
import QuestionNumber from './question-number';
import NoteImg from './noteImg'
import NextButton from './nextButton';
import StatusMessage from './statusMessage';

import { 
  setCurrentCard, 
  setCurrentQuestion, 
  addWrongAnswer, 
  addCorrectAnswer,
  setHasFinished,
} from '../../actions/test-data';

const mapStateToProps = state => ({
  data: state.testData.data,
  currentCard: state.testData.currentCard,
  hasStarted: state.testData.hasStarted,
  hasFinished: state.testData.hasFinished,
  responses: state.testData.responses
})

export class testForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: ["C", "D", "E", "F", "G", "A", "B"],
      hasAnswered: false,
    };
  }

  componentDidMount(){
    this.props.dispatch(setCurrentCard());
  }

  updateCard(){
    // sets a new Card while also incrementing question by 1
    this.props.dispatch(setCurrentCard());
    this.props.dispatch(setCurrentQuestion());
    // updates UI state where user has not answered yet 
    this.setState({
      hasAnswered: false
    })
  }

  checkAnswer(answer){
    // updates UI where user has made an answer
    this.setState({
      hasAnswered: true,
    });

    const correctAnswer = this.props.currentCard.note

    if (answer !== correctAnswer){
      this.props.dispatch(addWrongAnswer(correctAnswer))
    } else {
      this.props.dispatch(addCorrectAnswer(correctAnswer))
    }
  }

  endTest(){
    this.props.dispatch(setHasFinished())
  }

  render() {   

    return (
      <div>
        <div className="status-bar">
          <Timer 
            hasAnswered={this.state.hasAnswered}
            hasStarted={this.props.hasStarted}
            hasFinished={this.props.hasFinished}
            endTest={e => this.endTest()}/>

          <StatusMessage 
            response={this.props.responses[Math.floor(Math.random() * this.props.responses.length)]}
            hasAnswered={this.state.hasAnswered}
            note={this.props.currentCard.note} />

          <QuestionNumber />
        </div>

        <form className="test-container" onSubmit={e => e.preventDefault()}>

          <NoteImg imgUrl={this.props.currentCard.imgUrl} />

          <PianoKeyboard 
            disabled={this.state.hasAnswered} 
            answers={this.state.answers} 
            onClick={answer => this.checkAnswer(answer)}/>

        </form>
        {this.state.hasAnswered && 
        <NextButton 
        updateCard={e => this.updateCard()}
        endTest={e => this.endTest()}/>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(testForm);