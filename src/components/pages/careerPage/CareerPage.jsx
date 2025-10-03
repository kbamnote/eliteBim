import React from 'react'
import CareerHero from './CareerHero'
import CareerPaths from './CareerPaths'
import SkillDevelopment from './SkillDevelopment'
import CareerSupport from './CareerSupport'
import SuccessStories from './SuccessStories'
import CareerResources from './CareerResources'
import CareerCTA from './CareerCTA'

const CareerPage = () => {
  return (
    <div className="">
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