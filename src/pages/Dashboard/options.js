import React from 'react';
import { connect } from 'react-redux';

import {fetchTestType, fetchTestMiddle} from '../../actions/test-data'

import OptionalTestButton from './optionalTest';

export function options(props) {
  return (
    <div className="options-buttons">
      <p>{props.selection === "Practice" ? (
        `* Answer ${props.numberOfQuestions} questions at your own pace.`
          ) : (
        `* Answer ${props.numberOfQuestions} in under 1 minute.`
          )}</p>
      <p>Choose one:</p>
      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestType(
          {
            type: "middle",
            testName: "Middle C Position",
            numberOfQuestions: props.numberOfQuestions,
            testType: props.selection
          }
        ))} 
        testName={"Middle C Position"}/>

      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestType(
          {
            type: "cmajor", 
            testName: "C Major",
            numberOfQuestions: props.numberOfQuestions,
            testType: props.selection
          }))} 
        testName={"C Major"}/>

      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestType(
          {
            type: "treble", 
            testName: "Treble Clef",
            numberOfQuestions: props.numberOfQuestions,
            testType: props.selection
          }))} 
        testName={"Treble Clef"}/>

      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestType(
          {
            type: "bass", 
            testName: "Bass Clef",
            numberOfQuestions: props.numberOfQuestions,
            testType: props.selection
          }))} 
        testName={"Bass Clef"}/>

    </div>
  );
}

export default connect()(options);