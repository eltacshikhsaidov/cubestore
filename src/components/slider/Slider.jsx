import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import ButtonSlider from './buttons/ButtonSlider';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1);
    const timeOutRef = useRef(null);

    const resetTimeOut = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    }

    useEffect(() => {
        resetTimeOut();

        timeOutRef.current = setTimeout(() => {
            setSlideIndex((prevIndex) => {
                return prevIndex === dataSlider.length - 1 ? 0 : prevIndex + 1;
            })
        }, 3000);

        return () => {
            resetTimeOut();
        }
    }, [slideIndex]);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            // src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                            src={`https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-taobao-vector-creative-technology-online-shopping-illustration-computer-finger-poster-image_131803.jpg`}
                        />
                    </div>
                )
            })}
            <ButtonSlider moveSlide={nextSlide} direction={"next"} />
            <ButtonSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider;