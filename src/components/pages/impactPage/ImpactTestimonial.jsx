import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const ImpactTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I was doing a regular job at a local firm with a very limited skillset. Being a part of this community made me realize my potential.",
      name: "Lanchenba Ningthoujam",
      role: "Architect, Hyperspace",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
    },
    {
      id: 2,
      quote: "The learning experience transformed my approach to design. I now work on international projects with cutting-edge technology.",
      name: "Priya Sharma",
      role: "BIM Manager, Foster + Partners",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
    },
    {
      id: 3,
      quote: "From traditional drafting to computational design, this journey has been incredible. I'm now leading innovation at my firm.",
      name: "Rahul Mehta",
      role: "Senior Architect, Zaha Hadid Architects",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Sparkle Icon */}
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {currentTestimonial.quote}
            </blockquote>

            {/* Author Info */}
            <div className="space-y-1">
              <p className="text-lg font-semibold text-gray-900">
                {currentTestimonial.name}
              </p>
              <p className="text-base text-gray-600">
                {currentTestimonial.role}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                className="w-14 h-14 border-2 border-gray-300 rounded-xl flex items-center justify-center hover:border-purple-500 hover:text-purple-600 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 border-2 border-gray-300 rounded-xl flex items-center justify-center hover:border-purple-500 hover:text-purple-600 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactTestimonial;