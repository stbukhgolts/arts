import React from 'react'

const ImgComponent = ({src}) => {
  let imgStyles = {
    width: 100 + "%",
    height: 'auto',
  }
  
  return (
    <div style={{padding: 15 + 'px'}}>
      <img src={src} alt="slide-img" style={imgStyles}/>
    </div>
  )
}

export default ImgComponent
