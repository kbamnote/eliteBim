import React from 'react'
import Header from './components/common/Header'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/common/Footer'
import LandingPage from './components/pages/landingPage/LandingPage'
import ImpactPage from './components/pages/impactPage/ImpactPage'
import ResourcesPage from './components/pages/resourcesPage/ResourcesPage'
import CareerPage from './components/pages/careerPage/CareerPage'
import CoursesPage from './components/pages/coursesPage/CoursesPage'
import EventsPage from './components/pages/eventsPage/EventsPage'
import HiringPage from './components/pages/hirePage/HiringPage'
import NotFound from './components/pages/404/NotFound'
import Navbar from './components/common/Navbar'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/hire' element={<HiringPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/impact' element={<ImpactPage />} />
        <Route path='/resources' element={<ResourcesPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
