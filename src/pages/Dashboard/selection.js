import React from 'react';

import Options from './options'


function selection(props) {
  return (
    <div className={props.class}>
      <header>
        <h1>Take a {props.selection ? props.selection : ''} Test</h1>
      </header>

      <Options />
 
    </div>
  );
}

export default selection