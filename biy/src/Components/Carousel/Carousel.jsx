import React from "react";
import style from "./Carousel.module.scss";
import Type from "../TypePage/ClassTypes/Type/Type";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const classData = [
  { title: "Lecture class", time: "1:20 h" },
  { title: "Lecture class", time: "1:20 h" },
  { title: "Lecture class", time: "1:20 h" },
  { title: "Lecture class", time: "1:20 h" },
];

const Carousel = () => {
   return(<OwlCarousel className='owl-theme'>
    <Type />
    <Type />
    <Type />
    <Type />    
</OwlCarousel>); 
};

export default Carousel;
