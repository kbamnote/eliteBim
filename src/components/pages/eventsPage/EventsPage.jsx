import React from 'react'
import EventHeroSection from './EventHeroSection'
import EventHero from './EventHero'
import WebinarCta from './WebinarCta'

const EventsPage = () => {
  return (
    <div className="pt-32 sm:pt-24">
      <EventHeroSection />
      <EventHero />
      <WebinarCta />
    </div>
  )
}

export default EventsPage