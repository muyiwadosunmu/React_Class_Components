import React from "react";

const EventFuncComp = () => {
  const clickHandler = () => {
    console.log("Button Clicked from Functional Component");
  };
  return (
    <div>
      <button onClick={(e) => clickHandler()}>Click</button>
    </div>
  );
};

export default EventFuncComp;
