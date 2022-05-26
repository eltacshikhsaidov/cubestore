import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import leftArrow from '../icons/leftArrow.svg';
import rightArrow from '../icons/rightArrow.svg';


const ButtonSlider = ({ direction, moveSlide }) => {
    console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}

export default ButtonSlider;