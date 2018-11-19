export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const fetchDataSucces = data => ({
  type: FETCH_DATA_SUCCESS,
  data
});

export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error
})

// export const fetchData = () => dispatch => {

// }

export const SET_NUMBER_OF_QUESTONS = "SET_NUMBER_OF_QUESTIONS";
export const setNumberOfQuestions = num => ({
  type: SET_NUMBER_OF_QUESTONS,
  num
});

export const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";
export const setCurrentQuestion = () => ({
  type: SET_CURRENT_QUESTION,
})

export const SET_CURRENT_CARD = "SET_CURRENT_CARD";
export const setCurrentCard = () => ({
  type: SET_CURRENT_CARD,
})

export const SET_TEST_NAME = "SET_TEST_NAME";
export const setTestName = testName => ({
  type: SET_TEST_NAME,
  testName
})

export const ADD_WRONG_ANSWER = "ADD_WRONG_ANSWER";
export const addWrongAnswer = cardId => ({
  type: ADD_WRONG_ANSWER,
  cardId
});

export const ADD_CORRECT_ANSWER = "ADD_CORRECT_ANSWER";
export const addCorrectAnswer = cardId => ({
  type: ADD_CORRECT_ANSWER,
  cardId
});

export const RESTART_TEST = "RESTART_TEST";
export const restartTest = () => ({
  type: RESTART_TEST
})

