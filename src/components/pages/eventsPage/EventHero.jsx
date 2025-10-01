import React from 'react';
import { Clock, ArrowRight, Calendar, User } from 'lucide-react';

const EventHero = () => {
  const events = [
    {
      id: 1,
      date: '09 Nov',
      day: 'MON',
      title: 'Designing with Algorithms: How Architects Can Become Programmers',
      author: 'Rachael Tatlow',
      role: 'Architect & Software Developer for Specialist Modelling',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&q=80',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      date: '07 Oct',
      day: 'SAT',
      title: 'The 3 W\'s of BIM Entry Civil Engineer Should Know',
      author: 'Rachel Agaliotis',
      role: 'Senior BIM Manager',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      id: 3,
      date: '14 Aug',
      day: 'MON',
      title: 'Ep.05 How To Land Your Dream Job At Top Architecture Firms In The World',
      author: 'Multiple Authors',
      role: '',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 4,
      date: '17 Jul',
      day: 'MON',
      title: 'Ep.04 Understand The Career Roadmap Of A Successful Computational/ Sustainable Architect',
      author: 'Sarah Castle',
      role: 'Computational Design Specialist',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 5,
      date: '03 Jul',
      day: 'MON',
      title: 'Ep.03 How BIM And Computational Design Can Help Your Architectural Career',
      author: 'Matt Robinson',
      role: 'Senior Digital Designer',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      id: 6,
      date: '26 Jun',
      day: 'MON',
      title: 'Ep.02 Know What Architects Can Do After B.ARCH - Work, Postgrad, And More!',
      author: 'Raluca Grecu',
      role: 'Junior Architect/Project and Sustainability Engineer',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 7,
      date: '12 Jun',
      day: 'MON',
      title: 'Ep.01 The Future of Architectural Careers in the Changing AEC Industry',
      author: 'Tanya Casella',
      role: '',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80',
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Past Events & Webinars</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of past events, webinars, and industry insights from leading experts in BIM and AEC.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Event Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-90`}></div>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 text-center shadow-md">
                  <div className="text-xs font-bold text-gray-900">{event.date}</div>
                  <div className="text-xs text-gray-600 font-medium">{event.day}</div>
                </div>
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 leading-snug">
                  {event.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-3 my-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900">{event.author}</div>
                    {event.role && (
                      <div className="text-sm text-gray-500 truncate">{event.role}</div>
                    )}
                  </div>
                </div>

                {/* Watch Recording Button */}
                <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-md">
                  Watch Recording
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors shadow-lg">
            Load More Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHero;