import React from 'react';

const WebinarCta = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-sm text-gray-600 mb-3 font-medium">
                We'd love to hear from you!
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Have any ideas for webinar topics? The floor is yours!
              </h2>
              <div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  Suggest Here
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarCta;