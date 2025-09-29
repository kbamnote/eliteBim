import React from 'react';
import { MessageSquare, Video, ChevronRight } from 'lucide-react';

export default function BimFeatures() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const features = [
    {
      icon: MessageSquare,
      title: "Personalised Feedback and Skill-Mapping",
      description: "1:1 feedback sessions help you improve as you learn. A special Skill Map identifies your core competencies so you can leverage them for your career.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      icon: Video,
      title: "Interactive Live Sessions with Experts",
      description: "All lessons are delivered live, so you can interact with mentors as well as your peers from around the world. At Novatr, online learning never feels dull!",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeSlide === index ? 'opacity-100' : 'opacity-40'
                }`}
                onMouseEnter={() => setActiveSlide(index)}
              >
                <div className="flex items-start gap-4 cursor-pointer group">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-purple-200 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              {/* Dashboard Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h4 className="text-gray-700 font-semibold text-lg">Dashboard</h4>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Navigation Menu */}
                <div className="space-y-2 mb-6">
                  <div className="bg-purple-600 text-white px-4 py-3 rounded-lg flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded"></div>
                    <span className="font-medium">Overview</span>
                  </div>
                  {['My Schedule', 'Live Learning', 'Capstone Project', 'Performance', 'Feedback Reports'].map((item, i) => (
                    <div key={i} className="text-gray-600 px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-50 transition-colors">
                      <div className="w-5 h-5 bg-gray-200 rounded"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* User Images Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&q=80" 
                    alt="Team member"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&q=80" 
                    alt="Team member"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80" 
                    alt="Team member"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>

                {/* Chat Messages */}
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-700 font-semibold text-sm">L</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-1">Learner</p>
                        <p className="text-gray-700 text-sm">I am facing an issue while linking the CAD file</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">N</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-1">Mentor</p>
                        <p className="text-gray-700 text-sm">Convert the CAD file to 2013 and link it. Hope that helps!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                activeSlide === index
                  ? 'bg-white w-8 h-3'
                  : 'bg-white/40 w-3 h-3 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}