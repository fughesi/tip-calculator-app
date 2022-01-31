import React from "react";
import "./Calc.css";

export default function Calc(props) {
  // state variables
  const [formData, setFormData] = React.useState({
    amount: 0,
    tip: 0,
    people: 0,
  });

  function inputData(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

  const buttonArr = [5, 10, 15, 25, 50];

  // all the tip buttons
  const buttonMap = buttonArr.map((i) => (
    <input
      type="button"
      key={i}
      id={`number${i}`}
      name="tip"
      onChange={inputData}
    ></input>
  ));

  console.log(buttonMap);

  return (
    <main id="calcContainer">
      <form id="billAmount">
        <label htmlFor="amount">
          Bill
          <br />
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          onChange={inputData}
          placeholder="--"
        ></input>
        <div id="buttonContainer">
          <label htmlFor="custom">
            Select Tip % <br />
          </label>
          <div id="buttonGrid">
            {buttonMap}
            <input type="text" placeholder="Custom" key="6" id="custom"></input>
          </div>
        </div>
        <label htmlFor="people">
          Number of People
          <br />
        </label>
        <input
          type="text"
          id="people"
          name="people"
          onChange={inputData}
          placeholder="--"
        ></input>
      </form>
    </main>
  );
}
