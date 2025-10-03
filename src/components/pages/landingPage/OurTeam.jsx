import React from 'react';
import { MapPin, Calendar, GraduationCap, Building, Briefcase, Clock } from 'lucide-react';
import teamone from '../../../assets/teamone.jpeg';
import teamtwo from '../../../assets/teamtwo.jpeg';
import teamthree from '../../../assets/teamthree.jpeg';
import teamfour from '../../../assets/teamfour.jpeg';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Syed Shoeb Syed Ayyub",
      image: teamone,
      location: "Near Gulshan house, Nalsaheb Pura, Amravati 444601",
      dateOfBirth: "24/09/1993",
      qualification: "BE in Mechanical Engineering",
      company: "JB Everest Technical LLC",
      designation: "Senior Mechanical Design Engineer",
      experience: "10+ years"
    },
    {
      id: 2,
      name: "Mohammad Subhan",
      image: teamtwo,
      location: "Pansare Nagar, Lane Number 3, Hamdan Heights Yawlewadi",
      dateOfBirth: "4th August 1996",
      qualification: "B.E Mechanical",
      company: "Politechna Europa",
      designation: "Senior BIM Specialist",
      experience: "5 years"
    },
    {
      id: 3,
      name: "Mohammad Nayeem Ahmad",
      image: teamthree,
      location: "W/31, Ismailpura Near Masjid Yerkheda Road Kamptee -441001",
      dateOfBirth: "28-07-1993",
      qualification: "B.E Civil",
      company: "Pixel 3D Design",
      designation: "Co-Founder",
      experience: "10+ years"
    },
    {
      id: 4,
      name: "Tanveer Ahmad",
      image: teamfour,
      location: "Pili Haweli, Kamptee -441001",
      dateOfBirth: "04-01-1993",
      qualification: "B.E Civil",
      company: "Pixel 3D Design",
      designation: "Co-Founder",
      experience: "10+ years"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-2000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-purple-400 rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-indigo-400 rotate-12 opacity-30"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-purple-400 rounded-full opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passionate team of BIM professionals brings decades of combined experience in architecture, engineering, and construction technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border border-purple-100/50"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-indigo-400 p-1">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-80"></div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="flex items-center justify-center gap-1 text-purple-600 font-semibold mb-1">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">{member.company}</span>
                </div>
                <p className="text-indigo-600 font-medium text-sm">{member.designation}</p>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs leading-relaxed">{member.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs">Born: {member.dateOfBirth}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  <span className="text-xs">{member.qualification}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-medium">{member.experience} Experience</span>
                </div>
              </div>

              {/* Hover Effect Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Learn from Industry Experts?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our comprehensive BIM training program and learn directly from professionals working at top engineering firms.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl">
            Start Your BIM Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;