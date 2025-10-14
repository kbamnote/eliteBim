import React from 'react';
import { Award, Users, Briefcase, TrendingUp, CheckCircle, Star, Clock, Target } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function SoftwareBenefits() {
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

  const benefits = [
    {
      icon: Award,
      title: "Industry Certification",
      description: "Get certified in multiple BIM software tools with industry-recognized credentials",
      color: "from-yellow-500 to-orange-600",
      features: ["Autodesk Certified", "Bentley Certified", "Official Certificates"]
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from certified professionals with 10+ years of industry experience",
      color: "from-blue-500 to-indigo-600",
      features: ["Industry Veterans", "Certified Trainers", "Real Project Experience"]
    },
    {
      icon: Briefcase,
      title: "Job-Ready Skills",
      description: "Master the exact software skills demanded by top AEC companies worldwide",
      color: "from-green-500 to-emerald-600",
      features: ["Industry Standards", "Real Workflows", "Portfolio Projects"]
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Advance your career with comprehensive BIM software expertise",
      color: "from-purple-500 to-pink-600",
      features: ["Salary Increase", "Better Positions", "Global Opportunities"]
    }
  ];

  const stats = [
    { number: "15+", label: "Software Tools", icon: Target },
    { number: "5000+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Job Placement", icon: Briefcase },
    { number: "4.9/5", label: "Student Rating", icon: Star }
  ];

  const learningPath = [
    {
      step: "01",
      title: "Foundation",
      description: "Start with AutoCAD and basic BIM concepts",
      duration: "4 weeks"
    },
    {
      step: "02",
      title: "Core Modeling",
      description: "Master Revit for architectural and MEP design",
      duration: "8 weeks"
    },
    {
      step: "03",
      title: "Advanced Tools",
      description: "Learn Navisworks, Tekla, and specialized software",
      duration: "6 weeks"
    },
    {
      step: "04",
      title: "Specialization",
      description: "Focus on visualization and analysis tools",
      duration: "4 weeks"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Elite Associate for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              BIM Software Training?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive training that goes beyond software basics. 
            Learn industry workflows, best practices, and real-world applications.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {React.createElement(stat.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                {React.createElement(benefit.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
              <div className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Your Learning Journey</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Follow our structured path to master all essential BIM software tools progressively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPath.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-blue-400 mb-4">{phase.step}</div>
                  <h4 className="text-xl font-bold mb-3">{phase.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{phase.description}</p>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{phase.duration}</span>
                  </div>
                </div>
                {index < learningPath.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Start Your BIM Software Mastery Today
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our comprehensive BIM software training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Start Learning Now
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