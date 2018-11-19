import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({

})


function optionalTest(props) {
  return (
    <div>
      <Link to="/test"> 
        <button onClick={e => props.onClick(props.testName)}>{props.testName}</button>
      </Link>
    </div>
  );
}

export default connect(mapStateToProps)(optionalTest);