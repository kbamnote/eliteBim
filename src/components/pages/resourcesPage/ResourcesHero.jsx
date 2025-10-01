import React from 'react';
import { BookOpen, Download, Star, ArrowRight, Play } from 'lucide-react';

export default function ResourcesHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-emerald-400 rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-teal-400 rotate-12 opacity-30"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-emerald-400 rounded-full opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                BIM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                  Resources
                </span>
                <br />
                Hub
              </h1>
              
              <p className="text-emerald-200 text-lg lg:text-xl max-w-xl">
                Comprehensive collection of BIM resources, tools, templates, and learning materials to accelerate your professional growth and project success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl">
                <BookOpen className="w-5 h-5" />
                Browse Resources
              </button>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl border-2 border-emerald-400">
                <Download className="w-5 h-5" />
                Free Downloads
              </button>
            </div>

            {/* Stats Section */}
            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">500+</div>
                <div className="text-emerald-200 text-sm">Resources Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">1000+</div>
                <div className="text-emerald-200 text-sm">Downloads Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">24/7</div>
                <div className="text-emerald-200 text-sm">Access Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Resource Grid */}
          <div className="relative">
            {/* Main Grid of Resource Icons */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-emerald-400/30 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <BookOpen className="w-20 h-20 text-white" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-teal-400/30 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center">
                <Download className="w-20 h-20 text-white" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-green-400/30 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Play className="w-20 h-20 text-white" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-emerald-400/30 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <Star className="w-20 h-20 text-white" />
              </div>
            </div>

            {/* Floating Resource Card */}
            <div className="absolute top-8 -right-4 bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-6 shadow-2xl border border-emerald-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-emerald-200">New This Month</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Templates</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Tutorials</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Guidelines</span>
                </div>
              </div>
            </div>

            {/* Downloads Card */}
            <div className="absolute bottom-8 -left-4 bg-gradient-to-br from-teal-900 to-green-900 rounded-2xl p-5 shadow-2xl border border-teal-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="text-lg font-semibold text-white mb-3">Popular Downloads</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-teal-300" />
                  <span className="text-teal-200 text-sm">BIM Templates</span>
                </div>
                <div className="text-2xl font-bold text-white">1000+/day</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}