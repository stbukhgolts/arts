import React from 'react'
import Header from '../Header/Header'
import './main.css'
import '../../vendor/fonts.css'
import Footer from '../Footer/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'


const Main = () => {


  return (
    <div className="main">

      <Header />

      <Outlet />
      
      <Footer />

    </div>
  )
}

export default Main
