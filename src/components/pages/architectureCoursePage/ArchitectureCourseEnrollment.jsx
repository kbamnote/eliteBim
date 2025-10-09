import React, { useState } from 'react';
import { CheckCircle, Clock, Users, Award, CreditCard, Calendar, Phone } from 'lucide-react';

export default function ArchitectureCourseEnrollment() {
  const [selectedPlan, setSelectedPlan] = useState('full');

  const plans = [
    {
      id: 'full',
      name: 'Full Payment',
      price: '$2,297',
      originalPrice: '$3,097',
      savings: 'Save $800',
      description: 'One-time payment with maximum savings',
      features: [
        'Complete 6-month architecture program',
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
      price: '$399',
      period: '/month × 6 months',
      description: 'Spread the cost over the course duration',
      features: [
        'Complete 6-month architecture program',
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
    startDate: 'November 15, 2025',
    spotsLeft: 8,
    totalSpots: 35,
    earlyBirdDeadline: 'November 1, 2025'
  };

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Spot in Architecture BIM
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join our next architecture BIM cohort and transform your design career. Limited seats available with early bird pricing.
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
                    <span className="bg-gradient-to-r from-yellow-400 to-blue-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold">
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
                      ? 'bg-blue-600 border-blue-600' 
                      : 'border-gray-300'
                  } flex items-center justify-center`}>
                    {selectedPlan === plan.id && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-500 line-through">{plan.originalPrice}</span>
                      <span className="text-blue-600 font-semibold">{plan.savings}</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enrollment Info */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            {/* Next Batch Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-4">Next Batch Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100">Starts: {nextBatchInfo.startDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100">
                    {nextBatchInfo.spotsLeft} of {nextBatchInfo.totalSpots} spots remaining
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-300 font-semibold">
                    Early bird pricing until {nextBatchInfo.earlyBirdDeadline}
                  </span>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-blue-200 mb-2">
                  <span>Enrollment Progress</span>
                  <span>{Math.round(((nextBatchInfo.totalSpots - nextBatchInfo.spotsLeft) / nextBatchInfo.totalSpots) * 100)}% filled</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                    style={{ width: `${((nextBatchInfo.totalSpots - nextBatchInfo.spotsLeft) / nextBatchInfo.totalSpots) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Enrollment Actions */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-blue-400 text-blue-900 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-blue-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                <CreditCard className="w-6 h-6" />
                Enroll Now - {plans.find(p => p.id === selectedPlan)?.price}
              </button>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule a Call with Advisor
              </button>
            </div>

            {/* Guarantees */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <h5 className="font-bold text-white mb-4">Our Guarantees</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100">100% Job Placement Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100">30-Day Money Back Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100">Lifetime Community Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}