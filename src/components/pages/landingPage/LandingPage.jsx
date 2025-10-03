import BimFeatures from "./BimFeatures"
import BimResources from "./BimResources"
import BimTestimonials from "./BimTestimonials"
import ContactPage from "./ContactPage"
import CoursesSection from "./CourseSection"
import Hero from "./Hero"
import HeroVideo from "./HeroVideo"
import ImpactSection from "./ImpactSection"
import MentorsSection from "./MentorsSection"
import NextChapter from "./NextChapter"
import OurTeam from "./OurTeam"
import Press from "./Press"
import ProjectsSection from "./ProjectSection"
import TestimonialSection from "./TestimonialSection"

const LandingPage = () => {
  return (
    <div>
     <div className="mt-36 sm:mt-24 lg:mt-30">
        <HeroVideo/>
        </div>
        <Hero />
  
      <ImpactSection />
      <CoursesSection />
      <OurTeam />
      <MentorsSection />
      <ProjectsSection />
      <TestimonialSection />
      <BimFeatures />
      <ContactPage/>
      <BimResources />
      <BimTestimonials />
      
      <Press />
      <NextChapter />
    </div>
  )
}

export default LandingPage