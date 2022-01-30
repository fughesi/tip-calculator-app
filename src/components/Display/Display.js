import React from "react";
import "./Display.css";

export default function Display() {
  return (
    <main id="displayContainer">
      <div id="top">
        <p>
          Tip Amount
          <br />
          <span>/person</span>
        </p>
        <p id="amount">$00.00</p>
      </div>
      <div id="bottom">
        <p>
          Total
          <br />
          <span>/person</span>
        </p>
        <p id="amount">$00.00</p>
      </div>
      <p id="reset">RESET</p>
    </main>
  );
}
