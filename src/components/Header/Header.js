import React from 'react'
import './header.css'
import logo from '../../images/ufo.png'


const Header = () => {
  return (
    <div className="header">
      <div className="header__title-container">
        <input className="header__input_search" type="text" placeholder="SEARCH	&#128269;"/>
        <p className="header-tagline">cтудия шелкографии, МОСКВА</p>
      </div>

      <div className="header__navigation-container">

        <ul className="header__navigation-links_left">
          <li>ГЛАВНАЯ</li>
          <li>ХУДОЖНИКИ</li>
          <li>О НАС</li>
          <li>ИСТОРИЯ</li>
          <li>КЛУБ</li>
        </ul>

        <img className="header__logo" src={logo} alt=""/>

        <ul className="header__navigation-links_right">
          <li>БЛОГ</li>
          <li>КОНТАКТЫ</li>
        </ul>



      </div>

    </div>
  )
}

export default Header
