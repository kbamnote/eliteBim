import React from 'react'
import SoftwareHero from './SoftwareHero'
import SoftwareGrid from './SoftwareGrid'
import SoftwareBenefits from './SoftwareBenefits'
import SoftwareTestimonials from './SoftwareTestimonials'
import SoftwareEnrollment from './SoftwareEnrollment'
import OurTeam from '../landingPage/OurTeam'

const SoftwarePage = () => {
  return (
    <div className="">
      <SoftwareHero />
      <SoftwareGrid />
      <SoftwareBenefits />
      <OurTeam />
      <SoftwareTestimonials />
      <SoftwareEnrollment />
    </div>
  )
}

export default SoftwarePage