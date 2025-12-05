import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Need to INSTALL
import './App.css'
import Header from './Header'
// import Footer from './Footer'
import Home from './Homepage'


function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
    </>
  )
}

export default App
