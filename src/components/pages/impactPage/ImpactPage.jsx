import React from 'react'
import { Helmet } from 'react-helmet-async'
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
    <div className="pt-32 sm:pt-24">
      <Helmet>
        <title>Our Impact - Elite BIM Success Stories & Achievements</title>
        <meta name="description" content="Discover Elite BIM's impact on the AEC industry. See our success stories, student achievements, and how we're transforming careers in Building Information Modeling." />
        <meta name="keywords" content="BIM impact, success stories, student achievements, BIM transformation, AEC industry, architecture education, engineering education" />
        <link rel="canonical" href="https://elitebim.com/impact" />
      </Helmet>
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