import React from 'react'
import './display.scss'
import ImgCarousel from '../ImgCarousel/ImgCarousel'
import img1 from '../../images/random.png' 
import img2 from '../../images/random2.jpg' 
import img3 from '../../images/flowers.png' 
import img4 from '../../images/wierd.jpg' 
import ImgComponent from '../ImgCarousel/ImgComponent/ImgComponent'

const Display = () => {
  let displayArr = [
    <ImgComponent src={img1} artistName="Andy" workName='N1' price='99 000 RUB'/>,
    <ImgComponent src={img2} artistName="Randy" workName='2N2' price='99 000 RUB' />,
    <ImgComponent src={img3} artistName="Shmandy" workName='trmendous33' price='99 000 RUB' />,
    <ImgComponent src={img4} artistName="Tuendi" workName='454' price='99 000 RUB' />,
  ]

  let displayArr2 = [
    <ImgComponent src={img3} artistName="Shmandy" workName='trmendous333' price='99 000 RUB' />,
    <ImgComponent src={img4} artistName="Tuendi" workName='454' price='99 000 RUB' />,
  ]
  
  return (
    <div className='display'>
      <h3>Новые поступления</h3>
      <ImgCarousel displayArr={displayArr} />
      <ImgCarousel displayArr={displayArr2}/>
    </div>
  )
}

export default Display
