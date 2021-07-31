import React from "react";
import headerStyle from "./Header.module.scss";

const Header = () => {
  return (
    <header class="header">
      <h2 class="main-text animated pulse">Book It Yourself</h2>
      <button class="header__button">Book Now</button>
    </header>
  );
};

export default Header;
