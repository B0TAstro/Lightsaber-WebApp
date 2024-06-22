import React from "react";

import Lightsaber from "./components/Lightsaber";
import Slider from "./components/Slider";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Slider />
      <Lightsaber />
      <footer>
        <img id="logo_1" src="maythe4thbewithyou.jpeg"></img>
        <p> x </p>
        <img id="logo_2" src="evolutive_logo_blanc.png"></img>
      </footer>
      </div>
  );
}

export default App;
