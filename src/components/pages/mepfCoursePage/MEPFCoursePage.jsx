import React from 'react';
import MEPFCourseHero from './MEPFCourseHero';
import MEPFCourseOverview from './MEPFCourseOverview';
import MEPFCourseCurriculum from './MEPFCourseCurriculum';
import MEPFCourseBenefits from './MEPFCourseBenefits';
import OurTeam from '../landingPage/OurTeam';
import MEPFCourseTestimonials from './MEPFCourseTestimonials';
import MEPFCourseEnrollment from './MEPFCourseEnrollment';

export default function MEPFCoursePage() {
  return (
    <div className="min-h-screen">
      <MEPFCourseHero />
      <MEPFCourseOverview />
      <MEPFCourseCurriculum />
      <MEPFCourseBenefits />
      <OurTeam />
      <MEPFCourseTestimonials />
      <MEPFCourseEnrollment />
    </div>
  );
}