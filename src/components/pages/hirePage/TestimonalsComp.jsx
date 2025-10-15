import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, ThumbsUp, Quote } from 'lucide-react';

const TestimonialsComp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Elite Bim graduates are more professional, focused and streamlined compared to other candidates. The hiring process was smooth and the results are great at our office.",
      hiringTime: "2 days",
      satisfaction: "91%",
      name: "Rajiv Bajaj",
      role: "Principal Architect, Design Systems",
      avatar: "RB"
    },
    {
      id: 2,
      quote: "We partnered with Elite Bim and found exceptional talent. The quality of candidates exceeded our expectations and they integrated seamlessly into our team.",
      hiringTime: "3 days",
      satisfaction: "95%",
      name: "Sarah Mitchell",
      role: "HR Director, Tech Innovations",
      avatar: "SM"
    },
    {
      id: 3,
      quote: "The professionalism and skill level of Elite Bim graduates is outstanding. They bring fresh perspectives and are ready to contribute from day one.",
      hiringTime: "1 day",
      satisfaction: "93%",
      name: "Michael Chen",
      role: "CEO, Creative Solutions",
      avatar: "MC"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);   

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Testimonials
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Success Stories: Hear From Our Partners
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={120} className="text-purple-600" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Quote */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                  {testimonials[currentSlide].quote}
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {testimonials[currentSlide].hiringTime}
                    </p>
                    <p className="text-sm text-gray-600">Hiring time</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-3">
                    <ThumbsUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {testimonials[currentSlide].satisfaction}
                    </p>
                    <p className="text-sm text-gray-600">Hiring Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentSlide].avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentSlide].role}
                    </p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center group"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="text-gray-600 group-hover:text-purple-600" size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center group"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="text-gray-600 group-hover:text-purple-600" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-purple-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComp;