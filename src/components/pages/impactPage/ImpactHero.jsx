import React from 'react';
import { Sparkles } from 'lucide-react';

const ImpactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 overflow-hidden">
      {/* Decorative Shape - Top Left */}
      <div className="absolute top-0 left-0">
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
      <div className="absolute bottom-0 right-0">
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
        <div className="flex items-center justify-center gap-2">
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Dreaming big, Building often
          </p>
          <Sparkles className="w-6 h-6 text-purple-500 fill-purple-500" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          6000+ creative minds united globally
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Together, we've already sent ripples of positive change in AEC.
          <br />
          Now, it's time to make a giant splash!
        </p>

        {/* Divider with Text */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gray-300"></div>
          <p className="text-base md:text-lg text-gray-700 font-medium whitespace-nowrap">
            Movers and shakers, our brilliant alumni
          </p>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;