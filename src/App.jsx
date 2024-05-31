import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />


    </div>
  )
}

export default App