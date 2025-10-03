import React from 'react'
import { Helmet } from 'react-helmet-async'
import HireHeroComp from './HireHeroComp'
import AecHiringComp from './AecHiringComp'
import CompaniesComp from './CompaniesComp'
import TalentForEveryoneComp from './TalentForEveryoneComp'
import VarietyOfTalentComp from './VarietyOfTalentComp'
import HiringWithEliteComp from './HiringWithEliteComp'
import WhyEliteStandoutComp from './WhyEliteStandoutComp'
import TestimonalsComp from './TestimonalsComp'

const HiringPage = () => {
  return (
    <div className="pt-32 sm:pt-24">
      <Helmet>
        <title>Hire BIM Professionals - Elite BIM Recruitment Services</title>
        <meta name="description" content="Hire top-tier BIM professionals from Elite BIM. Access skilled architects and engineers trained in the latest Building Information Modeling technologies. Streamline your recruitment process with our expert candidates." />
        <meta name="keywords" content="hire BIM professionals, BIM recruitment, architecture jobs, engineering talent, construction recruitment, BIM experts, AEC hiring" />
        <link rel="canonical" href="https://elitebim.com/hire" />
      </Helmet>
      <HireHeroComp />
      <AecHiringComp />
      <CompaniesComp />
      <TalentForEveryoneComp />
      <VarietyOfTalentComp />
      <HiringWithEliteComp />
      <WhyEliteStandoutComp />
      <TestimonalsComp />
    </div>
  )
}

export default HiringPage