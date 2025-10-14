import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CoursesSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      id: "elite-bim-professional",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      title: "Elite BIM Professional Course",
      description: "Comprehensive BIM training for next-gen architects and engineers in Building Information Modeling",
      duration: "7 months",
      format: "Online BIM Course",
      nextBatch: "1st November, 2025",
      students: "1000+",
      gradient: "from-purple-600 to-indigo-600",
      route: "/courses",
      isPopular: true
    },
    {
      id: "elite-bim-structure",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=250&fit=crop",
      title: "Elite BIM Professional for Structure",
      description: "Specialized BIM training focused on structural engineering and design workflows",
      duration: "6 months",
      format: "Online Course",
      nextBatch: "15th November, 2025",
      students: "750+",
      gradient: "from-green-600 to-emerald-600",
      route: "/courses/structure",
      isPopular: false
    },
    {
      id: "elite-bim-architecture",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      title: "Elite BIM Architecture",
      description: "Advanced BIM training for architectural design and visualization professionals",
      duration: "6 months",
      format: "Online Course",
      nextBatch: "1st December, 2025",
      students: "650+",
      gradient: "from-blue-600 to-cyan-600",
      route: "/courses/architecture",
      isPopular: false
    },
    {
      id: "elite-bim-mepf",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
      title: "Elite BIM MEPF",
      description: "Comprehensive BIM training for MEP (Mechanical, Electrical, Plumbing) and Fire Protection",
      duration: "7 months",
      format: "Online Course",
      nextBatch: "15th December, 2025",
      students: "550+",
      gradient: "from-orange-600 to-red-600",
      route: "/courses/mepf",
      isPopular: false
    }
  ];

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [courses.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleLearnMore = (course) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate(course.route);
  };

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold mb-3 text-sm tracking-wider uppercase">
            Our BIM Courses
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Your BIM Career Starts Here
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Master Building Information Modeling with our comprehensive certification courses designed for 
            architects, engineers, and construction professionals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${courses.length * (100 / 3)}%`,
                transform: `translateX(-${(currentSlide * 100) / 3}%)`
              }}
            >
              {courses.map((course) => (
                <div key={course.id} className="w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`}></div>
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {course.isPopular && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {course.description}
                        </p>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                            <span className="font-medium">Duration:</span>
                            <span className="ml-1">{course.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="w-4 h-4 mr-2 text-purple-600" />
                            <span className="font-medium">Format:</span>
                            <span className="ml-1">{course.format}</span>
                          </div>
                          <div className="text-gray-600">
                            <span className="font-medium">Next Batch:</span>
                            <span className="ml-1">{course.nextBatch}</span>
                          </div>
                          <div className="text-purple-600 font-semibold">
                            {course.students} enrolled
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleLearnMore(course)}
                        className={`mt-6 w-full bg-gradient-to-r ${course.gradient} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              navigate('/courses');
            }}
            className="bg-white border-2 border-purple-600 text-purple-600 py-4 px-8 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
