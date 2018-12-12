import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import Register from '../pages/Register/Register';
import SignIn from '../pages/Sign-In/SignIn';
import Test from '../pages/Test/Test';
import Dashboard from "../pages/Dashboard/Dashboard";
import Results from "../pages/Results/Results";

import './App.css';

function App(props){
  return (
    <Router>
      <div className="App">
      <link rel="stylesheet" href="animate.min.css"></link>
        <main>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={SignIn} />
            <Route path="/test" component={Test} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/results" component={Results} />
            <Route exact render={() => <h1>404 Page Does Not Exist!</h1>} />
          </Switch>
          
        </main>
      </div>  
    </Router>
  );
}

export default App;