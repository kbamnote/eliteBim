import React from 'react';
import { ArrowRight, Briefcase, Users, TrendingUp, Target } from 'lucide-react';

export default function HireHeroComp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-cyan-400 rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-blue-400 rotate-12 opacity-30"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-cyan-400 rounded-full opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hire
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Elite BIM
                </span>
                <br />
                Talent
              </h1>
              
              <p className="text-blue-200 text-lg lg:text-xl max-w-xl">
                Connect with industry-ready BIM professionals. Our certified graduates are equipped with cutting-edge skills and real-world experience to drive your projects forward.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl">
                Browse Talent
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl border-2 border-indigo-400">
                <Briefcase className="w-5 h-5" />
                Post a Job
              </button>
            </div>

            {/* Stats Section */}
            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">2400+</div>
                <div className="text-blue-200 text-sm">Skilled Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">95%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-300">500+</div>
                <div className="text-blue-200 text-sm">Companies Served</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Grid */}
          <div className="relative">
            {/* Main Grid of Professional Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-cyan-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="BIM Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-blue-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop" 
                  alt="BIM Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-indigo-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                  alt="BIM Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-purple-400/30 shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                  alt="BIM Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Talent Card */}
            <div className="absolute top-8 -right-4 bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-6 shadow-2xl border border-blue-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-blue-200">Available Now</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>BIM Modelers</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>BIM Coordinators</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>BIM Managers</span>
                </div>
              </div>
            </div>

            {/* Performance Card */}
            <div className="absolute bottom-8 -left-4 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-5 shadow-2xl border border-blue-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="text-lg font-semibold text-white mb-3">Hiring Success</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200 text-sm">Placement Rate</span>
                </div>
                <div className="text-2xl font-bold text-white">95%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}