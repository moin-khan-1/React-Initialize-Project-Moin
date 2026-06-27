import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import About from './pages/About'
import DoctorDetail from './pages/DoctorDetail'
import Footer from './components/Footer'
import Appointment from './pages/Appointment'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <h1>Abhi Kam Jari hai</h1> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/about' element={<About />} />
          <Route path='/doctor/:id' element={<DoctorDetail />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
