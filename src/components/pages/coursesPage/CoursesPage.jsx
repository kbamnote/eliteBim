import React from 'react'
import CourseHero from './CourseHero'
import CourseOverview from './CourseOverview'
import CourseCurriculum from './CourseCurriculum'
import CourseBenefits from './CourseBenefits'
import CourseTestimonials from './CourseTestimonials'
import CourseEnrollment from './CourseEnrollment'
import OurTeam from '../landingPage/OurTeam'

const CoursesPage = () => {
  return (
    <div className="">
      <CourseHero />
      <CourseOverview />
      <CourseCurriculum />
      <CourseBenefits />
    <OurTeam/>
      <CourseTestimonials />
      <CourseEnrollment />
    </div>
  )
}

export default CoursesPage