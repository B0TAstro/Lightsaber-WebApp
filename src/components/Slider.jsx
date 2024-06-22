import React, { useState, useEffect } from "react";
import "./Slider.css";

import dataSlider from "./dataSlider";

import { v4 as uuidv4 } from "uuid";

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 0,
    inProgress: false,
  });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length - 1) {
      setSlideAnim((prevSlide) => ({ index: prevSlide.index + 1, inProgress: true }));
      setTimeout(() => {
        setSlideAnim((prevSlide) => ({ index: prevSlide.index + 1, inProgress: false }));
      }, 400);
    } else {
      setSlideAnim({ index: 0, inProgress: true });
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 0) {
      setSlideAnim((prevSlide) => ({ index: prevSlide.index - 1, inProgress: true }));
      setTimeout(() => {
        setSlideAnim((prevSlide) => ({ index: prevSlide.index + 1, inProgress: false }));
      }, 400);
    } else {
      setSlideAnim({ index: dataSlider.length - 1, inProgress: true });
    }
  };

  const randomSlide = () => {
    const randomIndex = Math.floor(Math.random() * dataSlider.length);
    setSlideAnim({ index: randomIndex, inProgress: true });
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index ? "slide active-anim" : "slide"
            }
            onClick={randomSlide} // Mettez cet événement sur chaque slide
          >
            <div className="card">
              <div className="card_content">
                <img src={`/images/img${index + 1}.png`} alt={obj.description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
