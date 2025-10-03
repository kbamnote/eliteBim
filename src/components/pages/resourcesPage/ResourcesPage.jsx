import React from 'react'
import { Helmet } from 'react-helmet-async'
import ResourcesHero from './ResourcesHero'
import LearningResources from './LearningResources'
import IndustryInsights from './IndustryInsights'
import CommunityResources from './CommunityResources'
import ToolsAndSoftware from './ToolsAndSoftware'
import ResourcesDownloads from './ResourcesDownloads'
import ResourcesCTA from './ResourcesCTA'

const ResourcesPage = () => {
  return (
    <div className="pt-32 sm:pt-24">
      <Helmet>
        <title>BIM Learning Resources & Tutorials - Elite BIM</title>
        <meta name="description" content="Access free BIM learning resources, tutorials, and guides. Enhance your Building Information Modeling skills with our comprehensive collection of educational materials for architects and engineers." />
        <meta name="keywords" content="BIM resources, BIM tutorials, Revit tutorials, BIM guides, construction resources, architecture learning, engineering resources, BIM documentation" />
        <link rel="canonical" href="https://elitebim.com/resources" />
      </Helmet>
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