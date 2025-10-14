import React from 'react';
import { Star, Quote, TrendingUp, Award } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function CourseTestimonials() {
  // Modal state management
  const {
    isOpen,
    formData,
    agreedToTerms,
    status,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
    handleOverlayClick,
    setAgreedToTerms
  } = useCallbackModal();

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "BIM Coordinator",
      company: "Skanska",
      before: "CAD Technician",
      salaryIncrease: "65%",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      quote: "Elite BIM completely transformed my career. In just 7 months, I went from struggling with basic CAD to leading BIM coordination for major construction projects. The mentorship and real-world projects made all the difference.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "BIM Manager",
      company: "AECOM",
      before: "Architecture Graduate",
      salaryIncrease: "85%",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      quote: "The course curriculum is incredibly comprehensive. I learned not just the software, but how to think strategically about BIM implementation. Now I'm managing a team of 8 BIM professionals.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "VDC Specialist",
      company: "Turner Construction",
      before: "Project Engineer",
      salaryIncrease: "70%",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      quote: "The networking opportunities alone were worth the investment. I connected with professionals who helped me land my dream job. The technical skills I gained gave me confidence to take on complex projects.",
      rating: 5
    }
  ];

  const stats = [
    { number: "2400+", label: "Successful Graduates", icon: TrendingUp },
    { number: "95%", label: "Job Placement Rate", icon: Award },
    { number: "4.9/5", label: "Course Rating", icon: Star },
    { number: "30%", label: "Average Salary Increase", icon: TrendingUp }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from our graduates who are now thriving in their BIM careers at leading companies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <Quote className="w-8 h-8 text-purple-500 mb-4" />
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-purple-600 font-semibold text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
              
              {/* Career Progression */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Career Progression</div>
                  <div className="font-semibold text-gray-900">{testimonial.before} → {testimonial.role}</div>
                  <div className="text-green-600 font-bold text-lg mt-2">+{testimonial.salaryIncrease} Salary Increase</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Program Success Metrics</h3>
            <p className="text-purple-100 text-lg">
              Proven results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Elite BIM.
          </p>
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isOpen}
        formData={formData}
        agreedToTerms={agreedToTerms}
        status={status}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        handleOverlayClick={handleOverlayClick}
        setAgreedToTerms={setAgreedToTerms}
      />
    </div>
  );
}