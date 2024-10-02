import { useState } from 'react'
import './App.css'
import Joke from './Components/Joke'

function App() {


  return (
    <div className='full'>
    <Joke setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it. "/>
    <Joke setup=" How did the hacker escape the police?" punchline="He just ransomware! "/>
    <Joke setup="Why do bees stay in the hive in the winter?" punchline="Scurvy. "/>
    <Joke setup="so what does the fox say" punchline="meow(idk make it up or summn)"/>
    <Joke setup="knock knock" punchline="whose their"/>

    
    </div>
    

  )
}

export default App
