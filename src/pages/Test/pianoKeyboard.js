import React from 'react';
import './piano-keys.css';

import NextButton from './nextButton';

const keyboardArray = [
  ["white", "C"],
  ["black", "C#"],
  ["white", "D"],
  ["black", "D#"],
  ["white", "E"],
  ["white", "F"],
  ["black", "F#"],
  ["white", "G"],
  ["black", "G#"],
  ["white", "A"],
  ["black", "A#"],
  ["white", "B"]
]



function pianoKeyboard(props) {
  // creates piano key and assigns onClick with info on that key
  const keyboard = keyboardArray.map((arr, index) => 
      <li 
        className={`piano-key ${arr[0]} ${arr[1]}`}
        key={index} 
        onClick={e => props.onClick(arr[1])}
        >
      </li>
    );


  return (

    <div className="answers-container">
        <div className={props.hasAnswered ? "overlay response" : ""}>
        {props.hasAnswered && 
          <NextButton 
          updateCard={e => props.updateCard()}
          endTest={e => props.endTest()}/>}
        </div>
      <ul className="set">
        {keyboard}
      </ul>
    </div>
  );
}


export default pianoKeyboard;