import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonalsComp() {
  const testimonials = [
    {
      id: 1,
      quote: "Elite BIM transformed our hiring process completely. We found three exceptional BIM coordinators within a week, and they've been instrumental in delivering our high-rise project ahead of schedule. The quality of talent is unmatched.",
      author: "Sarah Mitchell",
      role: "Project Director",
      company: "Skanska USA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      rating: 5,
      project: "Manhattan High-Rise Complex",
      savings: "$2.3M saved in project costs"
    },
    {
      id: 2,
      quote: "The level of expertise that Elite BIM professionals bring is exceptional. They seamlessly integrated into our workflow and brought innovative solutions that improved our entire BIM process. Highly recommended for any serious AEC firm.",
      author: "Michael Rodriguez",
      role: "BIM Manager",
      company: "AECOM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      project: "Airport Terminal Expansion",
      savings: "40% faster delivery"
    },
    {
      id: 3,
      quote: "Working with Elite BIM has been a game-changer for our firm. Their professionals don't just do the work—they elevate our entire team's capabilities. The ROI has been incredible, and we've since hired 8 more professionals through them.",
      author: "Jennifer Park",
      role: "Principal Architect",
      company: "Gensler",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      project: "Mixed-Use Development",
      savings: "25% improvement in efficiency"
    },
    {
      id: 4,
      quote: "Elite BIM's talent matching system is incredibly accurate. They understood our specific technical requirements and cultural fit needs. The professionals they provided have become key members of our team and leaders in their respective areas.",
      author: "David Chen",
      role: "Senior Associate",
      company: "Arup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      project: "Infrastructure Modernization",
      savings: "Reduced hiring time by 75%"
    },
    {
      id: 5,
      quote: "The caliber of BIM professionals from Elite BIM exceeded our expectations. They brought fresh perspectives and advanced technical skills that helped us win three major projects. Their impact on our bottom line has been substantial.",
      author: "Emma Thompson",
      role: "Operations Director",
      company: "WSP Global",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
      rating: 5,
      project: "Smart City Initiative",
      savings: "$1.8M additional revenue"
    },
    {
      id: 6,
      quote: "Elite BIM doesn't just provide talent—they provide partners. The professionals we hired have been with us for over two years now, consistently delivering excellence and helping us establish new BIM standards across all our projects.",
      author: "Robert Kim",
      role: "Chief Technology Officer",
      company: "Turner Construction",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
      rating: 5,
      project: "Healthcare Campus Development",
      savings: "95% retention rate"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their projects and teams 
            with Elite BIM talent.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Quote Section */}
              <div className="lg:col-span-2">
                <Quote className="w-12 h-12 text-indigo-600 mb-6" />
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-xl text-gray-900">{currentTestimonial.author}</div>
                    <div className="text-gray-600">{currentTestimonial.role}</div>
                    <div className="text-indigo-600 font-semibold">{currentTestimonial.company}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">5.0 out of 5</span>
                </div>
              </div>

              {/* Project Info Card */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Project Impact</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-indigo-200">Project</div>
                    <div className="font-semibold">{currentTestimonial.project}</div>
                  </div>
                  <div>
                    <div className="text-sm text-indigo-200">Result</div>
                    <div className="font-semibold text-lg">{currentTestimonial.savings}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevTestimonial}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">2400+</div>
            <div className="text-gray-600">Successful Placements</div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-700">AECOM</div>
            <div className="text-2xl font-bold text-gray-700">WSP</div>
            <div className="text-2xl font-bold text-gray-700">Arup</div>
            <div className="text-2xl font-bold text-gray-700">Gensler</div>
            <div className="text-2xl font-bold text-gray-700">Skanska</div>
            <div className="text-2xl font-bold text-gray-700">Turner</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful companies that have transformed their 
            projects with Elite BIM talent.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}