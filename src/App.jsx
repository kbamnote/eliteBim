import React from 'react'
import Header from './components/common/Header'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/common/Footer'
import LandingPage from './components/pages/landingPage/LandingPage'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<LandingPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App