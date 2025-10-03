import React from 'react'
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