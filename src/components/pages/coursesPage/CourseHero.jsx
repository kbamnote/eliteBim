import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Award, PlayCircle, CheckCircle } from 'lucide-react';

export default function CourseHero() {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { icon: Users, label: "Students Enrolled", value: "2400+" },
    { icon: Award, label: "Completion Rate", value: "95%" },
    { icon: Star, label: "Course Rating", value: "4.9/5" }
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
      <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-yellow-400 rotate-45 opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-pink-400 rotate-12 opacity-30 animate-bounce-slow"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-yellow-400 rounded-full opacity-40 animate-ping-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular BIM Course
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-yellow-200 text-sm ml-2">4.9 (2,400+ reviews)</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Elite BIM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Professional
                </span>
                <br />
                Course
              </h1>
              
              <p className="text-yellow-200 text-lg lg:text-xl max-w-xl">
                Master Building Information Modeling technology with industry experts. From fundamentals to advanced techniques, 
                become a certified BIM professional in 7 months with hands-on project experience.
              </p>
            </div>

            {/* Course Info */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-200">Duration</span>
                </div>
                <div className="text-white font-bold text-xl">7 Months</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-pink-400" />
                  <span className="text-yellow-200">Format</span>
                </div>
                <div className="text-white font-bold text-xl">Live Online</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-200">Certification</span>
                </div>
                <div className="text-white font-bold text-xl">Industry Recognized</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span className="text-yellow-200">Next Cohort</span>
                </div>
                <div className="text-white font-bold text-xl">Nov 1, 2025</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-pink-300 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl">
                Enroll in BIM Course
                <CheckCircle className="w-5 h-5" />
              </button>
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl border-2 border-purple-400">
                <PlayCircle className="w-5 h-5" />
                Watch Course Preview
              </button>
            </div>

            {/* Upcoming Batch Info */}
            <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 animate-fade-in-up delay-700">
              <h3 className="text-white font-bold text-lg mb-2">🚀 Next BIM Batch Starting Soon!</h3>
              <p className="text-purple-200 text-sm mb-3">Join 50+ professionals in our November cohort for BIM training</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300">15 spots left</span>
                </div>
                <div className="text-yellow-200">Early bird discount: 20% off BIM course</div>
              </div>
            </div>
          </div>

          {/* Right Content - Course Preview */}
          <div className="relative animate-fade-in-right">
            {/* Video/Preview Container */}
            <div className="relative bg-gradient-to-br from-purple-700 to-indigo-800 rounded-3xl p-8 shadow-2xl border-4 border-purple-400/30">
              <div className="aspect-video bg-gray-900 rounded-2xl mb-6 flex items-center justify-center group cursor-pointer hover:bg-gray-800 transition-colors" role="img" aria-label="BIM course preview video">
                <PlayCircle className="w-20 h-20 text-white group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-4">BIM Course Preview</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-purple-200">Live project-based BIM learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-purple-200">Industry expert BIM mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-purple-200">BIM job placement assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-purple-200">Lifetime access to BIM resources</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-8 -right-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 shadow-2xl border border-purple-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform animate-float">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  {React.createElement(stats[currentStat].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats[currentStat].value}</div>
                  <div className="text-sm text-purple-200">{stats[currentStat].label}</div>
                </div>
              </div>
            </div>

            {/* Success Rate Card */}
            <div className="absolute bottom-8 -left-4 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-5 shadow-2xl border border-purple-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform animate-float-delayed">
              <div className="text-lg font-semibold text-white mb-2">Success Rate</div>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-sm text-purple-200">BIM Job Placement</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 left-1/2 w-12 h-12 border-4 border-yellow-400 rotate-45 animate-spin-slow"></div>
            <div className="absolute -bottom-4 right-1/4 w-8 h-8 border-4 border-pink-400 rotate-12 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}