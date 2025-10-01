import React, { useState } from 'react';
import { CheckCircle, Clock, Users, Award, CreditCard, Calendar, Phone } from 'lucide-react';

export default function CourseEnrollment() {
  const [selectedPlan, setSelectedPlan] = useState('full');

  const plans = [
    {
      id: 'full',
      name: 'Full Payment',
      price: '$2,997',
      originalPrice: '$3,997',
      savings: 'Save $1,000',
      description: 'One-time payment with maximum savings',
      features: [
        'Complete 7-month program',
        'All course materials included',
        'Lifetime community access',
        'Job placement guarantee',
        'Personal mentorship',
        'Certification upon completion'
      ],
      popular: true
    },
    {
      id: 'installment',
      name: 'Monthly Installments',
      price: '$499',
      period: '/month × 7 months',
      description: 'Spread the cost over the course duration',
      features: [
        'Complete 7-month program',
        'All course materials included',
        'Lifetime community access',
        'Job placement guarantee',
        'Personal mentorship',
        'Certification upon completion'
      ],
      popular: false
    }
  ];

  const nextBatchInfo = {
    startDate: 'November 1, 2025',
    spotsLeft: 15,
    totalSpots: 50,
    earlyBirdDeadline: 'October 15, 2025'
  };

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Spot Today
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Join our next cohort and transform your career. Limited seats available with early bird pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Plans */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6">Choose Your Payment Plan</h3>
            
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                  selectedPlan === plan.id 
                    ? 'ring-4 ring-yellow-400 transform scale-105' 
                    : 'hover:shadow-xl'
                } ${plan.popular ? 'border-4 border-yellow-400' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    selectedPlan === plan.id 
                      ? 'bg-purple-600 border-purple-600' 
                      : 'border-gray-300'
                  } flex items-center justify-center`}>
                    {selectedPlan === plan.id && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-500 line-through">{plan.originalPrice}</span>
                      <span className="text-green-600 font-semibold">{plan.savings}</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enrollment Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-fade-in-up">
            {/* Batch Info */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Next Batch Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Starts: {nextBatchInfo.startDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    {nextBatchInfo.spotsLeft} of {nextBatchInfo.totalSpots} spots remaining
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-600 font-semibold">
                    Early bird pricing until {nextBatchInfo.earlyBirdDeadline}
                  </span>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Enrollment Progress</span>
                  <span>{Math.round(((nextBatchInfo.totalSpots - nextBatchInfo.spotsLeft) / nextBatchInfo.totalSpots) * 100)}% filled</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                    style={{ width: `${((nextBatchInfo.totalSpots - nextBatchInfo.spotsLeft) / nextBatchInfo.totalSpots) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Enrollment Actions */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-pink-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                <CreditCard className="w-6 h-6" />
                Enroll Now - {plans.find(p => p.id === selectedPlan)?.price}
              </button>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule a Call with Advisor
              </button>
            </div>

            {/* Guarantees */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h5 className="font-bold text-gray-900 mb-4">Our Guarantees</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm">95% job placement guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm">14-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm">Lifetime access to course updates</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm mb-2">Have questions? We're here to help!</p>
              <p className="text-purple-600 font-semibold">📞 +1 (555) 123-4567</p>
              <p className="text-purple-600 font-semibold">✉️ hello@elitebim.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}