import React from 'react';
import './featured.css';
import img1 from '../../images/flowers.png';
import img2 from '../../images/random.png';
import img3 from '../../images/random2.jpg';
import Slider from '../Slider/Slider';
import Slider2 from '../Slider2/Slider2';


const Featured = () => {
  return (
    <section className="featured">
      <h1>Рекомендуемое</h1>
      <div className="featured__container">
        <div className="featured__left">

            {/* <img src={img1} alt=""></img> */}
            {/* <Slider /> */}
            <Slider2 />


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
