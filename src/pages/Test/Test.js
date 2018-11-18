import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import TestForm from "./testForm";
import TestHeader from './testHeader';

import Navigation from '../../components/navigation'

const mapStateToProps = state => ({
  isloggedIn: state.auth.currentUser !== null,
  isTestComplete: state.testData.currentQuestion === state.testData.numberOfQuestions,
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
          {props.isTestComplete ? (
            <Link to="/results">
              <button className="test-button">See Results</button>
            </Link>  
          ) : (
            <button className="test-button">Next</button>
          )

          }
        </section>

      </main>
    </div>
  );
}


export default connect(mapStateToProps)(Test);