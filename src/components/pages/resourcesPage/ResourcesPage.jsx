import React from 'react'
import ResourcesHero from './ResourcesHero'
import LearningResources from './LearningResources'
import ToolsAndSoftware from './ToolsAndSoftware'
import IndustryInsights from './IndustryInsights'
import CommunityResources from './CommunityResources'
import ResourcesDownloads from './ResourcesDownloads'
import ResourcesCTA from './ResourcesCTA'

const ResourcesPage = () => {
  return (
    <div>
      <ResourcesHero />
      <LearningResources />
      <ToolsAndSoftware />
      <IndustryInsights />
      <CommunityResources />
      <ResourcesDownloads />
      <ResourcesCTA />
    </div>
  )
}

export default ResourcesPage