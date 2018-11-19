import {
  SET_NUMBER_OF_QUESTONS,
  SET_CURRENT_QUESTION,
  ADD_WRONG_ANSWER,
  ADD_CORRECT_ANSWER,
  SET_CURRENT_CARD,
  SET_TEST_NAME,
  RESTART_TEST
} from '../actions/test-data';

const initialState = {
  numberOfQuestions: 10,
  currentQuestion: 1,
  currentCard: {
    imgUrl: "test",
    cardId: "a",
    note: "a"
  },
  testName: "Treble Clef",
  wrongAnswers: [],
  correctAnswers: [],
  data: [
    {
      imgUrl: "../imgs/BASS/JPGs/A2.jpg",
      cardId: "A2",
      note: "A"
    },
    {
      imgUrl: "../imgs/BASS/JPGs/A3.jpg",
      cardId: "A3",
      note: "A"
    },
    {
      imgUrl: "../imgs/BASS/JPGs/B2.jpg",
      cardId: "B2",
      note: "B"
    },
    {
      imgUrl: "../imgs/BASS/JPGs/B3.jpg",
      cardId: "B3",
      note: "B"
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
        currentCard: state.data[Math.floor(Math.random() * state.data.length)],
        currentQuestion: state.currentQuestion+=1,
      })
    case SET_TEST_NAME:
      return Object.assign({}, state, {
        testName: action.testName
      })
    case RESTART_TEST:
      return Object.assign({}, state, {
        currentQuestion: 1
      })
    default: 
      return state
  }
};