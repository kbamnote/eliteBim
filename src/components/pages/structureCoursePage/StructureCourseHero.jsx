import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Award, PlayCircle, CheckCircle } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function StructureCourseHero() {
  const [currentStat, setCurrentStat] = useState(0);
  
  // Modal state management
  const {
    isOpen,
    formData,
    agreedToTerms,
    status,
    handleChange,
    handleSubmit,
    closeModal,
    openModal,
    handleOverlayClick,
    setAgreedToTerms
  } = useCallbackModal();
  
  const stats = [
    { icon: Users, label: "Students Enrolled", value: "1800+" },
    { icon: Award, label: "Completion Rate", value: "97%" },
    { icon: Star, label: "Course Rating", value: "4.8/5" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-yellow-400 rotate-45 opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-emerald-400 rotate-12 opacity-30 animate-bounce-slow"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-yellow-400 rounded-full opacity-40 animate-ping-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold">
                  Specialized Structure Course
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-yellow-200 text-sm ml-2">4.8 (1,800+ reviews)</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Elite BIM Professional for
                <span className="block bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                  Structure
                </span>
              </h1>
              
              <p className="text-xl text-green-100 leading-relaxed">
                Master structural BIM workflows with Revit Structure, advanced modeling techniques, 
                and industry-standard practices. Transform your structural engineering career with 
                comprehensive hands-on training.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <span className="text-green-100">Revit Structure Mastery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <span className="text-green-100">Structural Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <span className="text-green-100">Reinforcement Modeling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <span className="text-green-100">Foundation Design</span>
              </div>
            </div>

            {/* Course Details */}
            <div className="flex flex-wrap gap-6 text-green-100">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span>6 Months Duration</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <span>Live Online Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Industry Certification</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openModal} className="bg-gradient-to-r from-yellow-400 to-emerald-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-emerald-300 transition-all transform hover:scale-105 shadow-xl">
                Enroll Now 
              </button>
              {/* <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                <PlayCircle className="w-6 h-6" />
                Watch Demo
              </button> */}
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            {/* Animated Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full flex items-center justify-center">
                  {React.createElement(stats[currentStat].icon, { className: "w-8 h-8 text-green-900" })}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stats[currentStat].value}</div>
                <div className="text-green-200">{stats[currentStat].label}</div>
              </div>
            </div>

            {/* Course Highlights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">What You'll Master</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Structural Modeling</div>
                    <div className="text-green-200 text-sm">Complete building structures from foundation to roof</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Reinforcement Design</div>
                    <div className="text-green-200 text-sm">Advanced rebar modeling and detailing techniques</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Structural Analysis</div>
                    <div className="text-green-200 text-sm">Integration with analysis software and workflows</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Batch Info */}
            <div className="bg-gradient-to-r from-yellow-400/20 to-emerald-400/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30">
              <div className="text-center">
                <div className="text-yellow-300 font-semibold mb-2">Next Batch Starts</div>
                <div className="text-2xl font-bold text-white mb-2">November 15, 2025</div>
                <div className="text-green-200 text-sm">Limited seats available</div>
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