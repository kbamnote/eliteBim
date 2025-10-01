import React from 'react';
import { Sparkles, Users, Award, TrendingUp } from 'lucide-react';

const ImpactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Decorative Shape - Top Left */}
      <div className="absolute top-0 left-0 animate-float">
        <svg width="184" height="240" viewBox="0 0 184 240" fill="none">
          <rect width="184" height="120" fill="url(#gradient1)" rx="20"/>
          <rect y="120" width="92" height="120" fill="url(#gradient2)" rx="20"/>
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="184" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a855f7"/>
              <stop offset="1" stopColor="#9333ea"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="120" x2="92" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ec4899"/>
              <stop offset="1" stopColor="#db2777"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Shape - Bottom Right */}
      <div className="absolute bottom-0 right-0 animate-float-delayed">
        <svg width="200" height="240" viewBox="0 0 200 240" fill="none">
          <rect x="108" width="92" height="140" fill="url(#gradient3)" rx="20"/>
          <rect x="16" y="100" width="184" height="140" fill="url(#gradient4)" rx="20"/>
          <defs>
            <linearGradient id="gradient3" x1="108" y1="0" x2="200" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ec4899"/>
              <stop offset="1" stopColor="#db2777"/>
            </linearGradient>
            <linearGradient id="gradient4" x1="16" y1="100" x2="200" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24"/>
              <stop offset="0.5" stopColor="#f97316"/>
              <stop offset="1" stopColor="#fb923c"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Top Tagline with Sparkle */}
        <div className="flex items-center justify-center gap-2 animate-fade-in-up">
          <p className="text-lg md:text-xl text-yellow-200 font-medium">
            Dreaming big, Building often
          </p>
          <Sparkles className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up delay-300">
          6000+ creative minds united globally
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-500">
          Together, we've already sent ripples of positive change in AEC.
          <br />
          Now, it's time to make a giant splash!
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in-up delay-700">
          <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-yellow-400/50 transition-all transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mb-4 mx-auto">
              <Users className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">6000+</div>
            <div className="text-purple-200 text-sm">Global Community</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-pink-400/50 transition-all transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-lg mb-4 mx-auto">
              <Award className="w-6 h-6 text-pink-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">95%</div>
            <div className="text-purple-200 text-sm">Success Rate</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-indigo-400/50 transition-all transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-lg mb-4 mx-auto">
              <TrendingUp className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">40%</div>
            <div className="text-purple-200 text-sm">Avg. Salary Hike</div>
          </div>
        </div>

        {/* Divider with Text */}
        <div className="flex items-center justify-center gap-4 pt-8 animate-fade-in-up delay-900">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-purple-300"></div>
          <p className="text-base md:text-lg text-purple-200 font-medium whitespace-nowrap">
            Movers and shakers, our brilliant alumni
          </p>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-300"></div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;