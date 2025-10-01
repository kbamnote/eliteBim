import React, { useState, useEffect } from 'react';
import { Briefcase, TrendingUp, Target, Star, ArrowRight, Calendar, Users, Award, GraduationCap } from 'lucide-react';

export default function CareerHero() {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { icon: TrendingUp, label: "Career Success Rate", value: "95%" },
    { icon: Star, label: "Average Salary Increase", value: "40%" },
    { icon: Briefcase, label: "Job Placements", value: "2400+" }
  ];

  const careerBenefits = [
    { icon: Users, title: "Expert Mentorship", description: "Learn from industry professionals" },
    { icon: Award, title: "Certification", description: "Get recognized credentials" },
    { icon: GraduationCap, title: "Skill Development", description: "Master in-demand skills" },
    { icon: TrendingUp, title: "Career Growth", description: "Accelerate your career" }
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
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-yellow-200 text-sm font-medium">Career Transformation</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Build Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Elite BIM
                </span>
                <br />
                Career Success
              </h1>
              
              <p className="text-yellow-200 text-lg lg:text-xl max-w-xl">
                Transform your career with comprehensive BIM training, mentorship, and career guidance. 
                Join thousands who've advanced their careers with Elite BIM.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-pink-300 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl">
                <Briefcase className="w-5 h-5" />
                Explore Careers
              </button>
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl border-2 border-purple-400">
                <Calendar className="w-5 h-5" />
                Get Career Guidance
              </button>
            </div>

            {/* Career Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-6 animate-fade-in-up delay-700">
              {careerBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/30 rounded-lg">
                      {React.createElement(benefit.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{benefit.title}</div>
                      <div className="text-purple-200 text-xs">{benefit.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="text-center animate-fade-in-up delay-300">
                <div className="text-3xl font-bold text-yellow-300">2400+</div>
                <div className="text-yellow-200 text-sm">Career Success Stories</div>
              </div>
              <div className="text-center animate-fade-in-up delay-500">
                <div className="text-3xl font-bold text-pink-300">95%</div>
                <div className="text-yellow-200 text-sm">Job Placement Rate</div>
              </div>
              <div className="text-center animate-fade-in-up delay-700">
                <div className="text-3xl font-bold text-yellow-300">40%</div>
                <div className="text-yellow-200 text-sm">Average Salary Increase</div>
              </div>
            </div>
          </div>

          {/* Right Content - Career Journey Visual */}
          <div className="relative animate-fade-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-pink-400/30 shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center group">
                <Briefcase className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-purple-400/30 shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center group">
                <TrendingUp className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-yellow-400/30 shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-purple-700 to-pink-600 flex items-center justify-center group">
                <Target className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-indigo-400/30 shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-pink-600 to-purple-700 flex items-center justify-center group">
                <Star className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            </div>

            {/* Floating Success Card */}
            <div className="absolute top-8 -right-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 shadow-2xl border border-purple-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform animate-float">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$75k+</div>
                  <div className="text-sm text-purple-200">Average Starting Salary</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>BIM Modeler</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span>BIM Coordinator</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-600"></div>
                  <span>BIM Manager</span>
                </div>
              </div>
            </div>

            {/* Performance Card */}
            <div className="absolute bottom-8 -left-4 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-5 shadow-2xl border border-purple-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform animate-float-delayed">
              <div className="text-lg font-semibold text-white mb-3">Career Growth</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {React.createElement(stats[currentStat].icon, { className: "w-5 h-5 text-purple-300" })}
                  <span className="text-purple-200 text-sm">{stats[currentStat].label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{stats[currentStat].value}</div>
              </div>
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