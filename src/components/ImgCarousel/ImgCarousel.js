import React, { useState } from 'react';
import './imgCarousel.scss';

const ImgCarousel = ({ displayArr }) => {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(0) : setX(x + 200);
  };
  const goRight = () => {
    x === -200 * (displayArr.length / 2 - 1)
      ? setX(-200 * (displayArr.length / 2 - 1))
      : setX(x - 200);
  };




  return (
    <section className="carousel">
      <div className="buttons">
        <button className="goLeft" onClick={goLeft} disabled={`${x === 0 ? 'true' : ''}`}>
          &lt;
        </button>
        <button className="goRight" onClick={goRight} disabled={`${x === -200 * (displayArr.length / 2 - 1) ? 'true' : ''}`}>
          &gt;
        </button>
      </div>

      <div className="carousel__slides">
        {displayArr?.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImgCarousel;
