import React from 'react';
import './footer.scss';
import img from '../../images/12.svg';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <img src={img} alt="logo" />
        <h2>Наши соцсети</h2>
        <ul>
          <li>
            <a href="/">Instagram</a>
          </li>
          &
          <li>
            <a href="/">Facebook</a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Footer;
