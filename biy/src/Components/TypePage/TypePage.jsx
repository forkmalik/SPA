import React from "react";
import UnderlinedText from "../UnderlinedText/UnderlinedText";
import ClassTypes from "./ClassTypes/ClassTypes";
import style from "./TypePage.module.scss";

const TypePage = () => {
  return (
    <div className={style.classtype}>
      <UnderlinedText name="types"/>
      {/* <button className={style.backButton, style.classtype__button}>
        <i className="icon-left-open"></i>Back
      </button> */}
      <ClassTypes />
    </div>
  );
};

export default TypePage;
