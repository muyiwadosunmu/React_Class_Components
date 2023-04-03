import React, { Component } from "react";

export class Classgreet extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </div>
    );
  }
}

export default Classgreet;
