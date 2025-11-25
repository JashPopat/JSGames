import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Header from "./header";
import Footer from "./footer";
import './styles.css'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/blanko" element={<Dashboard/>} />
            <Route path="/slido" element={<Dashboard/>} />
            <Route path="/tetro" element={<Dashboard/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
