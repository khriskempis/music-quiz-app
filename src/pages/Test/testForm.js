import './Test.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  numberOfQuestions: state.testData.numberOfQuestions,
  currentQuestion: state.testData.currentQuestion,
  data: state.testData.data,
})

export class testForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      cardId: 1,
      note: "",
      answers: [],
    };
    this.logging = this.logging.bind(this);
  }

  componentDidMount(){
    this.generateQuestion();
  }

  generateRandomIndex(length){
    return Math.floor(Math.random() * length)
  }

  generateQuestion(){
    const randomIndex = this.generateRandomIndex(this.props.data.length)
    const noteCard = this.props.data[randomIndex]
    this.setState((state) => {
       return {
        imgUrl: noteCard.imgUrl,
        cardId: noteCard.cardId,
        note: noteCard.note
      }
    });
    console.log(this.props.data[randomIndex]);
    this.generateAnswers();
  }

  generateAnswers(){
    let availableAnswers = ["A", "B", "C", "D", "E", "F", "G"]
    let answers = [];
    let correctAnswer = this.state.note;
    answers.push(correctAnswer);
    while(answers.length < 4){
      let answer = availableAnswers.splice(this.generateRandomIndex(availableAnswers.length), 1);
      if (correctAnswer !== answer.join()) {
        answers.push(answer);
      }
    }
    this.setAnswers(answers.flat());
    
  }

  setAnswers(array){
    this.setState({
      answers: array
    })
  }


  logging() {
    console.log(this.state);
  }

  

  render() {   


    return (
      <div>
        <button onClick={this.logging}>Log</button>
        <form className="test-container">
          <div className="test-timer">
              <p>4:30</p>
            </div>

            <div className="test-question-number">
              <p><span>{this.props.currentQuestion}</span>/<span>{this.props.numberOfQuestions}</span></p>
            </div>

            <div className="test-question">
              <img src={this.state.imgUrl} alt="music note"/>
            </div>

            <div className="answers-container">
              
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