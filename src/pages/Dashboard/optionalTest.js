import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function optionalTest(props) {
  return (
    <div>
      <Link to="/test"> 
        <button 
          className="dashboard-test-button"
          onClick={e => props.onClick()}
        >{props.testName}</button>
      </Link>
    </div>
  );
}

export default connect()(optionalTest);