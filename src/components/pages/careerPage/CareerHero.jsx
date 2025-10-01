import React from 'react';
import { Briefcase, TrendingUp, Target, Star } from 'lucide-react';

export default function CareerHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Build Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                  BIM Career
                </span>
                <br />
                Success
              </h1>
              
              <p className="text-orange-200 text-lg lg:text-xl max-w-xl">
                Transform your career with comprehensive BIM training, mentorship, and career guidance. 
                Join thousands who've advanced their careers with Elite BIM.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl">
                <Briefcase className="w-5 h-5" />
                Explore Careers
              </button>
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl border-2 border-orange-400">
                <Target className="w-5 h-5" />
                Get Career Guidance
              </button>
            </div>

            {/* Stats Section */}
            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">2400+</div>
                <div className="text-orange-200 text-sm">Career Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300">95%</div>
                <div className="text-orange-200 text-sm">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">40%</div>
                <div className="text-orange-200 text-sm">Average Salary Increase</div>
              </div>
            </div>
          </div>

          {/* Right Content - Career Journey Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-orange-400/30 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Briefcase className="w-20 h-20 text-white" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-red-400/30 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <TrendingUp className="w-20 h-20 text-white" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-pink-400/30 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-pink-500 to-orange-600 flex items-center justify-center">
                <Target className="w-20 h-20 text-white" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-orange-400/30 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <Star className="w-20 h-20 text-white" />
              </div>
            </div>

            {/* Floating Success Card */}
            <div className="absolute top-8 -right-4 bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-6 shadow-2xl border border-orange-400/30 backdrop-blur-sm">
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-1">$75k+</div>
                <div className="text-sm text-orange-200">Average Starting Salary</div>
              </div>
            </div>

            {/* Career Growth Card */}
            <div className="absolute bottom-8 -left-4 bg-gradient-to-br from-red-900 to-pink-900 rounded-2xl p-5 shadow-2xl border border-red-400/30 backdrop-blur-sm">
              <div className="text-white">
                <div className="text-lg font-semibold mb-2">Career Growth</div>
                <div className="text-2xl font-bold">3-5 years</div>
                <div className="text-sm text-red-200">To Senior Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}