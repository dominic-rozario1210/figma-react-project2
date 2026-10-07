import React from 'react'
import "./App.css"
import Header from './components/Header'
import Hero from './components/Hero'
import Collabs from './components/Collabs'
import Features from './components/Features'
import Support from './components/Support'

const App = () => {
  return (
    <>
      <div className='container'>
        <Header/>
        <Hero/>
        <Collabs/>
        <Support/>
        <Features/>
      </div>
    </>
  )
}

export default App
