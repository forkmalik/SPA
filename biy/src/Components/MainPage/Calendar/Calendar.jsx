import React from "react";
import style from "./Calendar.module.scss";
import Weekday from "./Weekday/Weekday";

const daysArr = [
  {day: "Mon", openTime: "08:00", closeTime: "20:00", descriptor: "work"},
  {day: "Tue", openTime: "08:00", closeTime: "20:00", descriptor: "work"},
  {day: "Wed", openTime: "08:00", closeTime: "20:00", descriptor: "work"},
  {day: "Thu", openTime: "08:00", closeTime: "20:00", descriptor: "work"},
  {day: "Fri", openTime: "08:00", closeTime: "20:00", descriptor: "work"},
  {day: "Sat", openTime: "weekend", descriptor: "off"},
  {day: "Sun", openTime: "weekend", descriptor: "off"}
];

let weekdayElem = 
        daysArr.map(weekday => <Weekday day={weekday.day} openTime={weekday.openTime} 
                                  closeTime={weekday.closeTime} descriptor={weekday.descriptor}/>);

const Calendar = () => {
  return (
    <div className={style.calendar}>
      {weekdayElem}
    </div>
  );
};

export default Calendar;
