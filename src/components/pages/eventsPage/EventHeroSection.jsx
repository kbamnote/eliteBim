import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Award, PlayCircle, MapPin } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function EventHeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  
  // Modal functionality
  const { 
    isOpen, 
    formData, 
    agreedToTerms, 
    status, 
    handleChange, 
    handleSubmit, 
    closeModal, 
    handleOverlayClick, 
    setAgreedToTerms, 
    openModal 
  } = useCallbackModal();
  
  const stats = [
    { icon: Users, label: "Attendees", value: "5000+" },
    { icon: Award, label: "Events Hosted", value: "150+" },
    { icon: Calendar, label: "Upcoming Events", value: "12" }
  ];

  const scrollToPastEvents = () => {
    const pastEventsSection = document.getElementById('past-events');
    if (pastEventsSection) {
      pastEventsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "BIM for Infrastructure Projects",
      date: "Nov 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Elite BIM Center",
      type: "Workshop",
      speaker: "Tanveer Ahmad",
      company: "Arup"
    },
    {
      id: 2,
      title: "Revit Advanced Coordination Techniques",
      date: "Nov 22, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Online Webinar",
      type: "Masterclass",
      speaker: "Mohammad Nayeem Ahmad",
      company: "WSP"
    },
    {
      id: 3,
      title: "Sustainable Design with BIM",
      date: "Dec 5, 2025",
      time: "1:00 PM - 3:00 PM",
      location: "Elite BIM Center",
      type: "Seminar",
      speaker: "Mohammad Subhan",
      company: "AECOM"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-yellow-400 rotate-45 opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-pink-400 rotate-12 opacity-30 animate-bounce-slow"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-yellow-400 rounded-full opacity-40 animate-ping-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold">
                  Upcoming BIM Events
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                BIM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Events
                </span>
                <br />
                & Webinars
              </h1>
              
              <p className="text-yellow-200 text-lg lg:text-xl max-w-xl">
                Join our upcoming BIM events and webinars to learn from industry experts. 
                Stay updated with the latest trends in Building Information Modeling, network with professionals, 
                and enhance your skills.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white">{stats[0].value}</div>
                <div className="text-purple-200 text-sm">{stats[0].label}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white">{stats[1].value}</div>
                <div className="text-purple-200 text-sm">{stats[1].label}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white">{stats[2].value}</div>
                <div className="text-purple-200 text-sm">{stats[2].label}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-pink-300 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
              >
                Register Now
                <Calendar className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollToPastEvents}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl border-2 border-purple-400"
              >
                <Calendar className="w-5 h-5" />
                View Past Events
              </button>
            </div>
          </div>

          {/* Right Content - Upcoming Events Preview */}
          <div className="relative animate-fade-in-right">
            {/* Events Preview Container */}
            <div className="relative bg-gradient-to-br from-purple-700 to-indigo-800 rounded-3xl p-8 shadow-2xl border-4 border-purple-400/30">
              <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-yellow-400" />
                Upcoming BIM Events
              </h3>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-purple-400/30 hover:bg-white/20 transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-bold text-lg">{event.title}</h4>
                      <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-2 py-1 rounded-full text-xs font-bold">
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-purple-200">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-200">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-200">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-purple-400/30">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">
                          {event.speaker.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{event.speaker}</div>
                        <div className="text-purple-200 text-xs">{event.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={scrollToPastEvents}
                className="w-full mt-6 bg-white text-purple-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md"
              >
                View All Events
              </button>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-8 -right-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 shadow-2xl border border-purple-400/30 backdrop-blur-sm transform hover:scale-105 transition-transform animate-float">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  {React.createElement(stats[currentStat].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats[currentStat].value}</div>
                  <div className="text-sm text-purple-200">{stats[currentStat].label}</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 left-1/2 w-12 h-12 border-4 border-yellow-400 rotate-45 animate-spin-slow"></div>
            <div className="absolute -bottom-4 right-1/4 w-8 h-8 border-4 border-pink-400 rotate-12 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
      
      {/* Callback Modal */}
      <CallbackModal
        isOpen={isOpen}
        formData={formData}
        agreedToTerms={agreedToTerms}
        status={status}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        handleOverlayClick={handleOverlayClick}
        setAgreedToTerms={setAgreedToTerms}
      />
    </div>
  );
}