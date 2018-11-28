import { API_BASE_URL, API_SERVER_URL } from "../config";

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
export const addWrongAnswer = card => ({
  type: ADD_WRONG_ANSWER,
  card
});

export const ADD_CORRECT_ANSWER = "ADD_CORRECT_ANSWER";
export const addCorrectAnswer = card => ({
  type: ADD_CORRECT_ANSWER,
  card
});

export const SET_HAS_STARTED = "SET_HAS_STARTED";
export const setHasStarted = () => ({
  type: SET_HAS_STARTED,
})

export const SET_HAS_FINISHED = "SET_HAS_FINISHED";
export const setHasFinished = () => ({
  type: SET_HAS_FINISHED
})

export const SET_TIME_REMAINING = "SET_TIME_REMAINING";
export const setTimeRemaining = time => ({
  type: SET_TIME_REMAINING,
  time
})

export const TEST_REQUEST = "TEST_REQUEST";
export const testRequest = () => ({
  type: TEST_REQUEST
})

export const TEST_SUCCESS = "TEST_SUCCESS";
export const testSuccess = test => ({
  type: TEST_SUCCESS,
  test
})

export const TEST_ERROR = "TEST_ERROR";
export const testError = error => ({
  type: TEST_ERROR,
  error
})

export const BEGIN_TEST = "BEGIN_TEST";
export const beginTest = testName => ({
  type: BEGIN_TEST,
  testName
})

export const RESTART_TEST = "RESTART_TEST";
export const restartTest = () => ({
  type: RESTART_TEST
})

export const fetchTestType = test => dispatch => {
  dispatch(testRequest());
  return (
    fetch(`${API_SERVER_URL}/data/type/${test}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject({
          message: "a Problem occured"
        })
      }
      return res.json()
    })
    .then(testData => {
      dispatch(testSuccess(testData))
    })
    .catch(err => {
      dispatch(testError(err));
    })
  )
}

export const fetchTestMiddle = test => dispatch => {
  dispatch(testRequest());
  return (
    fetch(`${API_SERVER_URL}/data/test/middle`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject({
          message: "a Problem Occured"
        })
      }
      return res.json()
    })
    .then(testData => {
      dispatch(testSuccess(testData))
    })
    .catch(err => {
      dispatch(testError(err));
    })
  )
}

