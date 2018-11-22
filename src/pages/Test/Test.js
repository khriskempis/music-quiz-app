import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import TestForm from "./testForm";
import TestHeader from './testHeader';


import Navigation from '../../components/navigation'

const mapStateToProps = state => ({
  testName: state.testData.testName,
  hasFinished: state.testData.hasFinished
})

function Test(props) {
  if(props.hasFinished){
    return <Redirect to="/results" />
  }

  return (
    <div className="test-page">
      <Navigation />
      
      <main>

        <TestHeader title={props.testName}/>

        <section>
          <TestForm />
        </section>

      </main>
    </div>
  );
}


export default connect(mapStateToProps)(Test);