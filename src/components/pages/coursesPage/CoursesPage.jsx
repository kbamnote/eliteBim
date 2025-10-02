import React from 'react'
import CourseHero from './CourseHero'
import CourseOverview from './CourseOverview'
import CourseCurriculum from './CourseCurriculum'
import CourseBenefits from './CourseBenefits'
import CourseInstructors from './CourseInstructors'
import CourseTestimonials from './CourseTestimonials'
import CourseEnrollment from './CourseEnrollment'

const CoursesPage = () => {
  return (
    <div className="pt-24">
      <CourseHero />
      <CourseOverview />
      <CourseCurriculum />
      <CourseBenefits />
      <CourseInstructors />
      <CourseTestimonials />
      <CourseEnrollment />
    </div>
  )
}

export default CoursesPage