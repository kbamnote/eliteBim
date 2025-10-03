import React from 'react'
import HireHeroComp from './HireHeroComp'
import CompaniesComp from './CompaniesComp'
import AecHiringComp from './AecHiringComp'
import HiringWithEliteComp from './HiringWithEliteComp'
import TalentForEveryoneComp from './TalentForEveryoneComp'
import VarietyOfTalentComp from './VarietyOfTalentComp'
import WhyEliteStandoutComp from './WhyEliteStandoutComp'
import TestimonalsComp from './TestimonalsComp'

const HiringPage = () => {
  return (
    <div className="pt-32 sm:pt-24">
      <HireHeroComp />
      <CompaniesComp />
      <AecHiringComp />
      <HiringWithEliteComp />
      <TalentForEveryoneComp />
      <VarietyOfTalentComp />
      <WhyEliteStandoutComp />
      <TestimonalsComp />
    </div>
  )
}

export default HiringPage