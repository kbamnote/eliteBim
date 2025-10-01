import React, { useState } from "react";
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Briefcase,
  PiggyBank,
  CalendarPlus,
} from "lucide-react";

// Reusable Hover Card
const Card = ({ icon: Icon, title, subtitle, hoverTitle, hoverDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: "320px" }}
    >
      {/* Default Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <Icon className="w-16 h-16 text-blue-600 mb-6" strokeWidth={1.5} />
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          {title}
        </h3>
        <p className="text-2xl font-bold text-purple-600 text-center">
          {subtitle}
        </p>
      </div>

      {/* Hover Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-white transition-all duration-700 ease-out ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          background: "linear-gradient(135deg, #f97066 0%, #2e90fa 100%)",
        }}
      >
        <Icon className="w-16 h-16 mb-6" strokeWidth={1.5} />
        <h3 className="text-xl font-bold text-center mb-4">{hoverTitle}</h3>
        <p className="text-center text-sm leading-relaxed">
          {hoverDescription}
        </p>
      </div>
    </div>
  );
};

export default function AECHiringPage() {
  const stats = [
    { icon: Building2, number: "500+", label: "AEC Companies", color: "text-blue-400" },
    { icon: Users, number: "2400+", label: "Skilled Professionals", color: "text-green-400" },
    { icon: Award, number: "95%", label: "Successful Placements", color: "text-purple-400" },
    { icon: TrendingUp, number: "85%", label: "Retention Rate", color: "text-orange-400" },
  ];

  const benefits = [
    "Pre-vetted BIM professionals with industry certifications",
    "Reduced hiring time by 70% with our talent matching system",
    "Flexible hiring models: Full-time, contract, or project-based",
    "30-day guarantee on all placements",
    "Ongoing support and performance monitoring",
    "Access to latest BIM software expertise",
  ];

  const cards = [
    {
      icon: PiggyBank,
      title: "No Training Cost & Time",
      subtitle: "after hiring",
      hoverTitle:
        "Our graduates are fully equipped with tools and workflows to contribute from day one.",
      hoverDescription:
        "Save time, resources, and energy spent on pre-job training, and elevate your project output",
    },
    {
      icon: Award,
      title: "1-4 years of experience",
      subtitle: "in 80% candidate pool",
      hoverTitle: "Connect with right Candidates for your projects.",
      hoverDescription:
        "Our pool consists of experienced professionals that are well-versed with industry norms",
    },
    {
      icon: CalendarPlus,
      title: "Hire in just",
      subtitle: "3 days",
      hoverTitle: "Simplify your hiring process",
      hoverDescription:
        "Get a talented professional in your office without any hassle. From screening to selection, experience a seamless and efficient journey",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm sm:text-base mb-2">
            Redefining Hiring in AEC.
          </p>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Skill over Degrees, Diversity in Expertise
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why is Elite BIM the preferred hiring partner for Global AEC Firms?
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              hoverTitle={card.hoverTitle}
              hoverDescription={card.hoverDescription}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Elite BIM for Hiring?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Hire?</h4>
              <p className="mb-6 text-blue-100">
                Join hundreds of companies that trust Elite BIM for their talent
                acquisition needs.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Start Hiring Today
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=800&fit=crop"
                alt="AEC Team Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Expert BIM Professionals
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our talent pool includes certified professionals specializing
                  in Revit, Navisworks, AutoCAD, and emerging BIM technologies.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    Revit
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Navisworks
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                    AutoCAD
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Avg. Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center max-w-4xl mx-auto mt-16">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Where zero-cost meets high-quality talent, skill-focused hiring, and
            streamlined recruitment – all in one innovative AEC partnership
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}
