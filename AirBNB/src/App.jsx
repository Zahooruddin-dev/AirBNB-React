import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NabBar'
import Hero from './Components/Hero'
import Card from './Components/Card'
function App() {
  
  return (
    <>
     <NavBar></NavBar>
     <Hero></Hero>
     <Card></Card>
    </>
  )
}

export default App
