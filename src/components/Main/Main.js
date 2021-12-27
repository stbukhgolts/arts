import React from 'react'
import Featured from '../Featured/Featured'
import Header from '../Header/Header'
import Video from '../Video/Video'
import './main.css'
import '../../vendor/fonts.css'

const Main = () => {
  return (
    <div className="main">

      <Header />
      <Video />
      <Featured />
    </div>
  )
}

export default Main
