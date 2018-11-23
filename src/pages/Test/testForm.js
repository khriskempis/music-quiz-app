import './Test.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import MultipleChoice from './multipleChoice';
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
  setHasStarted,
  setHasFinished,
  restartTest
} from '../../actions/test-data';

const mapStateToProps = state => ({
  data: state.testData.data,
  currentCard: state.testData.currentCard,
  hasStarted: state.testData.hasStarted,
  hasFinished: state.testData.hasFinished
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
    this.props.dispatch(restartTest());
    this.props.dispatch(setCurrentCard());
    this.props.dispatch(setHasStarted())
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
        <form className="test-container" onSubmit={e => e.preventDefault()}>
          <Timer 
            hasAnswered={this.state.hasAnswered}
            hasStarted={this.props.hasStarted}
            hasFinished={this.props.hasFinished}
            endTest={e => this.endTest()}/>

          <QuestionNumber />

          <NoteImg imgUrl={window.location.origin + '/src/imgs/BASS/JPGs/A2.jpg'}/>
          {this.state.hasAnswered &&
          <StatusMessage note={this.props.currentCard.note}/>}

          <MultipleChoice 
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