import React from 'react'
import Featured from '../Featured/Featured'
import Header from '../Header/Header'
import Video from '../Video/Video'
import './main.css'
import '../../vendor/fonts.css'
import Display from '../Display/Display'
import Further from '../Further/Further'


const Main = () => {


  return (
    <div className="main">

      <Header />
      <Video />
      <Featured />
      <Display />
      <Further />
    </div>
  )
}

export default Main
