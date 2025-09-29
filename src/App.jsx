import React from 'react'
import Header from './components/common/Header'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/common/Footer'
import LandingPage from './components/pages/landingPage/LandingPage'
import Navbar from './components/common/Navbar'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
