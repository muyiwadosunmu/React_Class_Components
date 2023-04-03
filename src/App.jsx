import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EventFuncComp from "./components/EventFuncComp";
import EventClassComp from "./components/EventClassComp";

function App() {
  return (
    <div className="App">
      <EventFuncComp />
      <EventClassComp />
    </div>
  );
}

export default App;
