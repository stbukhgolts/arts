import React, { useEffect,useState } from 'react'
import './slider.css'
import img1 from '../../images/flowers.png';
import img2 from '../../images/random.png';
import img3 from '../../images/random2.jpg';

const Slider = () => {
  let img = [
    <img key={img1} src={img1} alt=""/>,
    <img key={img2} src={img2} alt=""/>,
    <img key={img3} src={img3} alt=""/>,
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

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className='slider'>
      <div className='slider-img slider-img-prev' key={1}>
        {img[prevImgIndex]}
      </div>
      <div className='slider-img' key={2}>
        {img[activeIndex]}
      </div>
      <div className='slider-img slider-img-next' key={3}>
        {img[nextImgIndex]}
      </div>
    </div>
  )
}

export default Slider
