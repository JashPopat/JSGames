import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Header from "./header";
import './styles.css'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
