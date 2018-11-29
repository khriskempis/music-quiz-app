import React from 'react';
import { connect } from 'react-redux';

import {fetchTestType, fetchTestMiddle} from '../../actions/test-data'

import OptionalTestButton from './optionalTest';

function options(props) {
  return (
    <div className="options-buttons">
      <p>Choose a one:</p>
      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestMiddle())} 
        testName={"Middle C Position"}/>

      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestType({type: "treble", testName: "Treble Clef"}))} 
        testName={"Treble Clef"}/>

      <OptionalTestButton 
        onClick={e => props.dispatch(fetchTestType({type: "bass", testName: "Bass Clef"}))} 
        testName={"Bass Clef"}/>

    </div>
  );
}

export default connect()(options);