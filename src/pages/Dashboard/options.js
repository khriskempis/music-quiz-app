import React from 'react';
import { connect } from 'react-redux';

import {fetchTestType} from '../../actions/test-data'

import OptionalTestButton from './optionalTest';

function options(props) {
  return (
    <div className="options-buttons">
      <p>Choose a one:</p>
      <OptionalTestButton 
        onClick={testName => props.dispatch()} 
        testName={"Middle C Position"}/>

      <OptionalTestButton 
        onClick={testName => props.dispatch(fetchTestType("treble"))} 
        testName={"Treble Clef"}/>

      <OptionalTestButton 
        onClick={testName => props.dispatch(fetchTestType("bass"))} 
        testName={"Bass Clef"}/>

    </div>
  );
}

export default connect()(options);