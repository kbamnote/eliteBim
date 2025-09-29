import React from 'react';
import { ArrowRight, Calendar, Users } from 'lucide-react';

export default function CoursesSection() {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      title: "BIM Professional Course for Architects",
      duration: "6 months",
      format: "Intensive • Online",
      nextBatch: "Nov 15th, 2024",
      students: "500+",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      image: "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?w=400&h=250&fit=crop",
      title: "Master Computational Design Course",
      duration: "8 months",
      format: "Advanced",
      nextBatch: "Dec 1st, 2024",
      students: "300+",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=250&fit=crop",
      title: "BIM Professional Course for Civil Engineers",
      duration: "6 months",
      format: "Intensive • Online",
      nextBatch: "Nov 20th, 2024",
      students: "700+",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      title: "Advanced Interior Design with AI",
      duration: "4 months",
      format: "Self-Paced",
      nextBatch: "Enroll Anytime",
      students: "400+",
      gradient: "from-blue-600 to-teal-500"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
      title: "BIM Professional Course for MEP Engineers",
      duration: "7 months",
      format: "Advanced",
      nextBatch: "Dec 5th, 2024",
      students: "450+",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold mb-3 text-sm tracking-wider uppercase">
            Our Courses
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Your Future Starts Here
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Get closer to your professional goals with online certification courses in architecture,
            engineering, and design.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`}></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>

                {/* Course Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="font-medium">Format:</span>
                    <span className="ml-2">{course.format}</span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    <span className="font-medium">Next Batch:</span>
                    <span className="ml-2">{course.nextBatch}</span>
                  </div>
                  <div className="text-purple-600 text-sm font-semibold">
                    {course.students} enrolled
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-purple-600 text-purple-600 py-4 px-8 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 inline-flex items-center gap-2">
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}