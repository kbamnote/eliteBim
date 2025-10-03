import React from 'react'
import { Helmet } from 'react-helmet-async'
import CareerHero from './CareerHero'
import CareerPaths from './CareerPaths'
import SkillDevelopment from './SkillDevelopment'
import CareerSupport from './CareerSupport'
import SuccessStories from './SuccessStories'
import CareerResources from './CareerResources'
import CareerCTA from './CareerCTA'

const CareerPage = () => {
  return (
    <div className="pt-32 sm:pt-24">
      <Helmet>
        <title>Career Counselling & BIM Career Guidance - Elite BIM</title>
        <meta name="description" content="Get expert career counselling for BIM careers. Discover career paths in Building Information Modeling for architects and engineers. Personalized guidance to accelerate your professional growth." />
        <meta name="keywords" content="BIM career, career counselling, BIM jobs, architecture career, engineering career, construction career, BIM profession, career guidance" />
        <link rel="canonical" href="https://elitebim.com/career" />
      </Helmet>
      <CareerHero />
      <CareerPaths />
      <SkillDevelopment />
      <CareerSupport />
      <SuccessStories />
      <CareerResources />
      <CareerCTA />
    </div>
  )
}

export default CareerPage