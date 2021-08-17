import React from "react";
import ClassTypes from "./ClassTypes/ClassTypes";
import style from "./TypePage.module.scss";

const TypePage = () => {
  return (
    <div className={style.classtype}>
      {/* <span className={style.service}>types</span> */}
      {/* <button className={style.backButton, style.classtype__button}>
        <i className="icon-left-open"></i>Back
      </button> */}
      <ClassTypes />
    </div>
  );
};

export default TypePage;
