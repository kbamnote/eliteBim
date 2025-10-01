import React from 'react';
import { ArrowRight, Bell } from 'lucide-react';

export default function ResourcesCTA() {
  return (
    <div className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Stay Updated with Latest Resources
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Get notified when we add new resources, tutorials, and tools to our library.
          Join thousands of BIM professionals staying ahead of the curve.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Subscribe to Updates
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2">
            Browse All Resources
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div className="animate-fade-in-up">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-purple-200">Total Resources</div>
          </div>
          <div className="animate-fade-in-up delay-200">
            <div className="text-3xl font-bold mb-2">50k+</div>
            <div className="text-purple-200">Monthly Downloads</div>
          </div>
          <div className="animate-fade-in-up delay-300">
            <div className="text-3xl font-bold mb-2">15k+</div>
            <div className="text-purple-200">Community Members</div>
          </div>
          <div className="animate-fade-in-up delay-400">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-purple-200">Access Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}