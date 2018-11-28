import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import TestForm from "./testForm";
import TestHeader from './testHeader';
import Loading from '../../components/loading';


import Navigation from '../../components/navigation'
import myDashboardButton from '../../components/myDashboardButton';

const mapStateToProps = state => ({
  testName: state.testData.testName,
  hasFinished: state.testData.hasFinished,
  isLoading: state.testData.loading
})

function Test(props) {
  if(props.isLoading){
    return <Loading />
  }

  if(props.hasFinished){
    return <Redirect to="/results" />
  }

  return (
    <div className="test-page">
      <Navigation />
      
      <main>
        
        <myDashboardButton />

        <TestHeader title={props.testName}/>

        <section>
          <TestForm />
        </section>

      </main>
    </div>
  );
}


export default connect(mapStateToProps)(Test);