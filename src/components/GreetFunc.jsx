import React from "react";

const GreetFunc = ({ name, surname }) => {
  return (
    <div>
      <h1>
        Hello {name}, {surname}
      </h1>
    </div>
  );
};

export default GreetFunc;
