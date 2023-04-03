import React, { Component } from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <h1>
      Hello {props.name} {props.heroName}
      {props.children}
    </h1>
  );
};
export default Greet;
