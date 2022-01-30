import React from "react";
import "./Display.css";

export default function Display() {
  return (
    <main id="displayContainer">
      <div id="displayTop">
        <div id="top">
          <p>
            Tip Amount
            <br />
            <span>/ person</span>
          </p>
          <p id="total">$00.00</p>
        </div>
        <div id="bottom">
          <p>
            Total
            <br />
            <span>/ person</span>
          </p>
          <p id="total">$00.00</p>
        </div>
      </div>
      <div id="displayBottom">
        <p id="reset">RESET</p>
      </div>
    </main>
  );
}
