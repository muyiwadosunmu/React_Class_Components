import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GreetFunc from "./components/GreetFunc";
import GreetClassComp from "./components/GreetClassComp";

function App() {
  return (
    <div className="App">
      <GreetFunc name="Muyiwa" surname="Dosunmu" />
      <GreetClassComp name="Gbolahan" surname="Dosunmu" />
    </div>
  );
}

export default App;
