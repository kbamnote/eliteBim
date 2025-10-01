import React from 'react';
import { Handshake, Users, Rocket } from 'lucide-react';

const HiringWithEliteComp = () => {
  const steps = [
    {
      icon: Handshake,
      title: "1. Connect with our team",
      description: "Share your contact details, we will call you within 24 hrs.",
    },
    {
      icon: Users,
      title: "2. Get onboarded in 24 hrs",
      description: "If you like what you see, we will set you up in no time.",
    },
    {
      icon: Rocket,
      title: "3. Start hiring talent",
      description: "Save your time by accessing right fit candidates for your office.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm sm:text-md font-bold mb-2">
            Hiring with EliteBIM
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Partner with us in{' '}
            <span className="text-purple-600">3 easy steps</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Progress Line (between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300"></div>
                )}

                {/* Step Content */}
                <div className="relative flex flex-col items-center text-center z-10">
                  {/* Icon */}
                  <div className="mb-6 p-4 bg-purple-100 rounded-full">
                    <IconComponent className="w-8 h-8 text-purple-600" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HiringWithEliteComp;
