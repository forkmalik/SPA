import React from "react";
import UnderlinedText from "../UnderlinedText/UnderlinedText";
import BackButton from "../BackButton/BackButton";
import ClassTypes from "./ClassTypes/ClassTypes";
import style from "./TypePage.module.scss";

const TypePage = () => {
  return (
    <div className={style.classtype}>
      <UnderlinedText name="types"/>
      <BackButton />
      <ClassTypes />
    </div>
  );
};

export default TypePage;
