import React from 'react';
import './sliderImage.css';

const SliderImage = ({ activeIndex, img, i }) => {
  return (
    <div className={`slider__image-container ${activeIndex === i ? 'active' : ''}`}>

        <img src={img.img} className="slider__image" alt="painting" />

        <div className="slider__image-overlay">
          <p className="text">
            <a href="">{img.text}</a>
          </p>
        </div>

    </div>
  );
};

export default SliderImage;
