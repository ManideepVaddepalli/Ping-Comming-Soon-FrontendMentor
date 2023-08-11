import React from "react";
import { useState } from "react";

export default function Emailsection() {
  let expression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;

  let emailBox = document.querySelector(".email-section input");
  console.log(emailBox);
  let alertPara = document.querySelector(".email-section p");
  let [email, setEmail] = useState("");
  function emailInput(event) {
    setEmail(event.target.value);
  }
  function buttonClicked() {
    if (emailBox.value) {
      if (expression.test(emailBox.value)) {
        alertPara.classList.add("hide");
        emailBox.style.border = "1px solid black";
      } else {
        alertPara.classList.remove("hide");
        emailBox.style.border = "1px solid hsl(354, 100%, 66%)";
      }
    } else {
      alertPara.classList.add("hide");
      emailBox.style.border = "1px solid black";
    }
  }
  return (
    <div className="email-section">
      <div className="desktop-email-noti">
        <input
          type="text"
          value={email}
          onChange={emailInput}
          placeholder="Your email address . . ."
        ></input>
        <p className="hide">please provide a valid email address</p>
      </div>
      <button onClick={buttonClicked} type="button">
        Notify Me
      </button>
    </div>
  );
}
