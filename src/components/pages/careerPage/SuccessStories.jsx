import React from 'react';
import { Star, TrendingUp, Award } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: "Alex Rodriguez",
      before: "Architecture Graduate",
      after: "BIM Coordinator at AECOM",
      salary: "$45k → $72k",
      time: "8 months",
      quote: "Elite BIM transformed my career. From struggling to find entry-level work to landing a coordinator role at a top firm.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      company: "AECOM"
    },
    {
      name: "Sarah Kim",
      before: "CAD Technician",
      after: "BIM Manager at Skanska",
      salary: "$55k → $95k",
      time: "14 months",
      quote: "The mentorship and training at Elite BIM gave me the confidence and skills to step into a leadership role.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      company: "Skanska"
    },
    {
      name: "Michael Chen",
      before: "Construction Worker",
      after: "VDC Specialist at Turner",
      salary: "$40k → $88k",
      time: "18 months",
      quote: "Elite BIM opened doors I never knew existed. The career transition support was incredible.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      company: "Turner Construction"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from professionals who transformed their careers with Elite BIM.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <img src={story.avatar} alt={story.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-orange-600 font-semibold">{story.company}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Career Growth</span>
                </div>
                <p className="text-sm text-gray-600">{story.before} → {story.after}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="font-bold text-green-600">{story.salary}</div>
                  <div className="text-xs text-gray-500">Salary Growth</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="font-bold text-orange-600">{story.time}</div>
                  <div className="text-xs text-gray-500">Time Frame</div>
                </div>
              </div>
              
              <blockquote className="text-gray-600 italic text-sm">
                "{story.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}