import React from "react";
import typeStyle from "./Type.module.scss";

const Type = () => {
  return (
    <div class="type lecture">
      <h3 class="type__title">Lecture class</h3>
      <div class="time">
        <img src="img/clock.png" alt="" class="type__clock" />
        <span class="type__time">1:20 h.</span>
      </div>
      <button class="type__reserv-button classtype__button lecture-button">
        Select
      </button>
    </div>
  );
};

export default Type;
