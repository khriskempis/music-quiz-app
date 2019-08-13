import {
  SET_NUMBER_OF_QUESTIONS,
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
  SET_OUT_OF_TIME,
  TEST_REQUEST,
  TEST_SUCCESS,
  TEST_ERROR,
  TEST_TYPE
} from "../actions/test-data";

const initialState = {
  loading: false,
  error: null,

  numberOfQuestions: 10,
  currentQuestion: 1,
  currentCard: {},
  testName: "Treble Clef",
  wrongAnswers: [],
  correctAnswers: [],
  hasStarted: false,
  hasFinished: true,
  timeRemaining: null,
  outOfTime: false,
  testType: "practice",
  responses: ["Great Job!", "Keep It Up!", "Amazing!", "Are you a Musician?"],
  data: [
    {
      imgUrl: "../../assets/BASS/JPGs/C4.jpg",
      noteId: "C4",
      note: "C",
      clef: "treble"
    },
    {
      imgUrl: "../../assets/BASS/JPGs/D4.jpg",
      noteId: "D4",
      note: "D",
      clef: "treble"
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: (state.currentQuestion += 1)
      });
    case SET_NUMBER_OF_QUESTIONS:
      return Object.assign({}, state, {
        numberOfQuestions: action.num
      });
    case SET_CURRENT_CARD:
      return Object.assign({}, state, {
        currentCard: state.data[Math.floor(Math.random() * state.data.length)]
      });
    case ADD_CORRECT_ANSWER:
      return Object.assign({}, state, {
        correctAnswers: [...state.correctAnswers, action.card]
      });
    case ADD_WRONG_ANSWER:
      return Object.assign({}, state, {
        wrongAnswers: [...state.wrongAnswers, action.card]
      });
    case SET_TEST_NAME:
      return Object.assign({}, state, {
        testName: action.testName
      });

    case SET_HAS_STARTED:
      return Object.assign({}, state, {
        hasStarted: action.bool
      });
    case SET_HAS_FINISHED:
      return Object.assign({}, state, {
        hasFinished: true
      });
    case SET_TIME_REMAINING:
      return Object.assign({}, state, {
        timeRemaining: action.time
      });
    case SET_OUT_OF_TIME:
      return Object.assign({}, state, {
        outOfTime: !state.outOfTime
      });
    case TEST_TYPE:
      return Object.assign({}, state, {
        testType: action.selection
      });
    case TEST_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case TEST_SUCCESS:
      return Object.assign({}, state, {
        data: action.test
      });
    case TEST_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    case BEGIN_TEST:
      return Object.assign({}, state, {
        testName: action.testName,
        loading: false,
        currentQuestion: 1,
        hasStarted: true,
        hasFinished: false,
        outOfTime: false,
        wrongAnswers: [],
        correctAnswers: []
      });
    case RESTART_TEST:
      return Object.assign({}, state, {
        currentQuestion: 1,
        outOfTime: false,
        hasFinished: false,
        wrongAnswers: [],
        correctAnswers: [],
        timeRemaining: null
      });
    default:
      return state;
  }
}
