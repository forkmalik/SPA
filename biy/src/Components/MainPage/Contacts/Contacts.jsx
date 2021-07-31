import React from "react";
import contactsStyle from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div class="contacts">
      <img src="img/mail.png" class="contacts__img" alt="" />
      <a href="#" class="mail contacts__link">
        polkamarka@gmail.com
      </a>

      <p class="location">
        <img src="img/location.png" class="contacts__img" alt="" />
        Sumy State University, Ryms'koho-Korsakova St 2, Sumy, UA
      </p>
      <img src="img/planet.png" class="contacts__img" alt="" />
      <a href="https://sumdu.edu.ua/uk/" class="web contacts__link">
        sumdu.edu.ua
      </a>
    </div>
  );
};

export default Contacts;
