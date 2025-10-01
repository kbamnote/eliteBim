import BimFeatures from "./BimFeatures"
import BimResources from "./BimResources"
import BimTestimonials from "./BimTestimonials"
import CoursesSection from "./CourseSection"
import Hero from "./Hero"
import ImpactSection from "./ImpactSection"
import MentorsSection from "./MentorsSection"
import NextChapter from "./NextChapter"
import Press from "./Press"
import ProjectsSection from "./ProjectSection"
import TestimonialSection from "./TestimonialSection"

const LandingPage = () => {
  return (
    <div className="pt-20">
      <Hero />
      <ImpactSection />
      <CoursesSection />
      <MentorsSection />
      <ProjectsSection />
      <TestimonialSection />
      <BimFeatures />
      <BimResources />
      <BimTestimonials />
      <Press />
      <NextChapter />
    </div>
  )
}

export default LandingPage