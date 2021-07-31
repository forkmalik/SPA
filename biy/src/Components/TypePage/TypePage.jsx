import React from "react";
import ClassTypes from "./ClassTypes/ClassTypes";
import typeStyle from "./TypePage.module.scss";

const TypePage = () => {
  return (
    <div class="classtype">
      <span class="service">types</span>
      <button class="back-button classtype__button">
        <i class="icon-left-open"></i>Back
      </button>
      <ClassTypes />
    </div>
  );
};

export default TypePage;
