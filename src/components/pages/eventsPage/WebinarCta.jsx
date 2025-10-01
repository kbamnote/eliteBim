import React from 'react';
import { MessageCircle, Users, Calendar } from 'lucide-react';

const WebinarCta = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-6 h-6 text-yellow-400" />
                <p className="text-yellow-300 font-semibold">
                  Community Feedback
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Have ideas for webinar topics? We'd love to hear from you!
              </h2>
              <p className="text-purple-200 mb-8 text-lg">
                Your insights help us create content that matters most to BIM professionals like you.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Suggest a Topic
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors font-medium">
                  View Upcoming Webinars
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-purple-600 opacity-90"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Professional woman at desk"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              {/* Decorative overlay for more vibrant look */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-pink-400/40"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex justify-between">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-5 h-5 text-yellow-400" />
                      <span className="text-2xl font-bold text-white">500+</span>
                    </div>
                    <div className="text-purple-200 text-sm">Community Members</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5 text-yellow-400" />
                      <span className="text-2xl font-bold text-white">120+</span>
                    </div>
                    <div className="text-purple-200 text-sm">Webinars Hosted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarCta;