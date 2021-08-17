import React from "react";
import style from "./ClassTypes.module.scss";
import Type from "./Type/Type";
import lecImg from "../../../img/lec.png";
import pracImg from "../../../img/prac.png";

const ClassTypes = () => {
  return (
    <div className={style.types}>
      <Type title="Lecture class" time="1:20 h" img={lecImg}/>
      <Type title="Practice class" time="1:20 h" img={pracImg}/>
    </div>
  );
};

export default ClassTypes;
