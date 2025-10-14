import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Briefcase, TrendingUp } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function SoftwareTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
      id: 1,
      name: "Rajesh Kumar",
      role: "BIM Coordinator",
      company: "Larsen & Toubro",
      image: "/api/placeholder/80/80",
      rating: 5,
      software: "Revit & Navisworks",
      testimonial: "The comprehensive Revit and Navisworks training at Elite Associate transformed my career. I went from a junior drafter to a BIM Coordinator within 8 months. The hands-on approach and real project experience made all the difference.",
      achievement: "40% salary increase",
      beforeRole: "Junior CAD Drafter",
      afterRole: "BIM Coordinator"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Structural BIM Engineer",
      company: "Tata Projects",
      image: "/api/placeholder/80/80",
      rating: 5,
      software: "Tekla Structures",
      testimonial: "Learning Tekla Structures at Elite Associate opened doors I never imagined. The instructors' industry experience and practical approach helped me master complex steel detailing. Now I'm leading structural BIM projects.",
      achievement: "Promoted to Team Lead",
      beforeRole: "Structural Designer",
      afterRole: "BIM Team Lead"
    },
    {
      id: 3,
      name: "Mohammed Ali",
      role: "MEP BIM Specialist",
      company: "Godrej & Boyce",
      image: "/api/placeholder/80/80",
      rating: 5,
      software: "Revit MEP & AutoCAD",
      testimonial: "The MEP-focused training program was exactly what I needed. From AutoCAD basics to advanced Revit MEP workflows, everything was covered systematically. The job placement support helped me land my dream job.",
      achievement: "Dream job placement",
      beforeRole: "MEP Draftsman",
      afterRole: "MEP BIM Specialist"
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Visualization Specialist",
      company: "Hafeez Contractor",
      image: "/api/placeholder/80/80",
      rating: 5,
      software: "SketchUp & Lumion",
      testimonial: "The visualization training combining SketchUp and Lumion was phenomenal. I learned to create stunning architectural visualizations that wow clients. The portfolio I built during the course directly led to my current position.",
      achievement: "Portfolio-based hiring",
      beforeRole: "Architecture Graduate",
      afterRole: "Visualization Specialist"
    }
  ];

  const metrics = [
    {
      icon: Award,
      value: "95%",
      label: "Job Placement Rate",
      description: "Students get placed within 6 months"
    },
    {
      icon: TrendingUp,
      value: "45%",
      label: "Average Salary Increase",
      description: "After completing our programs"
    },
    {
      icon: Briefcase,
      value: "500+",
      label: "Partner Companies",
      description: "Hiring our trained professionals"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              BIM Software Alumni
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive BIM software training has transformed careers 
            and opened new opportunities for professionals across the AEC industry.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full">
                    {testimonials[currentTestimonial].software}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-blue-600 opacity-50 absolute -top-2 -left-2" />
                  <p className="text-lg text-gray-700 leading-relaxed pl-6">
                    {testimonials[currentTestimonial].testimonial}
                  </p>
                </div>

                {/* Career Progression */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Career Transformation</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Before</div>
                      <div className="font-semibold text-gray-800">
                        {testimonials[currentTestimonial].beforeRole}
                      </div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">After</div>
                      <div className="font-semibold text-gray-800">
                        {testimonials[currentTestimonial].afterRole}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonials[currentTestimonial].achievement}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation and Indicators */}
              <div className="space-y-8">
                {/* Testimonial Navigation */}
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* All Testimonials Preview */}
                <div className="space-y-3">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        index === currentTestimonial
                          ? 'bg-blue-100 border-2 border-blue-600'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {testimonial.role} • {testimonial.software}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {React.createElement(metric.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{metric.label}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful professionals who transformed their careers with our BIM software training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Start Your Journey
              </button>
              <button
                onClick={openModal}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
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