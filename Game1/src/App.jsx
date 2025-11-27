import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Header from "./header";
import Footer from "./footer";
import Blanko from "./blanko";
import Slido from "./slido";
import './styles.css'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/blanko" element={<Blanko/>} />
            <Route path="/slido" element={<Slido/>} />
            <Route path="/tetro" element={<Dashboard/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
