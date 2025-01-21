import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from '../data.js'

const cards=data.map(item=>{
  return(
    <Card 
     key={item.id}
     {...item}
          />

  )
})


function App() {


  return (
    <div className='full'>
    <Navbar/>
    <Hero/>
    <section className='cardsSec'>
    {cards}
    </section>
    </div>

  )
}

export default App
