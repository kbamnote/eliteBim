import React from 'react'
import HireHeroComp from './HireHeroComp'
import AECHiringPage from './AecHiringComp'
import WhyEliteStandoutComp from './WhyEliteStandoutComp'
import VarietyOfTalentComp from './VarietyOfTalentComp'
import TalentForEveryoneComp from './TalentForEveryoneComp'
import CompaniesComp from './CompaniesComp'
import HiringWithEliteComp from './HiringWithEliteComp'
import TestimonalsComp from './TestimonalsComp'

const HiringPage = () => {
  return (
    <div>
      <HireHeroComp/>
      <AECHiringPage/>
      <WhyEliteStandoutComp/>
      <VarietyOfTalentComp/>
      <TalentForEveryoneComp/>
      <CompaniesComp/>
      <HiringWithEliteComp/>
      <TestimonalsComp/>
    </div>
  )
}

export default HiringPage