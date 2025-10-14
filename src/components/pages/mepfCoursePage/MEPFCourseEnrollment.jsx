import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, CheckCircle, Star, CreditCard, Shield, Award, Zap } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function MEPFCourseEnrollment() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30
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
      type: "Full Payment",
      originalPrice: "₹1,25,000",
      discountedPrice: "₹95,000",
      savings: "₹30,000",
      features: [
        "Complete MEPF BIM Certification",
        "6 months of intensive training",
        "1-on-1 mentorship sessions",
        "Real MEP project portfolio",
        "Lifetime course access",
        "Job placement assistance",
        "Industry networking events"
      ],
      popular: true
    },
    {
      type: "Installment Plan",
      originalPrice: "₹1,25,000",
      discountedPrice: "₹1,05,000",
      monthlyPayment: "₹17,500",
      installments: "6 months",
      features: [
        "Complete MEPF BIM Certification",
        "6 months of intensive training",
        "1-on-1 mentorship sessions",
        "Real MEP project portfolio",
        "Lifetime course access",
        "Job placement assistance"
      ],
      popular: false
    }
  ];

  const nextBatch = {
    startDate: "March 15, 2024",
    duration: "6 months",
    format: "Hybrid (Online + Weekend Labs)",
    seats: 25,
    enrolled: 18,
    progress: 72
  };

  const guarantees = [
    {
      icon: Award,
      title: "Job Placement Guarantee",
      description: "Get placed within 6 months or get 100% refund"
    },
    {
      icon: Shield,
      title: "Money Back Guarantee",
      description: "30-day money back guarantee if not satisfied"
    },
    {
      icon: Star,
      title: "Certification Guarantee",
      description: "Industry-recognized MEPF BIM certification"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Enroll in MEPF BIM Program
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Join the next batch of MEPF professionals and transform your career with 
            industry-leading BIM expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Plans */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
            {paymentPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:bg-white/15 ${
                  plan.popular ? 'border-yellow-400 ring-2 ring-yellow-400/50' : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                    🔥 Most Popular - Save ₹30,000
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.type}</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-white">{plan.discountedPrice}</span>
                      <span className="text-lg text-orange-300 line-through">{plan.originalPrice}</span>
                      {plan.savings && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Save {plan.savings}
                        </span>
                      )}
                    </div>
                    {plan.monthlyPayment && (
                      <p className="text-orange-200 mt-2">
                        Or {plan.monthlyPayment}/month for {plan.installments}
                      </p>
                    )}
                  </div>
                  
                  <button className={`mt-4 lg:mt-0 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500' 
                      : 'bg-white text-orange-600 hover:bg-orange-50'
                  }`}>
                    Choose {plan.type}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-orange-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            {/* Next Batch Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-400" />
                Next Batch Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-200">Start Date</span>
                    <span className="text-white font-semibold">{nextBatch.startDate}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-200">Duration</span>
                    <span className="text-white font-semibold">{nextBatch.duration}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-orange-200">Format</span>
                    <span className="text-white font-semibold text-sm">{nextBatch.format}</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-200">Seats Available</span>
                    <span className="text-white font-semibold">{nextBatch.seats - nextBatch.enrolled}/{nextBatch.seats}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${nextBatch.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-orange-300 text-sm">{nextBatch.progress}% seats filled</p>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 text-center">
                Early Bird Offer Ends In:
              </h3>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-orange-200 text-xs">Days</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-orange-200 text-xs">Hours</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-orange-200 text-xs">Mins</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-orange-200 text-xs">Secs</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <button 
                onClick={openModal}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Enroll Now - Save ₹30,000
              </button>
           
              <button 
                onClick={openModal}
                className="w-full bg-white/10 text-white py-3 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Guarantees</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{guarantee.title}</h4>
                <p className="text-orange-200 text-sm">{guarantee.description}</p>
              </div>
            ))}
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