import React from 'react'
import { Helmet } from 'react-helmet-async'
import BimFeatures from "./BimFeatures"
import BimResources from "./BimResources"
import BimTestimonials from "./BimTestimonials"
import ContactPage from "./ContactPage"
import CoursesSection from "./CourseSection"
import Hero from "./Hero"
import HeroVideo from "./HeroVideo"
import ImpactSection from "./ImpactSection"
import MentorsSection from "./MentorsSection"
import NextChapter from "./NextChapter"
import OurTeam from "./OurTeam"
import Press from "./Press"
import ProjectsSection from "./ProjectSection"
import TestimonialSection from "./TestimonialSection"

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Elite BIM - Master BIM Certification Courses for Architects & Engineers</title>
        <meta name="description" content="Transform your career with Elite BIM's industry-recognized BIM certification courses. Learn Building Information Modeling with expert mentors and real-world projects. Enroll now!" />
        <meta name="keywords" content="BIM courses, BIM certification, Building Information Modeling, Revit training, architecture courses, engineering courses, BIM software, construction technology" />
        <link rel="canonical" href="https://elitebim.com/" />
      </Helmet>
     <div className="mt-36 sm:mt-24 lg:mt-30">
        <HeroVideo/>
        </div>
        <Hero />
  
      <ImpactSection />
      <CoursesSection />
      <OurTeam />
      <MentorsSection />
      <ProjectsSection />
      <TestimonialSection />
      <BimFeatures />
      <ContactPage/>
      <BimResources />
      <BimTestimonials />
      
      <Press />
      <NextChapter />
    </div>
  )
}

export default LandingPage