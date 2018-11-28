import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function handleClick(props){
  props.onClick(props.testName);
  props.dispatch(fetch)
}

function optionalTest(props) {
  return (
    <div>
      <Link to="/test"> 
        <button 
        onClick={e => props.onClick()}
        >{props.testName}</button>
      </Link>
    </div>
  );
}

export default connect()(optionalTest);