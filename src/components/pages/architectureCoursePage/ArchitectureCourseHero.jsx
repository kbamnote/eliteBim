import React, { useState, useEffect } from 'react';
import { Star, Users, Clock, Award, CheckCircle, Building, Layers, Palette } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function ArchitectureCourseHero() {
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

  const [stats, setStats] = useState({
    architects: 0,
    projects: 0,
    rating: 0,
    hours: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targets = { architects: 2800, projects: 450, rating: 4.9, hours: 180 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          architects: Math.floor(targets.architects * progress),
          projects: Math.floor(targets.projects * progress),
          rating: Math.min(targets.rating, (targets.rating * progress)),
          hours: Math.floor(targets.hours * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(targets);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/20 rounded-full animate-bounce delay-1500"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 border border-blue-400/30 rotate-45 transform -translate-x-32"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 border border-purple-400/30 rotate-12 transform translate-x-24"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-indigo-400/40 rounded-full transform -translate-x-16 -translate-y-16"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-blue-200 ml-2">{stats.rating}/5.0</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Elite BIM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Architecture
              </span>
            </h1>

            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Master architectural BIM workflows with Revit, design visualization, and sustainable building practices. 
              Create stunning architectural models and advance your design career.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Building className="w-6 h-6 text-blue-400" />
                <span className="text-blue-100">Architectural Modeling</span>
              </div>
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-purple-400" />
                <span className="text-blue-100">Design Visualization</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette className="w-6 h-6 text-indigo-400" />
                <span className="text-blue-100">Rendering & Animation</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-400" />
                <span className="text-blue-100">Industry Certification</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl">
                Enroll Now
              </button>
            
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Job Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Industry Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Expert Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-fade-in-up delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Course Impact</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stats.architects.toLocaleString()}+</div>
                  <div className="text-blue-200">Architects Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stats.projects}+</div>
                  <div className="text-blue-200">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">{stats.rating}</div>
                  <div className="text-blue-200">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stats.hours}+</div>
                  <div className="text-blue-200">Learning Hours</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-200">Next Batch Starts</span>
                  <span className="text-white font-semibold">Nov 15, 2025</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-200">Duration</span>
                  <span className="text-white font-semibold">6 Months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Seats Remaining</span>
                  <span className="text-orange-400 font-semibold">8 of 35</span>
                </div>
              </div>
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