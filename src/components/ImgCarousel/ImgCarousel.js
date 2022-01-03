import React, { useState } from 'react'
import './imgCarousel.scss'


const ImgCarousel = ({ displayArr }) => {

  

  const [x, setX] = useState(0)
  const goLeft = () => {
    x === 0 ? setX(0) : setX(x + 200)
  }
  const goRight = () => {
    x === -200 * (displayArr.length / 2 - 1) ? setX(-200 * (displayArr.length / 2 - 1)) : setX(x - 200)
  }

  return (
    <section className='carousel'>

      {
        displayArr?.map((item, index) => {
          return (
            <div key={index} className='slide' style={{transform:`translateX(${x}%)`}}>
              {item}

            </div>
          )
        })
      }
      <button id="goLeft" onClick={goLeft}>left</button>
      <button id="goRight" onClick={goRight}>right</button>
    </section>
  )
}

export default ImgCarousel
