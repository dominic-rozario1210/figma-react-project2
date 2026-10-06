import React from 'react'
import "./App.css"
import Header from './components/Header'
import Hero from './components/Hero'
import Collabs from './components/Collabs'

const App = () => {
  return (
    <>
      <div className='container'>
        <Header/>
        <Hero/>
        <Collabs/>
      </div>
    </>
  )
}

export default App
