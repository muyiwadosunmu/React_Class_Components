import React, { Component } from "react";

class GreetClassComp extends Component {
  render() {
    const { name, surname } = this.props;
    const { state1, state2 } = this.state;
    return (
      <div>
        <h1>
          Hello {name}, {surname}
        </h1>
      </div>
    );
  }
}

export default GreetClassComp;
