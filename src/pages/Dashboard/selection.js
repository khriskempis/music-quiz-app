import React from 'react';

import Options from './options'


function selection(props) {
  return (
    <div className={props.class}>
      <header>
        <h1>Take a {props.selection === "Practice" ? `${props.selection} Test` : props.selection}</h1>
      </header>
      <Options 
        numberOfQuestions={props.numberOfQuestions}
        selection={props.selection}
      />
 
    </div>
  );
}

export default selection