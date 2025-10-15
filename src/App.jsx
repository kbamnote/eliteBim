import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/pages/landingPage/LandingPage'
import ImpactPage from './components/pages/impactPage/ImpactPage'
// import ResourcesPage from './components/pages/resourcesPage/ResourcesPage'
import CareerPage from './components/pages/careerPage/CareerPage'
import CoursesPage from './components/pages/coursesPage/CoursesPage'
import SoftwarePage from './components/pages/softwarePage/SoftwarePage'
import StructureCoursePage from './components/pages/structureCoursePage/StructureCoursePage'
import ArchitectureCoursePage from './components/pages/architectureCoursePage/ArchitectureCoursePage'
import MEPFCoursePage from './components/pages/mepfCoursePage/MEPFCoursePage'
import EventsPage from './components/pages/eventsPage/EventsPage'
import HiringPage from './components/pages/hirePage/HiringPage'
import NotFound from './components/pages/404/NotFound'
import MainLayout from './components/layouts/MainLayout'
import EventHero from './components/pages/eventsPage/EventHero'

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/software' element={<SoftwarePage />} />
        <Route path='/courses/structure' element={<StructureCoursePage />} />
        <Route path='/courses/architecture' element={<ArchitectureCoursePage />} />
        <Route path='/courses/mepf' element={<MEPFCoursePage />} />
        <Route path='/hire' element={<HiringPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/impact' element={<ImpactPage />} />
         <Route path='/past-events' element={<EventHero/>} />
        {/* <Route path='/resources' element={<ResourcesPage />} /> */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App