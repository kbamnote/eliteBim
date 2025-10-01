import React from 'react';

export default function CompaniesComp() {
  const companies = [
    {
      name: "AECOM",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      category: "Global Engineering",
      employees: "50,000+",
      projects: "Multiple infrastructure projects"
    },
    {
      name: "WSP",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      category: "Professional Services",
      employees: "55,000+",
      projects: "Transportation & building design"
    },
    {
      name: "Arup",
      logo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&h=100&fit=crop",
      category: "Engineering Consulting",
      employees: "16,000+",
      projects: "Innovative structural solutions"
    },
    {
      name: "Bechtel",
      logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=100&fit=crop",
      category: "Construction",
      employees: "53,000+",
      projects: "Large-scale infrastructure"
    },
    {
      name: "Skanska",
      logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=100&fit=crop",
      category: "Development & Construction",
      employees: "35,000+",
      projects: "Sustainable building solutions"
    },
    {
      name: "Turner Construction",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=100&fit=crop",
      category: "General Contractor",
      employees: "10,000+",
      projects: "Commercial & residential"
    }
  ];

  const testimonials = [
    {
      quote: "Elite BIM provided us with exceptional BIM coordinators who seamlessly integrated into our team and delivered outstanding results.",
      author: "Michael Johnson",
      role: "BIM Director",
      company: "AECOM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      quote: "The quality of talent from Elite BIM is unmatched. They understand our technical requirements and deliver professionals who exceed expectations.",
      author: "Sarah Williams",
      role: "Project Manager",
      company: "WSP Global",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    {
      quote: "Working with Elite BIM has transformed our project delivery timeline. Their professionals are skilled, reliable, and results-driven.",
      author: "David Chen",
      role: "Senior Associate",
      company: "Arup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading AEC companies worldwide trust Elite BIM to provide top-tier 
            talent for their most critical projects.
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {companies.map((company, index) => (
            <div key={index} className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2">{company.name}</h3>
                <p className="text-sm text-gray-600 text-center">{company.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center text-white mb-8">
            <h3 className="text-3xl font-bold mb-4">Partnership Impact</h3>
            <p className="text-xl text-indigo-100">
              See how our partnerships drive success across the industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2.5B+</div>
              <div className="text-indigo-200">Project Values</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15M+</div>
              <div className="text-indigo-200">Sq Ft Designed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-indigo-200">Client Retention</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <svg className="w-8 h-8 text-indigo-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-indigo-600 font-semibold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Join the Elite Network
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Become part of a growing network of industry leaders who trust Elite BIM 
            for their talent acquisition needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
              Partner With Us
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}