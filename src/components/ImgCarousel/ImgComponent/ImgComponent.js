import React from 'react'

const ImgComponent = ({src, artistName, workName, price}) => {
  return (
    <>
      <img className="display-image" src={src} alt="slide-img" />    
      <p>{artistName}</p>
      <p>{workName}</p>
      <p>{price}</p>
    </>
  )
}

export default ImgComponent
