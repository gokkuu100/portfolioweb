import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './components/homepage'
import Projects from './components/projects'
import Contact from './components/contact'
import Framer from './components/framer';
import Particlesbg from './components/particlesbg';
import img from './components/4159942_89781.jpeg'


function App() {

  return (
    <div>
    <Particlesbg />
    <div className="relative z-10">
      <Homepage />
      <Projects />
      <Contact />
    </div>
    {/* <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/framer" element={<Framer />} />
    </Routes> */}
    </div>
  )
}

export default App
