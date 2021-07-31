import React from "react";
import confirmPageStyle from "./ConfirmPage.module.scss";
import InputFields from "./InputFields/InputFields";
import OrderData from "./OrderData/OrderData";

const ConfirmPage = () => {
  return (
    <div class="confirm">
      <button class="confirm__back-button classtype__button">
        <i class="icon-left-open"></i>Back
      </button>
      <p class="practice-type pers-data">personal data</p>
      <InputFields />
      <OrderData />
    </div>
  );
};

export default ConfirmPage;
