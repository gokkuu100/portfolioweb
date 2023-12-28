import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './components/homepage'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
