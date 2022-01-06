import React from 'react';
import Article from './Article/Article';
import './further.css';
import img from '../../images/12.svg';
import img2 from '../../images/ufo.png';

const Further = () => {
  let data = {
    img: img,
    alt: 'img',
    header: 'Блог',
    text: 'Новости, рекомендуемое, дискуссии и новости студии',
    button: 'Посмотреть',
  };

  let data2 = {
    img: img2,
    alt: 'img',
    header: 'Клуб',
    text: 'Членство в клубе дает возможность напечатать свою собственную лимитированную коллекцию',
    button: 'Узнать больше',
  };

  return (
    <section className="further">
      <div className="further__container">
        <Article data={data} />
        <Article data={data2} />
      </div>
    </section>
  );
};

export default Further;
