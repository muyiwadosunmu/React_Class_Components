import React, { Component } from "react";

class EventClassComp extends Component {
  clickHandler() {
    console.log(`Button Clicked form Class Component`);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.clickHandler()}>Clicked</button>
      </div>
    );
  }
}

export default EventClassComp;
