import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import testReducer from "./reducers/test-data";
import authReducer from "./reducers/auth";

import {loadAuthToken} from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    form: formReducer,
    testData: testReducer,
    auth: authReducer
  }),
  composeEnhancer(
  applyMiddleware(thunk)
));

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}



export default store; 