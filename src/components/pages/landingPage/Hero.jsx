import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';
import bimEngineer1 from '../../../assets/bimEngineerOne.jpg';
import bimEngineer2 from '../../../assets/bimEngineerTwo.jpg';
import bimEngineer3 from '../../../assets/bimEngineerThree.jpg';
import bimEngineer4 from '../../../assets/bimEngineerFour.jpg';
import bimEngineer5 from '../../../assets/bimEngineerFive.jpg';
import bimEngineer6 from '../../../assets/bimEngineerSix.jpg';

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0);
  
  // Modal functionality
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
  
  const stats = [
    { icon: Users, label: "Currently Impacting", value: "2400+ learners" },
    { icon: BookOpen, label: "Tasks Completed", value: "1800+" },
    { icon: Award, label: "Total live sessions", value: "500+" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-yellow-400 rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-pink-400 rotate-12 opacity-30"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-yellow-400 rounded-full opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Empowering
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Elite BIM
                </span>
                <br />
                next-gen architects
                <br />
                and engineers
                <br />
                towards career
                <br />
                success
              </h1>
              
              <p className="text-yellow-200 text-lg lg:text-xl max-w-xl">
                Online BIM certification courses that set you up for success. Gain
                industry-relevant skills with cohort-based learning in Building Information Modeling.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/courses" className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl">
                Explore BIM Courses
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={openModal}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl border-2 border-purple-400"
              >
                Request a Call Back
                <Phone className="w-5 h-5" />
              </button>
            </div>

            {/* Company Logos Section */}
            <div className="pt-8">
              <p className="text-yellow-200 text-sm mb-4">Learn from experts working at</p>
              <div className="flex flex-wrap gap-6 items-center opacity-70">
                <div className="text-white font-bold text-2xl">WSP</div>
                <div className="text-white font-bold text-2xl">AECOM</div>
                <div className="text-white font-bold text-2xl">Arup</div>
                <div className="text-white font-bold text-2xl">Bechtel</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid with Stats */}
          <div className="relative">
            {/* Main Grid of Images */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Row */}
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-pink-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src={bimEngineer1} 
                  alt="Indian BIM engineer at construction site with safety helmet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-purple-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src={bimEngineer2} 
                  alt="Professional Indian BIM engineer using construction technology"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Middle Row */}
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-yellow-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src={bimEngineer3} 
                  alt="Indian construction professional working with BIM tools"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-indigo-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src={bimEngineer4} 
                  alt="Indian BIM engineer managing construction project"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom Row */}
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-pink-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src={bimEngineer5} 
                  alt="Indian architect using BIM software at construction site"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-purple-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src={bimEngineer6} 
                  alt="Professional Indian BIM engineer working on digital construction model"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-8 -right-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 shadow-2xl border border-purple-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1800+</div>
                  <div className="text-sm text-purple-200">Tasks Completed</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Expert</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Advanced</span>
                </div>
                <div className="text-purple-200 text-xs mt-2">Suited for BIM Manager</div>
              </div>
            </div>

            {/* Performance Card */}
            <div className="absolute bottom-8 -left-4 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-5 shadow-2xl border border-purple-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="text-lg font-semibold text-white mb-3">Performance</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {React.createElement(stats[currentStat].icon, { className: "w-5 h-5 text-purple-300" })}
                  <span className="text-purple-200 text-sm">{stats[currentStat].label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{stats[currentStat].value}</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 left-1/2 w-12 h-12 border-4 border-yellow-400 rotate-45"></div>
            <div className="absolute -bottom-4 right-1/4 w-8 h-8 border-4 border-pink-400 rotate-12"></div>
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