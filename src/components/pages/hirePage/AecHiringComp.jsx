import React, { useState } from "react";
import { PiggyBank, Award, CalendarPlus } from "lucide-react";

const Card = ({
  icon: Icon,
  title,
  subtitle,
  hoverTitle,
  hoverDescription,
}) => {
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

      {/* Hover Content with Bottom-to-Top Animation */}
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
      hoverTitle: "Simplify your hiring process.s",
      hoverDescription:
        "Get a talented professional in your office without any hassle. From screening to selection , experience a seamless and efficient journey",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm sm:text-base mb-2">
            Redefining Hiring in AEC.
          </p>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Skill over Degrees, Diversity in Expertise
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 leading-tight px-4">
            Why is Elite-Bim the preferred hiring partner for Global AEC Firms?
          </h1>
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

        {/* Footer Text */}
        <div className="text-center max-w-4xl mx-auto">
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
