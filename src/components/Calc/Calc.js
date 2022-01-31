import React from "react";
import "./Calc.css";

export default function Calc(props) {
  const buttonArr = [5, 10, 15, 25, 50];

  // all the tip buttons
  const buttonMap = buttonArr.map((i) => (
    <input
      type="button"
      key={i}
      id="tip"
      value={i}
      // value={`${i}%`}
      name="tip"
      onChange={props.inputData}
      onClick={(e)=>props.inputData(e)}
      // onClick={(e)=>console.log(e.target.value)}
      ></input>
  ));

  console.log(props.formData)

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
          onChange={props.inputData}
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
          onChange={props.inputData}
          placeholder="--"
        ></input>
      </form>
    </main>
  );
}
