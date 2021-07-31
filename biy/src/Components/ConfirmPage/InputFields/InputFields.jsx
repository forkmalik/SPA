import React from "react";
import inputFieldStyle from "./InputField.module.scss";

const InputFields = () => {
  return (
    <div class="input-fields">
      <span class="confirm__name fields">name:</span>
      <input
        type="text"
        class="name-field input"
        placeholder="Enter your name"
      />
      <br />
      <span class="confirm__name fields">email:</span>
      <input
        type="text"
        class="email-field input"
        placeholder="Enter email address"
      />
      <br />
      <span class="confirm__name fields">phone:</span>
      <input
        type="text"
        class="phone-field input"
        placeholder="Enter phone number"
      />
    </div>
  );
};

export default InputFields;
