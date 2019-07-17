import React from "react";

function img(props) {
  return (
    <div className="test-question">
      <img src={props.imgUrl} alt="music note" />
    </div>
  );
}

export default img;
