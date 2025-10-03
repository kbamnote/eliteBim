import React from "react";
import { Link } from "react-router-dom";

const CoursesDropdown = ({ onClose }) => {
  return (
    <div className="absolute left-0 top-full mt-2 w-[400px] bg-white shadow-xl rounded-lg p-6 z-50">
      <div className="border rounded-lg p-4 hover:shadow-md transition group">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">7 months - Online BIM Course</span>
          <span className="text-xs bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
            Most Popular
          </span>
        </div>
        <h3 className="font-bold text-gray-800 text-lg mb-2">Elite BIM Professional Course</h3>
        <p className="text-sm text-gray-600 mb-2">Comprehensive BIM training for next-gen architects and engineers in Building Information Modeling</p>
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-medium">Next Cohort:</span> 1st November, 2025
        </p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Mode:</span> Live Online
          </div>
          <Link
            to="/courses"
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Explore BIM Course
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesDropdown;