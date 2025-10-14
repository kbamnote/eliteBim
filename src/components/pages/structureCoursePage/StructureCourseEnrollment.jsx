import React, { useState, useEffect } from 'react';
import { Check, Clock, Users, Shield, Star, CreditCard, Calendar, ArrowRight, Gift } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function StructureCourseEnrollment() {
  const [selectedPlan, setSelectedPlan] = useState('full');
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  // Modal state management
  const {
    isOpen,
    formData,
    agreedToTerms,
    status,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
    handleOverlayClick,
    setAgreedToTerms
  } = useCallbackModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const paymentPlans = [
    {
      id: 'full',
      name: 'Full Payment',
      originalPrice: '₹1,25,000',
      price: '₹99,000',
      savings: '₹26,000',
      features: [
        'Complete Structure BIM Course',
        'Lifetime access to materials',
        'Industry certification',
        'Job placement assistance',
        '1-on-1 mentorship sessions',
        'Portfolio development support'
      ],
      popular: true
    },
    {
      id: 'installment',
      name: '3-Month Installments',
      originalPrice: '₹1,25,000',
      price: '₹35,000',
      priceNote: 'per month for 3 months',
      totalPrice: '₹1,05,000',
      features: [
        'Complete Structure BIM Course',
        'Lifetime access to materials',
        'Industry certification',
        'Job placement assistance',
        '1-on-1 mentorship sessions',
        'Portfolio development support'
      ],
      popular: false
    }
  ];

  const nextBatch = {
    startDate: 'January 15, 2024',
    spotsLeft: 8,
    totalSpots: 25,
    progress: (17 / 25) * 100
  };

  const guarantees = [
    {
      icon: Shield,
      title: 'Job Placement Guarantee',
      description: 'Get placed within 6 months or get your money back'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Industry-standard curriculum with expert instructors'
    },
    {
      icon: Users,
      title: 'Lifetime Support',
      description: 'Access to alumni network and continuous learning resources'
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Spot in Elite BIM Structure
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join the next generation of structural BIM professionals. Limited seats available.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Payment Plans */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Choose Your Payment Plan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {paymentPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'border-blue-400 bg-white/15'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                      <div className="mb-2">
                        <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                      {plan.priceNote && (
                        <div className="text-blue-200 text-sm">{plan.priceNote}</div>
                      )}
                      {plan.totalPrice && (
                        <div className="text-blue-200 text-sm">Total: {plan.totalPrice}</div>
                      )}
                      {plan.savings && (
                        <div className="text-green-400 text-sm font-semibold">Save {plan.savings}</div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-blue-200">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`w-4 h-4 rounded-full border-2 mx-auto ${
                      selectedPlan === plan.id
                        ? 'bg-blue-400 border-blue-400'
                        : 'border-white/40'
                    }`}>
                      {selectedPlan === plan.id && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Early Bird Offer */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Gift className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white">Early Bird Special Offer!</h3>
                  <p className="text-orange-100">Limited time discount - Ends soon!</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-orange-100 text-sm">Days</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-orange-100 text-sm">Hours</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-orange-100 text-sm">Minutes</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-orange-100 text-sm">Seconds</div>
                </div>
              </div>
            </div>

            {/* Enrollment Actions */}
            <div className="space-y-4">
              <button 
                onClick={openModal}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center gap-3"
              >
                <CreditCard className="w-6 h-6" />
                Enroll Now - Secure Your Spot
                <ArrowRight className="w-6 h-6" />
              </button>
           
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Next Batch Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-400" />
                Next Batch Details
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-blue-200 text-sm">Batch Starts</div>
                  <div className="text-white font-semibold">{nextBatch.startDate}</div>
                </div>
                <div>
                  <div className="text-blue-200 text-sm mb-2">Seats Available</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{nextBatch.spotsLeft} spots left</span>
                    <span className="text-blue-200 text-sm">of {nextBatch.totalSpots}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${nextBatch.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-orange-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">Filling Fast!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Our Guarantees</h3>
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <guarantee.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{guarantee.title}</h4>
                      <p className="text-blue-200 text-sm">{guarantee.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Need Help Deciding?</h3>
              <p className="text-blue-200 text-sm mb-4">
                Speak with our enrollment counselor
              </p>
              <button 
                onClick={openModal}
                className="w-full bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isOpen}
        formData={formData}
        agreedToTerms={agreedToTerms}
        status={status}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        handleOverlayClick={handleOverlayClick}
        setAgreedToTerms={setAgreedToTerms}
      />
    </div>
  );
}