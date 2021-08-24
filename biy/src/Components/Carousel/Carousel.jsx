import React from "react";
import style from "./Carousel.module.scss";
import TouchCarousel from 'react-touch-carousel';
import Type from "../TypePage/ClassTypes/Type/Type";

const classData = [
    {title: "Lecture class", time: "1:20 h"},
    {title: "Lecture class", time: "1:20 h"},
    {title: "Lecture class", time: "1:20 h"},
    {title: "Lecture class", time: "1:20 h"}
];

function CarouselContainer (props) {
    return <Type />;
};

function renderCard (index, modIndex, cursor) {
    const item = classData[modIndex];
};

const Carousel = () => {
    return(
    <TouchCarousel 
        component={CarouselContainer}
        carCount={classData.length}
        cardSize={375}
        renderCard={renderCard}
    />);
};

export default Carousel;