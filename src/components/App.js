import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import Test from '../pages/Test/Test';
import Dashboard from "../pages/Dashboard/Dashboard";

import './App.css';

function App(props){
  return (
    <Router>
      <div className="App">
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/test" component={Test} />
          <Route path="/dashboard" component={Dashboard} />
          
        </main>
      </div>  
    </Router>
  );
}

export default App;