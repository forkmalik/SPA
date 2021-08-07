import React from "react";
import Calendar from "./Calendar/Calendar";
import Contacts from "./Contacts/Contacts";
import style from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <main className={style.main}>
      <Calendar />
      <Contacts />
      
    </main>
  );
};

export default MainPage;
