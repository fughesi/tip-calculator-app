import React from "react";
import "./Calc.css";

export default function Calc(props) {
  // state variables
  const [selected, setSelected] = React.useState(false);

  const buttonArr = [5, 10, 15, 25, 50];

  // all the tip buttons
  const buttonMap = buttonArr.map((i) => (
    <input
      type="button"
      key={i}
      id="tip"
      value={i}
      selected={selected}
      // value={`${i}%`}
      name="tip"
      onChange={props.inputData}
      onClick={(e) => props.inputData(e)}
    ></input>
  ));

  console.log(props.formData);

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
          value={props.formData.amount}
          onChange={props.inputData}
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
          onChange={props.inputData}
          value={props.formData.people}
        ></input>
      </form>
    </main>
  );
}
