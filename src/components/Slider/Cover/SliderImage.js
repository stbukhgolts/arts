import React from 'react';
import './sliderImage.css';

const SliderImage = ({ activeIndex, img, i }) => {
  return (
    <div className={`slider__image ${activeIndex === i ? 'animation' : ''}`}>
      <div className="fix">
        <img src={img.img} className="image" alt="painting" />

        <div className="overlay">
          <div className="text">
            <a href="">{img.text}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;

// <div key={`df${i}`} className={`slider__container ${activeIndex === i ? 'animation' : '' }`}>
// <img key={i} className={`slider__image ${activeIndex === i ? 'animation' : '' }`} src={img.img} alt=""/>
// <div key={`d${i}`} className='slider__overlay'>
//   <p key={`p${i}`} >{img.text}</p>
// </div>
// </div>
