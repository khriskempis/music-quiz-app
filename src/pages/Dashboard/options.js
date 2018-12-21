import React from 'react';
import { connect } from 'react-redux';

import {fetchTestType, fetchTestMiddle} from '../../actions/test-data'

import OptionalTestButton from './optionalTest';

export function options(props) {
  return (
    <div className="options-buttons">
      <p>Choose one:</p>
      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestMiddle(
          {
            numberOfQuestions: props.numberOfQuestions
          }
        ))} 
        testName={"Middle C Position"}/>

      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestType(
          {
            type: "treble", 
            testName: "Treble Clef",
            numberOfQuestions: props.numberOfQuestions
          }))} 
        testName={"Treble Clef"}/>

      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestType(
          {
            type: "bass", 
            testName: "Bass Clef",
            numberOfQuestions: props.numberOfQuestions
          }))} 
        testName={"Bass Clef"}/>

    </div>
  );
}

export default connect()(options);