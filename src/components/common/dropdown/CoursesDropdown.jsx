import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "BIM Professional Course for Architects V2.0",
    duration: "7 months - Online",
    mode: "Live online",
    cohort: "1st November, 2025",
    tag: "Most Popular",
  },
  {
    title: "Master Computational Design Course",
    duration: "6 months",
    mode: "Live online",
    cohort: "1st November, 2025",
  },
  {
    title: "BIM Professional Course For Civil Engineers",
    duration: "7 months",
    mode: "Live online",
    cohort: "11th October, 2025",
  },
  {
    title: "Advanced Interior Design with AI",
    duration: "4 months",
    mode: "Live online",
    cohort: "To Be Announced",
  },
  {
    title: "BIM Professional Course for MEP Engineers",
    duration: "7 months",
    mode: "Live online",
    cohort: "1st November, 2025",
    tag: "Newly Launched",
  },
];

const CoursesDropdown = () => {
  return (
    <div className="absolute left-0 top-full mt-2 w-[900px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6 z-50">
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="border rounded-lg p-4 hover:shadow-md transition"
        >
          {" "}
          <div className="flex items-center justify-between mb-2">
            {" "}
            <span className="text-sm text-gray-500">{course.duration}</span>
            {course.tag && (
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                {course.tag}{" "}
              </span>
            )}{" "}
          </div>{" "}
          <h3 className="font-semibold text-gray-800">{course.title}</h3>{" "}
          <p className="text-sm text-gray-500">{course.mode}</p>{" "}
          <p className="mt-2 text-sm">
            {" "}
            <span className="font-medium">Next Cohort:</span> {course.cohort}{" "}
          </p>{" "}
          <Link
            to="#"
            className="mt-3 inline-block text-purple-600 text-sm font-medium hover:underline"
          >
            Know More →{" "}
          </Link>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default CoursesDropdown;
