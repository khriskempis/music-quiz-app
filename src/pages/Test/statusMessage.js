import React from 'react';

function statusMessage(props) {
  return (
    <div className={`test-status-message ${props.hasAnswered ? "" : "hidden"}`}>
      <p>{props.response}</p>
      <p>The Correct Answer is <span className="test-correct-note">{props.note}</span></p>
    </div>
  );
}

export default statusMessage;