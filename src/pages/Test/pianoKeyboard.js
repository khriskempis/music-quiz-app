import React from 'react';
import './piano-keys.css';

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
  const keyboard = keyboardArray.map((data, index) => 
      <li 
        className={`piano-key ${data[0]} ${data[1]}`}
        key={index} 
        onClick={e => props.onClick(data[1])}>
      </li>
    );
  return (
    // <div className="answers-container">
    //   {keyboard}
    // </div>

    <div className="answers-container">
      <ul className="set">
        {keyboard}
      </ul>
      {/* <ul className="set">
        <li className="note-name C">C</li>
        <li className="note-name D">D</li>
        <li className="note-name E">E</li>
        <li className="note-name F">F</li>
        <li className="note-name G">G</li>
        <li className="note-name A">A</li>
        <li className="note-name B">B</li>
      </ul> */}
    </div>
  );
}


export default pianoKeyboard;