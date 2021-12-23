import React, { useEffect,useState } from 'react'
import './slider.css'
import img1 from '../../images/flowers.png';
import img2 from '../../images/random.png';
import img3 from '../../images/random2.jpg';
import SliderImage from './Cover/SliderImage';

const Slider = () => {
  let img = [
    {img:img3,
      text: '777777'},
    {img:img2,
      text: 'fsss'},
      {img:img1,
        text: 'aaaaa'},

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
      {img.map((img,i) => {
        return (
          <SliderImage activeIndex={activeIndex} key={i} img={img} i={i} />
        )
      })}

      </section>
  )
}

export default Slider
