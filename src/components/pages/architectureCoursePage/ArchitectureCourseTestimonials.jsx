import React from 'react';
import { Star, Quote, Building, Users, TrendingUp, Award } from 'lucide-react';

export default function ArchitectureCourseTestimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Architect",
      company: "Gensler",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The Elite BIM Architecture program transformed my career completely. I went from junior architect to senior architect at Gensler within 8 months of completing the course. The visualization and BIM coordination skills I learned are invaluable in today's architectural practice.",
      achievement: "Promoted to Senior Architect"
    },
    {
      name: "Michael Rodriguez",
      role: "Design Director",
      company: "HOK",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "This program gave me the technical expertise and confidence to lead complex architectural projects. The hands-on approach and real-world projects prepared me perfectly for the challenges I face daily. Now I'm leading a team of 12 architects on major commercial projects.",
      achievement: "Leading $50M+ Projects"
    },
    {
      name: "Emily Johnson",
      role: "BIM Manager",
      company: "Perkins&Will",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The comprehensive curriculum covered everything from basic modeling to advanced visualization techniques. The mentorship program was exceptional - having a senior architect guide me through real projects made all the difference. I landed my dream job 3 weeks after graduation.",
      achievement: "Dream Job in 3 Weeks"
    },
    {
      name: "David Park",
      role: "Principal Architect",
      company: "SOM",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "As someone who transitioned from traditional CAD to BIM, this program was exactly what I needed. The structured approach and expert instruction helped me master Revit and architectural visualization quickly. I'm now leading BIM implementation at my firm.",
      achievement: "Leading BIM Implementation"
    },
    {
      name: "Lisa Thompson",
      role: "Architectural Designer",
      company: "Foster + Partners",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The portfolio I built during this program was instrumental in landing my position at Foster + Partners. The projects were challenging and realistic, giving me confidence to tackle complex architectural designs. The career support team was amazing throughout the job search process.",
      achievement: "Joined Foster + Partners"
    },
    {
      name: "James Wilson",
      role: "Senior Designer",
      company: "Zaha Hadid Architects",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "This program opened doors I never thought possible. The advanced parametric design techniques and computational workflows I learned are exactly what firms like Zaha Hadid Architects are looking for. My salary increased by 60% after completing the program.",
      achievement: "60% Salary Increase"
    }
  ];

  const successMetrics = [
    { number: "2,800+", label: "Architects Trained", icon: Users },
    { number: "95%", label: "Completion Rate", icon: Award },
    { number: "98%", label: "Job Placement", icon: TrendingUp },
    { number: "4.9/5", label: "Average Rating", icon: Star }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Architecture Success Stories
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Hear from architects who have transformed their careers and now work at the world's 
            most prestigious architectural firms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-blue-300">{testimonial.role}</p>
                  <p className="text-blue-400 font-semibold">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-blue-100 leading-relaxed mb-6">{testimonial.text}</p>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3">
                <p className="text-white font-semibold text-sm text-center">
                  🎉 {testimonial.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Architectural BIM Success Metrics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-blue-200">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our Architecture Success Stories?
          </h3>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Take the first step towards advancing your architectural career with our comprehensive BIM program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl">
              Start Your Journey - $2,297
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}