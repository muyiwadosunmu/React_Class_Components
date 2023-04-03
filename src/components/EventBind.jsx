import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }
  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
        <button onClick={() => this.clickHandler()}>Click Me</button>
      </div>
    );
  }
}

/**Ways aroun the this keyword in JavaScript React
 * 1. use the bind() keyword in render() method
 * 2. Use arrow functions
 * 3.
 */

export default EventBind;
