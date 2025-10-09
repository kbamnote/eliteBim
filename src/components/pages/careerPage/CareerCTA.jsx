import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CareerCTA() {
  return (
    <div className="py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who have advanced their careers with Elite BIM. 
          Take the first step towards your dream BIM career today.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book Career Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
            Explore Programs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div>
            <div className="text-3xl font-bold mb-2">2400+</div>
            <div className="text-orange-200">Success Stories</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-orange-200">Job Placement Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">$75k+</div>
            <div className="text-orange-200">Average Starting Salary</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">30%</div>
            <div className="text-orange-200">Salary Increase</div>
          </div>
        </div>
      </div>
    </div>
  );
}