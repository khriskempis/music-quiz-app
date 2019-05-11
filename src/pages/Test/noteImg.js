import React from 'react';
import withTransition from './withTransition';
import {Spring} from 'react-spring/renderprops';

function img(props) {
  return (
    <div className="test-question">
      <img src={props.imgUrl} alt="music note"/>
    </div>
  );
}


export default withTransition(img)