import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import Landing from './pages/Landing/Landing';
import Test from './pages/Test/Test';
import Dashboard from "./pages/Dashboard/Dashboard";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
