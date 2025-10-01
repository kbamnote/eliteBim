import React from 'react';
import { Users, MessageCircle, Calendar, Trophy } from 'lucide-react';

export default function CommunityResources() {
  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Community Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow BIM professionals, share knowledge, and grow together in our vibrant community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Forums</h3>
            <p className="text-gray-600 text-sm">Join discussions with 10,000+ BIM professionals</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up delay-200">
            <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Q&A</h3>
            <p className="text-gray-600 text-sm">Get expert answers to your technical questions</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up delay-300">
            <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Events</h3>
            <p className="text-gray-600 text-sm">Attend webinars and networking events</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up delay-400">
            <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Challenges</h3>
            <p className="text-gray-600 text-sm">Participate in skill-building challenges</p>
          </div>
        </div>
      </div>
    </div>
  );
}