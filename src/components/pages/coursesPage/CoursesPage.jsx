import React from 'react'
import { Helmet } from 'react-helmet-async'
import CourseHero from './CourseHero'
import CourseOverview from './CourseOverview'
import CourseCurriculum from './CourseCurriculum'
import CourseBenefits from './CourseBenefits'
import CourseInstructors from './CourseInstructors'
import CourseTestimonials from './CourseTestimonials'
import CourseEnrollment from './CourseEnrollment'

const CoursesPage = () => {
  return (
    <div className="pt-32 sm:pt-24">
      <Helmet>
        <title>BIM Certification Courses - Elite BIM Professional Training</title>
        <meta name="description" content="Explore our comprehensive BIM certification courses for architects and engineers. Master Revit, Navisworks, and other BIM tools with industry experts. Career-focused training with real projects." />
        <meta name="keywords" content="BIM certification, Revit courses, Navisworks training, BIM software courses, architecture training, engineering courses, construction technology, BIM professional course" />
        <link rel="canonical" href="https://elitebim.com/courses" />
      </Helmet>
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