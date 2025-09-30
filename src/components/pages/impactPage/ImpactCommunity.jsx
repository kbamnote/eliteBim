import React from 'react';
import { Users, Star } from 'lucide-react';

const ImpactCommunity = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 leading-tight">
          6000+ learners are already a part of a global community focused on staying at the forefront of technology. The future of AEC is here!
        </h2>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Global Community Badge */}
          <div className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-full shadow-md">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <span className="font-semibold text-sm">Global Community</span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-2 bg-purple-700 text-white px-5 py-2.5 rounded-full shadow-md">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-sm">4.9</span>
            </div>
            <div className="w-px h-4 bg-purple-400"></div>
            <span className="font-semibold text-sm">5k+ reviews</span>
          </div>
        </div>

        {/* CTA Message */}
        <div className="bg-white rounded-2xl shadow-lg px-8 py-5 inline-block">
          <p className="text-gray-700 font-medium text-base md:text-lg">
            Are you ready to be a part of the revolution?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactCommunity;