import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function StructureCourseTestimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Structural Engineer",
      company: "AECOM",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The structural BIM course transformed my career. I went from traditional 2D drafting to leading BIM projects for major infrastructure. The reinforcement modeling module was particularly valuable."
    },
    {
      name: "Michael Rodriguez",
      role: "BIM Coordinator",
      company: "Thornton Tomasetti",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Elite's structural BIM program is comprehensive and practical. The integration with analysis software and real project experience prepared me perfectly for my current role."
    },
    {
      name: "Emily Johnson",
      role: "Structural Designer",
      company: "Arup",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The course content is cutting-edge and the instructors are industry experts. I learned advanced reinforcement techniques that I use daily in my structural design work."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Success Stories from Structural Engineers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from structural engineers who have transformed their careers with our specialized BIM training program.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-green-600 text-sm font-semibold">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-green-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-8">Structural BIM Success Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">1,800+</div>
              <div className="text-green-200">Structural Engineers Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">97%</div>
              <div className="text-green-200">Course Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">92%</div>
              <div className="text-green-200">Job Placement Success</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">4.8/5</div>
              <div className="text-green-200">Average Course Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}