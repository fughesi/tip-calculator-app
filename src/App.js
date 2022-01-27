import React from 'react';
import "./App.css";
import Calc from "./components/Calc/Calc";
import Display from "./components/Display/Display";

function App() {
  const [amount, setAmount] = React.useState("")
  const [tip, setTip] = React.useState("")
  return (
    <div id="appWrap">
      <div id="splitterContainer">
        <p>SPLI</p>
        <p>TTER</p>
      </div>
      <div id="mainContainer">
        <Calc />
        <Display />
      </div>
    </div>
  );
}

export default App;
