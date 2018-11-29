import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import TestForm from "./testForm";
import TestHeader from './testHeader';
import Loading from '../../components/loading';


import Navigation from '../../components/navigation'
import MyDashboardButton from '../../components/myDashboardButton';
import { stat } from 'fs';

const mapStateToProps = state => ({
  testName: state.testData.testName,
  hasFinished: state.testData.hasFinished,
  isLoading: state.testData.loading,
  currentQuestion: state.testData.currentQuestion,
  isLoggedIn: state.auth.currentUser !== null,
})

function Test(props) {
  if(props.isLoading){
    return <Loading />
  }

  if(props.hasFinished && currentQuestion === 10){
    return <Redirect to="/results" />
  }

  return (
    <div className="test-page">
      <Navigation />
      
      <main>
      {props.isLoggedIn && 
          <MyDashboardButton />
        }

        <TestHeader title={props.testName}/>

        <section>
          <TestForm />
          </section>

      </main>
    </div>
  );
}


export default connect(mapStateToProps)(Test);