import React from "react";
import weekdayStyle from "./Weekday.module.scss";

const Weekday = () => {
  return (
    <ul class="weekday">
      <li class="day">Mon</li>
      <li class="time">08:00</li>
      <li class="line">|</li>
      <li class="close-time">20:00</li>
    </ul>
  );
};

export default Weekday;
