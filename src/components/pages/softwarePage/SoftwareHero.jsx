import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Award, PlayCircle, CheckCircle, Monitor, Cpu, Layers } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function SoftwareHero() {
  const [currentStat, setCurrentStat] = useState(0);
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
    { icon: Monitor, label: "Software Tools", value: "15+" },
    { icon: Users, label: "Students Trained", value: "5000+" },
    { icon: Award, label: "Industry Certified", value: "100%" }
  ];

  const softwareHighlights = [
    "Autodesk Revit - Complete Mastery",
    "Navisworks - Clash Detection & 4D",
    "AutoCAD - 2D & 3D Drafting",
    "Tekla Structures - Steel Detailing",
    "Bentley MicroStation - Infrastructure",
    "SketchUp - Conceptual Design"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-cyan-400 rotate-45 opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-blue-400 rotate-12 opacity-30 animate-bounce-slow"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-cyan-400 rounded-full opacity-40 animate-ping-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-white text-sm font-medium">Master Industry-Leading BIM Software</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Learn Every
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  BIM Software
                </span>
                You Need
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Master 15+ industry-standard BIM software tools with hands-on training from certified professionals. 
                From Revit to Navisworks, become proficient in every tool that matters.
              </p>
            </div>

            {/* Software Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {softwareHighlights.map((software, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{software}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl"
              >
                Start Learning Now
              </button>
             
            </div>

            {/* Animated Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {React.createElement(stats[currentStat].icon, { 
                    className: "w-8 h-8 text-cyan-400" 
                  })}
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stats[currentStat].value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {stats[currentStat].label}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentStat ? 'bg-cyan-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Software Showcase */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Software Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { name: "Revit", color: "bg-orange-500" },
                  { name: "Navisworks", color: "bg-green-500" },
                  { name: "AutoCAD", color: "bg-red-500" },
                  { name: "Tekla", color: "bg-blue-500" },
                  { name: "Bentley", color: "bg-purple-500" },
                  { name: "SketchUp", color: "bg-yellow-500" },
                  { name: "Dynamo", color: "bg-pink-500" },
                  { name: "Lumion", color: "bg-indigo-500" },
                  { name: "3ds Max", color: "bg-teal-500" }
                ].map((software, index) => (
                  <div
                    key={index}
                    className={`${software.color} rounded-xl p-4 text-white text-center font-bold text-sm transform hover:scale-105 transition-all cursor-pointer`}
                  >
                    {software.name}
                  </div>
                ))}
              </div>

              {/* Feature List */}
              <div className="space-y-3">
                <h3 className="text-white font-bold text-lg mb-4">What You'll Master:</h3>
                {[
                  "3D Modeling & Design",
                  "Clash Detection & Resolution",
                  "4D & 5D BIM Workflows",
                  "Parametric Design",
                  "Visualization & Rendering"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce-slow">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <Cpu className="w-6 h-6 text-white" />
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