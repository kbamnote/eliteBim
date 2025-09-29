import React from 'react';
import { Building2 } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Maureen Jachingi",
      role: "BIM Salary Hike",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "The course was an excellent blend of theoretical concepts and practical applications. It's an excellent investment for those looking to enhance their career prospects and stay relevant in the constantly evolving AEC industry.",
      gradient: "from-green-400 to-green-300",
      badgeColor: "bg-green-500"
    },
    {
      name: "Ravi Kumar",
      role: "Got Ex-Comp Offer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "After completing the BIM course, I was very grateful for the Novatr team's guidance, interview training, and assistance in finding the right employment opportunities. They have been a huge part of my career switch.",
      gradient: "from-pink-400 to-purple-400",
      badgeColor: "bg-pink-500"
    }
  ];

  const companies = [
    { name: "ATKNS", logo: "ATKNS" },
    { name: "BDP", logo: "BDP" },
    { name: "AECOM", logo: "AECOM" },
    { name: "dar group", logo: "dar group" },
    { name: "KEO", logo: "KEO" },
    { name: "HORNPOINT", logo: "HORNPOINT" },
    { name: "REDLINE", logo: "REDLINE" },
    { name: "Siemens", logo: "Siemens" }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-purple-600 font-semibold mb-3 text-sm">Placement Assistance</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Land the Job You Dreamed Of
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Securing relevant opportunities, networking with companies, and landing interviews – you'll ace it all with our personalised career guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${testimonial.gradient} p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="bg-white rounded-2xl p-6 h-full">
                {/* Badge */}
                <div className="mb-4">
                  <span className={`${testimonial.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold inline-block`}>
                    {testimonial.role}
                  </span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">Graduate</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center mb-12">
          <p className="text-gray-700 text-lg mb-2">
            Our 950 graduates landed placements at top AECs with an average pay hike of <span className="font-bold text-purple-600">63%</span>!
          </p>
          <a href="#" className="text-purple-600 font-semibold hover:underline inline-flex items-center gap-1">
            Click to learn more →
          </a>
        </div>

        {/* Companies Section */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-6">Get placed in alumni at</p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center mb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <span className="text-xl font-bold text-gray-700">{company.logo}</span>
            </div>
          ))}
        </div>

        {/* Bottom Section - Unforgettable Experience */}
        <div className="border-t-4 border-purple-600 pt-8 mt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p className="text-purple-600 font-semibold mb-3 text-sm">Innovative Learning</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                An Unforgettable Experience
              </h2>
              <p className="text-gray-600 text-lg">
                Traditional teaching methods have no place in the modern world. That's why we infuse digital game mechanics with real-age pedagogical to enhance your learning.
              </p>
            </div>

            {/* Right Content - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                alt="Student"
                className="rounded-xl w-full h-32 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                alt="Student"
                className="rounded-xl w-full h-32 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop"
                alt="Student"
                className="rounded-xl w-full h-32 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                alt="Student"
                className="rounded-xl w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}