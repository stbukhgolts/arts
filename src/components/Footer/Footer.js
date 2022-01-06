import React from 'react';
import './footer.scss';
import Social from './Social/Social';
import Subscribe from './Subscribe/Subscribe';

const Footer = () => {
  return (
    <section className="footer">
      <Social />
      <Subscribe />
    </section>
  );
};

export default Footer;
