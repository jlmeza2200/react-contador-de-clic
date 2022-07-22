import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/Button";
import "./styles/button.css";
import "./styles/counter.css";
import Counter from "./components/Counter";
import { useState } from "react";
import React from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const controlClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCount = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button text="Click" isBtnClick={true} manageClick={controlClick} />

        <Button
          text="Reiniciar"
          isBtnClick={false}
          manageClick={restartCount}
        />
      </div>
    </div>
  );
}

export default App;
