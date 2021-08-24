import React from "react";
import style from "./UnderlinedText.module.scss";

const UnderlinedText = (props) => {
    return (
        <div className={style.undText}>
            <p className={style.text}>{props.name}</p>
        </div>
    );
};

export default UnderlinedText;