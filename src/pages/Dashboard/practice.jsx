import React from "react";

export function Hero() {
  return (
    <div>
      <h1>Practice Hero</h1>
    </div>
  );
}

export class Practice extends React.Component {
  render() {
    return (
      <div>
        <h1>Practice</h1>
      </div>
    );
  }
}

export default { Practice, Hero };
