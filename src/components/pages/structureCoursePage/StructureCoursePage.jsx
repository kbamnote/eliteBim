import React from 'react'
import StructureCourseHero from './StructureCourseHero'
import StructureCourseOverview from './StructureCourseOverview'
import StructureCourseCurriculum from './StructureCourseCurriculum'
import StructureCourseBenefits from './StructureCourseBenefits'
import StructureCourseTestimonials from './StructureCourseTestimonials'
import StructureCourseEnrollment from './StructureCourseEnrollment'
import OurTeam from '../landingPage/OurTeam'

const StructureCoursePage = () => {
  return (
    <div className="">
      <StructureCourseHero />
      <StructureCourseOverview />
      <StructureCourseCurriculum />
      <StructureCourseBenefits />
      <OurTeam/>
      <StructureCourseTestimonials />
      <StructureCourseEnrollment />
    </div>
  )
}

export default StructureCoursePage