import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LandingPage from './components/pages/landingPage/LandingPage'
import ImpactPage from './components/pages/impactPage/ImpactPage'
import ResourcesPage from './components/pages/resourcesPage/ResourcesPage'
import CareerPage from './components/pages/careerPage/CareerPage'
import CoursesPage from './components/pages/coursesPage/CoursesPage'
import EventsPage from './components/pages/eventsPage/EventsPage'
import HiringPage from './components/pages/hirePage/HiringPage'
import NotFound from './components/pages/404/NotFound'
import MainLayout from './components/layouts/MainLayout'

const App = () => {
  return (
    <>
      <Helmet>
        <title>Elite BIM - Advanced BIM Certification Courses for Architects & Engineers</title>
        <meta name="description" content="Elite BIM offers industry-leading BIM certification courses for architects and engineers. Master Building Information Modeling with expert-led training and real-world projects." />
        <meta name="keywords" content="BIM, Building Information Modeling, BIM courses, BIM certification, architecture, engineering, construction, AEC, Revit, Navisworks, BIM training" />
        <link rel="canonical" href="https://elitebim.com/" />
      </Helmet>
      <MainLayout>
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
      </MainLayout>
    </>
  )
}

export default App