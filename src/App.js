import React from "react";
import "./App.css";
import Calc from "./components/Calc/Calc";
import Display from "./components/Display/Display";

function App() {
  // state variables
  const [formData, setFormData] = React.useState({
    amount: "",
    tip: "",
    people: "",
  });

  // control form data
  function inputData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function theGreatReset() {
    setFormData({
      amount: "",
      tip: "",
      people: "",
    });
  }

  return (
    <main id="appWrap">
      <div id="splitterContainer">
        <p>SPLI</p>
        <p>TTER</p>
      </div>
      <div id="mainContainer">
        <Calc inputData={inputData} formData={formData} />
        <Display formData={formData} reset={theGreatReset} />
      </div>
    </main>
  );
}

export default App;
