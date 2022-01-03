import React from 'react'
import Featured from '../Featured/Featured'
import Header from '../Header/Header'
import Video from '../Video/Video'
import './main.css'
import '../../vendor/fonts.css'
import Display from '../Display/Display'
import img1 from '../../images/random.png' 
import img2 from '../../images/random2.jpg' 
import img3 from '../../images/flowers.png' 
import img4 from '../../images/wierd.jpg' 
import ImgComponent from '../Display/ImgComponent/ImgComponent'

const Main = () => {
  let displayArr = [
    <ImgComponent src={img1} />,
    <ImgComponent src={img2} />,
  ]

  let displayArr2 = [
    <ImgComponent src={img3} />,
    <ImgComponent src={img4} />,
  ]

  return (
    <div className="main">

      <Header />
      <Video />
      <Featured />
      <Display displayArr={displayArr} />
      <Display displayArr={displayArr2}/>
    </div>
  )
}

export default Main
