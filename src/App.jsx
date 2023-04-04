import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Stylesheet from "./components/Stylesheet.jsx";
import Inline from "./components/Inline";

function App() {
  return (
    <div className="App">
      {/* <Stylesheet primary={true} /> */}
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
    </div>
  );
}

export default App;
