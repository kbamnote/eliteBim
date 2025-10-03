import React from 'react'
import { Helmet } from 'react-helmet-async'
import EventHeroSection from './EventHeroSection'
import EventHero from './EventHero'
import WebinarCta from './WebinarCta'

const EventsPage = () => {
  return (
    <div className="pt-32 sm:pt-24">
      <Helmet>
        <title>BIM Events & Webinars - Elite BIM Learning Sessions</title>
        <meta name="description" content="Join our BIM events and webinars to learn from industry experts. Stay updated with the latest trends in Building Information Modeling, network with professionals, and enhance your skills." />
        <meta name="keywords" content="BIM events, BIM webinars, construction events, architecture events, engineering events, BIM workshops, BIM seminars, AEC events" />
        <link rel="canonical" href="https://elitebim.com/events" />
      </Helmet>
      <EventHeroSection />
      <EventHero />
      <WebinarCta />
    </div>
  )
}

export default EventsPage