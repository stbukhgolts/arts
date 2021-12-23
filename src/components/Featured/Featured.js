import React from 'react';
import './featured.css';
import Slider from '../Slider/Slider';


const Featured = () => {
  return (
    <section className="featured">
      <h1>Рекомендуемое</h1>
      <div className="featured__container">
        <div className="featured__left">

          <Slider />


          <div className="featured__text-container">
            <h2>Название</h2>
            <p>Три работы Энди Ворхола</p>
          </div>
        </div>

        <div className="featured__right"></div>
      </div>
    </section>
  );
};

export default Featured;
