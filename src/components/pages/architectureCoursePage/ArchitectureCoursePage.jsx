import React from 'react';
import ArchitectureCourseHero from './ArchitectureCourseHero';
import ArchitectureCourseOverview from './ArchitectureCourseOverview';
import ArchitectureCourseCurriculum from './ArchitectureCourseCurriculum';
import ArchitectureCourseBenefits from './ArchitectureCourseBenefits';
import OurTeam from '../landingPage/OurTeam';
import ArchitectureCourseTestimonials from './ArchitectureCourseTestimonials';
import ArchitectureCourseEnrollment from './ArchitectureCourseEnrollment';

export default function ArchitectureCoursePage() {
  return (
    <div className="min-h-screen">
      <ArchitectureCourseHero />
      <ArchitectureCourseOverview />
      <ArchitectureCourseCurriculum />
      <ArchitectureCourseBenefits />
      <OurTeam />
      <ArchitectureCourseTestimonials />
      <ArchitectureCourseEnrollment />
    </div>
  );
}