import React from "react";
import style from "./Contacts.module.scss";
import mailImg from "../../../img/mail.png";
import locImg from "../../../img/location.png";
import planetImg from "../../../img/planet.png";

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.contacts__element}>
        <img src={mailImg} className={style.contacts__img} alt="" />
        <a href="#" className={style.contacts__link}>
          polkamarka@gmail.com
        </a>
      </div>

      <div className={style.contacts__element}>
        <img src={locImg} className={style.contacts__img} alt="" />
        <a href="https://goo.gl/maps/bZ1wakzHERvSL59E7" className={style.contacts__link}>
          Sumy State University, Ryms'koho-Korsakova St 2, Sumy, UA
        </a>
      </div>
      <div className={style.contacts__element}>
        <img src={planetImg} className={style.contacts__img} alt="" />
        <a href="https://sumdu.edu.ua/uk/" className={style.contacts__link}>
          sumdu.edu.ua
        </a>
      </div>
    </div>
  );
};

export default Contacts;
