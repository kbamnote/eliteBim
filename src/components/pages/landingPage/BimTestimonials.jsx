import React from 'react';
import { TrendingUp, Briefcase } from 'lucide-react';

export default function BimTestimonials() {
  const testimonials = [
    {
      name: "Aditya Gupta",
      role: "Architect, DAR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
      badge: {
        text: "26% Salary Hike",
        type: "salary",
        icon: TrendingUp
      },
      review: "This course has been an eye opener in terms of how the AEC industry has changed and how we need to be a part of this change. The enthusiasm of Oneistox team to make a difference for their students is heartwarming.",
      footer: "Review of BIM Professional Course by Oneistox, (now Elite Bim)"
    },
    {
      name: "Aditi Shukla",
      role: "Jr BIM Architect, Techture",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
      badge: {
        text: "First Job",
        type: "job",
        icon: Briefcase
      },
      review: "The capstone project was my favourite part. It was a glimpse of how projects are handled in the real world. The gamification of the project and our progress made it even more interesting.",
      footer: "Review of BIM Professional Course by Oneistox, (now Elite Bim)"
    },
    {
      name: "Ankita Maurya",
      role: "BIM Architect, BIM Engineers",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
      badge: {
        text: "25% Salary Hike",
        type: "salary",
        icon: TrendingUp
      },
      review: "BIM course truly designed as per the need of AEC industry. The whole team of Oneistox supported throughout the course and answered each query without any delay. Perfect course for professionals to upskill.",
      footer: "Review of BIM Professional Course by Oneistox, (now Elite Bim)"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-purple-600">Students Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from professionals who transformed their careers with Elite Bim
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Profile Section */}
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-50"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {testimonial.role}
                  </p>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                      testimonial.badge.type === 'salary'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    <testimonial.badge.icon className="w-4 h-4" />
                    {testimonial.badge.text}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.review}
              </p>

              {/* Footer */}
              <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">
                {testimonial.footer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Read More Success Stories
          </button>
        </div>
      </div>
    </div>
  );
}