import React from "react";
import style from "./Weekday.module.scss";

const Weekday = (props) => {
  if(props.descriptor == "work") {
    return (
      <ul className={style.weekday}>
         <li className={style.day}>{props.day}</li>
         <li className={style.time}>{props.openTime}</li>
         <li className={style.line}>|</li>
         <li className={style.time}>{props.closeTime}</li>
       </ul>
    ); 
  }
  else {
    return (
      <ul className={style.weekday}>
         <li className={style.day}>{props.day}</li>
         <li className={style.time}></li>
         <li className={style.weekend}>{props.openTime}</li>
         <li className={style.time}></li>
       </ul>
    ); 
  }
  
};


export default Weekday;
