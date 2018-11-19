import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import TestForm from "./testForm";
import TestHeader from './testHeader';


import Navigation from '../../components/navigation'

const mapStateToProps = state => ({
  testName: state.testData.testName
})

function Test(props) {
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