import React from "react";
import typeStyle from "./OrderData.module.scss";

const OrderData = () => {
  return (
    <div class="data">
      <span class="confirm__type">Practice</span>
      <div class="date">
        <span class="confirm__date data-item">Date:</span>
        <span class="date-value">01.02.13</span>
      </div>
      <div class="time">
        <span class="confirm__time data-item">Starts at:</span>
        <span class="time-value">11:25</span>
      </div>
      <div class="number">
        <span class="confirm__number data-item">Number:</span>
        <span class="number-value">241</span>
      </div>
      <button class="confirm__btn">Confirm booking</button>
    </div>
  );
};

export default OrderData;
