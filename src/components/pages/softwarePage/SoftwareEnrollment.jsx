import React, { useState } from 'react';
import { Check, Star, Clock, Users, Award, Zap, Shield, Headphones } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function SoftwareEnrollment() {
  const [selectedPlan, setSelectedPlan] = useState('professional');
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

  const plans = [
    {
      id: 'basic',
      name: 'Basic Software Package',
      price: '₹15,999',
      originalPrice: '₹25,999',
      duration: '3 Months',
      popular: false,
      description: 'Perfect for beginners starting their BIM journey',
      features: [
        'AutoCAD Fundamentals',
        'SketchUp Basics',
        'Revit Architecture Introduction',
        '20+ Practice Projects',
        'Basic Certification',
        'Email Support',
        'Recorded Sessions Access',
        'Job Placement Assistance'
      ],
      software: ['AutoCAD', 'SketchUp', 'Revit Architecture'],
      color: 'from-gray-600 to-gray-700'
    },
    {
      id: 'professional',
      name: 'Professional BIM Suite',
      price: '₹29,999',
      originalPrice: '₹45,999',
      duration: '6 Months',
      popular: true,
      description: 'Most comprehensive package for career advancement',
      features: [
        'All Basic Package Features',
        'Revit MEP & Structural',
        'Navisworks Management',
        'Tekla Structures',
        'Lumion Visualization',
        '50+ Real Projects',
        'Industry Certification',
        'Live Project Training',
        'Priority Job Placement',
        '24/7 Support',
        'Lifetime Access to Updates',
        'Portfolio Development'
      ],
      software: ['AutoCAD', 'Revit Suite', 'Navisworks', 'Tekla', 'Lumion', 'SketchUp'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Master Class',
      price: '₹49,999',
      originalPrice: '₹75,999',
      duration: '12 Months',
      popular: false,
      description: 'Complete mastery with advanced specializations',
      features: [
        'All Professional Features',
        'Advanced Dynamo Scripting',
        'BIM 360 Collaboration',
        'Solibri Model Checker',
        'Synchro 4D Planning',
        'Custom Family Creation',
        '100+ Industry Projects',
        'Specialized Certifications',
        'Internship Opportunities',
        'Dedicated Mentor',
        'Business Development Training',
        'Freelancing Guidance'
      ],
      software: ['Complete BIM Suite', 'Advanced Tools', 'Collaboration Platforms'],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Get certified by leading BIM software vendors'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: '15+ years of industry experience'
    },
    {
      icon: Zap,
      title: 'Hands-on Learning',
      description: 'Real project-based training approach'
    },
    {
      icon: Shield,
      title: 'Job Guarantee',
      description: '100% job placement assistance'
    }
  ];

  const testimonialStats = [
    { value: '2000+', label: 'Students Trained' },
    { value: '95%', label: 'Job Placement Rate' },
    { value: '4.9/5', label: 'Student Rating' },
    { value: '500+', label: 'Partner Companies' }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master BIM Software with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Elite Associate Training
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect training package to advance your career in BIM technology. 
            From beginner to expert level, we have the right program for you.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? 'ring-4 ring-blue-600 ring-opacity-50 scale-105' : ''
              } ${selectedPlan === plan.id ? 'ring-4 ring-blue-600' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <div className="text-left">
                        <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                        <div className="text-sm text-green-600 font-semibold">Save 38%</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{plan.duration} Program</span>
                    </div>
                  </div>

                  {/* Software Icons */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {plan.software.map((software, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {software}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    openModal();
                  }}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Enroll Now
                </button>

                <div className="text-center mt-4">
                  <button
                    onClick={openModal}
                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                  >
                    Schedule Free Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Elite Associate for BIM Software Training?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(benefit.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">30-Day Money Back Guarantee</h3>
            <p className="text-xl mb-6 opacity-90">
              Not satisfied with your learning experience? Get a full refund within 30 days. 
              We're confident you'll love our comprehensive BIM software training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Start Risk-Free Trial
              </button>
              <button
                onClick={openModal}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all flex items-center justify-center space-x-2"
              >
                <Headphones className="w-5 h-5" />
                <span>Talk to Advisor</span>
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