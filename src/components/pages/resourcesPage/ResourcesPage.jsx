import React from 'react'
import ResourcesHero from './ResourcesHero'
import LearningResources from './LearningResources'
import IndustryInsights from './IndustryInsights'
import CommunityResources from './CommunityResources'
import ToolsAndSoftware from './ToolsAndSoftware'
import ResourcesDownloads from './ResourcesDownloads'
import ResourcesCTA from './ResourcesCTA'

const ResourcesPage = () => {
  return (
    <div className="pt-24">
      <ResourcesHero />
      <LearningResources />
      <IndustryInsights />
      <CommunityResources />
      <ToolsAndSoftware />
      <ResourcesDownloads />
      <ResourcesCTA />
    </div>
  )
}

export default ResourcesPage