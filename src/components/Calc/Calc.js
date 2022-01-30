import React from "react";
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
          <input
            type="text"
            id="amount"
            placeholder="ie 142.55"
            name="amount"
          ></input>
        </label>
        <div id="buttonContainer">
          <label>
            Select Tip % <br />
            <div id="buttonGrid">
              {buttonMap}
              <input type="text" placeholder="Custom" key="6" id="custom"></input>
            </div>
          </label>
        </div>
        <label htmlFor="people">
          Number of People
          <br />
          <input
            type="text"
            id="people"
            placeholder="ie 5"
            name="people"
          ></input>
        </label>
      </form>
    </main>
  );
}
