import React from 'react';
import './featured.css';
import Slider from '../Slider/Slider';

const Featured = () => {
  return (
    <section className="featured">
      <div className="featured__container">
        <div className="featured__left">
        <h1>Рекомендуемое</h1>
          
          <Slider />

          <div className="featured__text-container">
            <h2>Название</h2>
            <p>
              A new portfolio of five original prints by Willard Boepple,
              Stephen Chambers, Nigel Hall, Peter Randall-Page and Alison
              Wilding.
            </p>
            <p>
              The ‘folio is being released for sale at an initial price of
              £1,200 making it an unprecedented opportunity to acquire a
              selection of fine prints by leading contemporary artists.
            </p>
            <button type="button" className="fullwidth">
              <a href="./">Click here for more information</a>
            </button>
            <button type="button">
              <a href="./">ЗАПРОС</a>
            </button>
          </div>
        </div>

        <div className="featured__right"></div>
      </div>
    </section>
  );
};

export default Featured;
