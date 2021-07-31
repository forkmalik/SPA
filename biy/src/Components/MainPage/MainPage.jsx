import React from "react";
import Calendar from "./Calendar/Calendar";
import Contacts from "./Contacts/Contacts";
import mainStyle from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <main class="main">
      <Calendar />
      <Contacts />
      <div class="more">
        <a href="#" class="details">
          Details
        </a>
      </div>
    </main>
  );
};

export default MainPage;
