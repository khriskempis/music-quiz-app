import React from 'react';

function statusMessage(props) {
  return (
    <div className="test-status-message">
      <p>The Correct Answer is <span>{props.note}</span></p>
    </div>
  );
}

export default statusMessage;