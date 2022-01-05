import React from 'react';
import './featured.css';
import Slider from '../Slider/Slider';
import Button from '../Button/Button';

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
              A new portfolio of three original prints by Petr Dzen, Povstanec
              Aravijskij and Andy Warhol.
            </p>
            <p>
              The ‘folio is being released for sale at an initial price of 100
              000 RUR making it an unprecedented opportunity to acquire a
              selection of fine prints by leading contemporary artists.
            </p>
            <Button text='Click here for more information' />
            <Button text="ЗАПРОС" />
          </div>
        </div>

        <div className="featured__right"></div>
      </div>
    </section>
  );
};

export default Featured;
