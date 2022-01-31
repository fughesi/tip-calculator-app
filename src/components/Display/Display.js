import React from "react";
import "./Display.css";

export default function Display(props) {
  // variables
  const amount = props.formData.amount;
  const people = props.formData.people;
  const tip = props.formData.tip;

  // quick maffs
  let tipAmount = (amount / people) * (tip / 100);
  let total = (amount / people) + tipAmount;

  return (
    <main id="displayContainer">
      <div id="displayTop">
        <div id="top">
          <p>
            Tip Amount
            <br />
            <span>/ person</span>
          </p>
          <p id="total">${tipAmount.toFixed(2)}</p>
        </div>
        <div id="bottom">
          <p>
            Total
            <br />
            <span>/ person</span>
          </p>
          <p id="total">${total.toFixed(2)}</p>
        </div>
      </div>
      <div id="displayBottom">
        <p id="reset" onClick={props.reset}>
          RESET
        </p>
      </div>
    </main>
  );
}
