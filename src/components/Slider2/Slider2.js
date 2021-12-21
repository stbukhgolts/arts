import React, { useEffect,useState } from 'react'
import './slider.css'
import img1 from '../../images/flowers.png';
import img2 from '../../images/random.png';
import img3 from '../../images/random2.jpg';

const Slider2 = () => {
  let img = [
    img1,
    img2,
    img3
  ]

  // if 0, then class - active
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) => {
        return current === img.length - 1 ? 0 : current + 1;
      })
    }, 10000);
    return () => clearInterval()
  }, [])

  return (
    <section className="slider">
      <img className={`slider__image ${prevIndex ? '' : 'animation'}`} src={img[1]} alt=""/>
      <img className={`slider__image ${activeIndex ? '' : 'animation'}`} src={img[0]} alt=""/>
      <img className={`slider__image ${nextIndex ? '' : 'animation'}`} src={img[2]} alt=""/>
    </section>
  )
}

export default Slider2
