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
  SET_TIME_REMAINING,
  TEST_REQUEST,
  TEST_SUCCESS,
  TEST_ERROR
} from '../actions/test-data';

const initialState = {
  loading: false,
  error: null,

  numberOfQuestions: 10,
  currentQuestion: 1,
  currentCard: {
    imgUrl: "test",
    noteId: "A3",
    note: "A",
    clef: "treble"
  },
  testName: "Treble Clef",
  wrongAnswers: [],
  correctAnswers: [],
  hasStarted: false,
  hasFinished: false,
  timeRemaining: null,
  data: [
    {
      imgUrl: "test",
      noteId: "A3",
      note: "A",
      clef: "treble"
    },
    {
      imgUrl: "test",
      noteId: "B3",
      note: "B",
      clef: "treble"
    }
  ]
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
        hasStarted: !state.hasStarted
      })
    case SET_HAS_FINISHED:
      return Object.assign({}, state, {
        hasFinished: true
      })
    case SET_TIME_REMAINING: 
      return Object.assign({}, state, {
        timeRemaining: action.time
      })
    case TEST_REQUEST: 
      return Object.assign({}, state, {
        loading: true
      })
    case TEST_SUCCESS: 
      return Object.assign({}, state, {
        loading: false,
        data: action.test
      })
    case TEST_ERROR: 
      return Object.assign({}, state, {
        loading: false,
        error: action.error
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