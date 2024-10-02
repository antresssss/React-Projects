import { useState } from 'react'
import './App.css'
import MainContent from './Components/MainContent'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'

function App() {


  return (
    <div className='full'>
    <Navbar/>
    <Hero/>
    <Card/>
    <MainContent/>
    </div>

  )
}

export default App
