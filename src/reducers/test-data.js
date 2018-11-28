import {
  SET_NUMBER_OF_QUESTONS,
  SET_CURRENT_QUESTION,
  ADD_WRONG_ANSWER,
  ADD_CORRECT_ANSWER,
  SET_CURRENT_CARD,
  SET_TEST_NAME,
  BEGIN_TEST,
  RESTART_TEST,
  SET_HAS_STARTED,
  SET_HAS_FINISHED,
  SET_TIME_REMAINING
} from '../actions/test-data';

const initialState = {
  numberOfQuestions: 10,
  currentQuestion: 1,
  currentCard: {},
  testName: "Treble Clef",
  wrongAnswers: [],
  correctAnswers: [],
  hasStarted: false,
  hasFinished: true,
  timeRemaining: null,
  data: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion+= 1
      }) 
    case SET_CURRENT_CARD:
      return Object.assign({}, state, {
        currentCard: state.data[Math.floor(Math.random() * state.data.length)]
      })
    case ADD_CORRECT_ANSWER:
      return Object.assign({}, state, {
        correctAnswers: [
          ...state.correctAnswers,
          action.card 
        ]
      })
    case ADD_WRONG_ANSWER: 
      return Object.assign({}, state, {
        wrongAnswers: [
          ...state.wrongAnswers,
          action.card
        ]
      })
    case SET_TEST_NAME:
      return Object.assign({}, state, {
        testName: action.testName
      })

    case SET_HAS_STARTED:
      return Object.assign({}, state, {
        hasStarted: true
      })
    case SET_HAS_FINISHED:
      return Object.assign({}, state, {
        hasFinished: true
      })
    case SET_TIME_REMAINING: 
      return Object.assign({}, state, {
        timeRemaining: action.time
      })
    case BEGIN_TEST: 
      return Object.assign({}, state, {
        testName: action.testName,
        currentQuestion: 1,
        hasFinished: false,
        wrongAnswers: [],
        correctAnswers: [],
      })
    case RESTART_TEST:
      return Object.assign({}, state, {
        currentQuestion: 1,
        hasFinished: false,
        wrongAnswers: [],
        correctAnswers: [],
        timeRemaining: null,
      })
    default: 
      return state
  }
};