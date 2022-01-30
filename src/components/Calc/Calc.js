import React from "react";
import dollar from "../../images/icon-dollar.svg";
import person from "../../images/icon-person.svg";
import "./Calc.css";

export default function Calc(props) {
  const buttonArr = [1, 2, 3, 4, 5];

  const buttonMap = buttonArr.map((i) => (
    <input type="button" key={i} id={`number${i}`}></input>
  ));
  console.log(buttonMap);
  return (
    <main id="calcContainer">
      <form id="billAmount">
        <label htmlFor="amount">
          Bill
          <br />
        </label>
        <input type="text" id="amount" placeholder="--"></input>
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
        <input type="text" id="people" placeholder="--"></input>
      </form>
    </main>
  );
}
