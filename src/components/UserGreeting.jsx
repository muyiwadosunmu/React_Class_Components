import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    /// 1 Variable implementation
    /* let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Guest</div>;
    } else {
      message = <div>Welcome Muyiwa</div>;
    }
    return <div>{message}</div>; */
    /// 2
    /* if (this.state.isLoggedIn) {
      return <div>Welcome Muyiwa</div>;
    } else {
      return <div>Welcome Guest</div>;
    } */
    // 3 Ternary Operator
    return this.state.isLoggedIn ? (
      <div>Welcome Muyiwa</div>
    ) : (
      <div>Welcome Guest</div>
    );
    //4 Using shortcircuit(do something or nothing)
    /* return this.state.isLoggedIn && <div>Welcome Muyiwa</div>; */
  }
}

export default UserGreeting;
