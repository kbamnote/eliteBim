import React from 'react'
import ImpactHero from './ImpactHero'
import CompanyStats from './CompanyStats'
import ProjectShowCase from './ProjectShowCase'
import HiringStats from './HiringStats'
import ImpactAlumni from './ImpactAlumni'
import ImpactCommunity from './ImpactCommunity'
import ImpactTestimonial from './ImpactTestimonial'
import ImpactPress from './ImpactPress'

const ImpactPage = () => {
  return (
    <div className="">
      <ImpactHero />
      <CompanyStats />
      <ProjectShowCase />
      <HiringStats />
      <ImpactAlumni />
      <ImpactCommunity />
      <ImpactTestimonial />
      <ImpactPress />
    </div>
  )
}

export default ImpactPage