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

  const [activeIndex, setActiveIndex] = useState(0);

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
      <img className={`slider__image ${activeIndex === 0 ? 'animation' :'' }`} src={img[0]} alt=""/>
      <img className={`slider__image ${activeIndex === 1 ? 'animation' :'' }`} src={img[1]} alt=""/>
      <img className={`slider__image ${activeIndex === 2 ? 'animation' :'' }`} src={img[2]} alt=""/>
    </section>
  )
}

export default Slider2
