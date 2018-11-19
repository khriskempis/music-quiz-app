import './Test.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import MultipleChoice from './multipleChoice';
import Timer from './timer';
import QuestionNumber from './question-number';
import NoteImg from './noteImg'
import NextButton from './nextButton';
import { setCurrentCard } from '../../actions/test-data';

const mapStateToProps = state => ({
  numberOfQuestions: state.testData.numberOfQuestions,
  currentQuestion: state.testData.currentQuestion,
  data: state.testData.data,
  currentCard: state.testData.currentCard
})

export class testForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    this.logging = this.logging.bind(this);
  }

  componentDidMount(){
    // this.generateQuestion();
    this.generateAnswers();
  }

  generateRandomIndex(length){
    return Math.floor(Math.random() * length)
  }

  generateQuestion(){
    // const randomIndex = this.generateRandomIndex(this.props.data.length)
    // const noteCard = this.props.data[randomIndex]
    const noteCard = this.props.currentCard
    // this.setState({
    //     imgUrl: noteCard.imgUrl,
    //     cardId: noteCard.cardId,
    //     note: noteCard.note 
    // },
    // this.generateAnswers
    // );
  }

  generateAnswers(){
    let availableAnswers = ["A", "B", "C", "D", "E", "F", "G"]
    let answers = [];
    let correctAnswer = this.props.currentCard.note;
    answers.push(correctAnswer);
    while(answers.length < 4){
      let answer = availableAnswers.splice(this.generateRandomIndex(availableAnswers.length), 1);
      if (correctAnswer !== answer.join()) {
        answers.push(answer);
      }
    }
    this.setAnswers(this.shuffleAnswers(answers.flat()));
  }

  shuffleAnswers(array){
    const shuffledAnswers = [];
    for(let i=0; i < 4; i++){
      shuffledAnswers.push(array.splice(this.generateRandomIndex(array.length), 1));
    }
    return shuffledAnswers.flat();
  }

  setAnswers(array){
    this.setState({
      answers: array
    })
  };

  updateCard(){
    this.props.dispatch(setCurrentCard())
    this.generateAnswers();
  }


  logging() {
    console.log(this.state);
  }

  

  render() {   

    return (
      <div>
        <button onClick={this.logging}>Log</button>
        <form className="test-container">
          <Timer />
          <QuestionNumber />

          <NoteImg imgUrl='../../imgs/BASS/JPGs/A2.jpg'/>

          <MultipleChoice answers={this.state.answers}/>

        </form>
        <NextButton onClick={e => this.updateCard()}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(testForm);