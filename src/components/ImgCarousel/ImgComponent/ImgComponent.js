import React from 'react'
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
    
      <p className='work-name'>{workName}</p>
      <p className='price'>{price}</p>
    </>
  )
}

export default ImgComponent
