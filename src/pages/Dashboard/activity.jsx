import React from "react";
import GearIcon from "../../assets/icons/gear";

export function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Let's get started</h1>
        <p>Jump back in and take a Practice Test to get warmed up</p>
      </div>
      <GearIcon />
    </div>
  );
}

export class Activity extends React.Component {
  render() {
    return (
      <div>
        <h1>Activity Page</h1>
      </div>
    );
  }
}

export default { Activity, Hero };
