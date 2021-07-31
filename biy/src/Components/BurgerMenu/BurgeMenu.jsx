import React from "react";
import burgerStyle from './BurgerMenu.module.scss';


const BurgerMenu = () => {
    return (
        <div class="hamburger-menu">
            <button class="closemenu-btn"><img src="img\closed.png" alt=""/></button>
            <ul class="hamburger-menu__list">
                <li class="humburger-menu__items"><a class="item-a" href="error404.html">home</a></li>
                <li class="humburger-menu__items"><a class="item-a" href="error404.html">my bookings</a></li>
                <li class="humburger-menu__items"><a class="item-a" href="error404.html">contacts</a></li>
                <li class="humburger-menu__items"><a class="item-a" href="error404.html">support</a></li>
            </ul>
        </div>
    );
};

export default BurgerMenu;