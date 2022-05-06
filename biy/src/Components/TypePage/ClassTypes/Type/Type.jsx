import React from "react";
import style from "./Type.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Type = (props) => {
  return (
    <div className={style.type}>
      <div className={style.type__img}>
        <img src={props.img} alt="" />
      </div>

      <h3 className={style.type__title}>{props.title}</h3>
      <div className={style.time}>
        <FontAwesomeIcon  className={style.type__clock} icon={solid('clock')} />
        <span className={style.type__time}>{props.time}</span>
      </div>
      <button className={style.type__reservButton}>Select</button>
    </div>
  );
};

export default Type;
