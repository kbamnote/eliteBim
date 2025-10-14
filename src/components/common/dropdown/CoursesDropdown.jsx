import React from "react";
import { Link } from "react-router-dom";

const CoursesDropdown = ({ onClose }) => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCourseClick = () => {
    scrollToTop();
    onClose();
  };
  const courses = [
    {
      id: "elite-bim-professional",
      title: "Elite BIM Professional Course",
      description: "Comprehensive BIM training for next-gen architects and engineers in Building Information Modeling",
      duration: "7 months - Online BIM Course",
      nextCohort: "1st November, 2025",
      route: "/courses",
      isPopular: true,
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: "elite-bim-structure",
      title: "Elite BIM Professional for Structure",
      description: "Specialized BIM training focused on structural engineering and design workflows",
      duration: "6 months - Online Course",
      nextCohort: "15th November, 2025",
      route: "/courses/structure",
      isPopular: false,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: "elite-bim-architecture",
      title: "Elite BIM Architecture",
      description: "Advanced BIM training for architectural design and visualization professionals",
      duration: "6 months - Online Course",
      nextCohort: "1st December, 2025",
      route: "/courses/architecture",
      isPopular: false,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: "elite-bim-mepf",
      title: "Elite BIM MEPF",
      description: "Comprehensive BIM training for MEP (Mechanical, Electrical, Plumbing) and Fire Protection",
      duration: "7 months - Online Course",
      nextCohort: "15th December, 2025",
      route: "/courses/mepf",
      isPopular: false,
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="absolute left-0 top-full mt-2 w-[800px] bg-white shadow-xl rounded-lg p-6 z-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{course.duration}</span>
              {course.isPopular && (
                <span className="text-xs bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500 mb-3">
              <span className="font-medium">Next Cohort:</span> {course.nextCohort}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Mode:</span> Live Online
              </div>
              <Link
                to={course.route}
                onClick={handleCourseClick}
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${course.gradient} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg`}
              >
                View Course
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesDropdown;