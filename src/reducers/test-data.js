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
      imgUrl: "../../imgs/BASS/JPGs/A2.jpg",
      cardId: "A2",
      note: "A"
    },
    {
      imgUrl: "../../imgs/BASS/JPGs/A3.jpg",
      cardId: "A3",
      note: "A"
    },
    {
      imgUrl: "../../imgs/BASS/JPGs/B2.jpg",
      cardId: "B2",
      note: "B"
    },
    {
      imgUrl: "../../imgs/BASS/JPGs/B3.jpg",
      cardId: "B3",
      note: "B"
    }
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