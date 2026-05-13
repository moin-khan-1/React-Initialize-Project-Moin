import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <h1>Abhi Kam Jari hai</h1> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Doctors' element={<Doctors />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
