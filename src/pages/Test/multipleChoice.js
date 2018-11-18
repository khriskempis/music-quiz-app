import React from 'react';


function multipleChoice(props) {
  const multipleChoiceAnswers = props.answers.map((value, index) => 
      <button key={index}>{value}</button>
    );
  return (
    <div className="answers-container">
      {multipleChoiceAnswers}
    </div>
  );
}


export default multipleChoice;