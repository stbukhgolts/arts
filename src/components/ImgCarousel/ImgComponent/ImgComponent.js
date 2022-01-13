import React from 'react'
import { Link } from 'react-router-dom'
import './imgComponent.css'

const ImgComponent = ({src, artistName, workName, price}) => {
  return (
    <>
    <a href='/'>

      <img className="display-image" src={src} alt="slide-img" />    
    </a>
    <a href='/'>

      <p className='artist-name'>{artistName}</p>
    </a>
    
      <Link to='artists/333' >
        <p className='work-name'>{workName}</p>
      </Link>
      <p className='price'>{price}</p>
    </>
  )
}

export default ImgComponent
