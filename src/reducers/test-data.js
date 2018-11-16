import {
  SET_NUMBER_OF_QUESTONS,
  SET_CURRENT_QUESTION,
  ADD_WRONG_ANSWER,
  ADD_CORRECT_ANSWER
} from '../actions/test-data';

const initialState = {
  numberOfQuestions: 20,
  currentQuestion: 1,
  wrongAnswers: [],
  correctAnswers: [],
  data: [
    {
      imgUrl: "imgs/BASS/A_1@2x-80.jpg",
      cardId: 1,
      note: "A"
    },
  ]
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_QUESTION:
      return action.num 
    default: 
      return state
  }
};