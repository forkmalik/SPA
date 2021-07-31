import React from "react";
import calendarStyle from "./Calendar.module.scss";
import Weekday from "./Weekday/Weekday";

const Calendar = () => {
  return (
    <div class="calendar">
      <Weekday/>
    </div>
  );
};

export default Calendar;
