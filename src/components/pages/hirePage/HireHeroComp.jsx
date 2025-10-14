import React, { useState, useEffect } from 'react'
import { ArrowRight, Briefcase, Users, TrendingUp, Target } from 'lucide-react'
import { useCallbackModal } from '../../../hooks/useCallbackModal'
import CallbackModal from '../../common/CallbackModal'

export default function HireHeroComp() {
  const [currentStat, setCurrentStat] = useState(0)

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

  const stats = [
    { icon: Users, label: 'Skilled Professionals', value: '2400+' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%' },
    { icon: Target, label: 'Companies Served', value: '500+' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const marqueeImages = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop&crop=center',
  ]

  return (
    <>
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        {/* Background gradient image */}
        {/* <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=center" alt="" className="w-full h-full object-cover" />
        </div> */}

        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hire
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                    Elite BIM
                  </span>
                  <br />
                  Talent
                </h1>
                <p className="text-yellow-200 text-lg lg:text-xl max-w-xl mt-4">
                  Connect with industry-ready BIM professionals. Our certified graduates are equipped with cutting-edge skills and real-world experience to drive your projects forward.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openModal}
                  className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
                >
                  Browse Talent
                  <ArrowRight className="w-5 h-5" />
                </button>
               
              </div>

              {/* Stats Section */}
              <div className="pt-8 grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                    <div className="text-yellow-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=800&fit=crop&crop=center" alt="BIM Professionals" className="rounded-3xl shadow-2xl w-full h-auto" />

              {/* Floating Performance Card */}
              <div className="absolute bottom-8 -left-4 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-5 shadow-2xl border border-purple-400/30 backdrop-blur-sm animate-float">
                <div className="text-lg font-semibold text-white mb-3">Hiring Success</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {React.createElement(stats[currentStat].icon, { className: 'w-5 h-5 text-purple-300' })}
                    <span className="text-purple-200 text-sm">{stats[currentStat].label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{stats[currentStat].value}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee section */}
          {/* <div className="mt-16 lg:mt-24">
            <div className="w-full h-px bg-white/20 mb-8"></div>
            <p className="text-center text-white text-sm sm:text-base mb-8">
              Join 300+ companies already hiring from us!
            </p>
            <marquee behavior="scroll" direction="right" scrollamount="5" className="flex items-center">
              {marqueeImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Company ${index + 1}`}
                  className="h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity inline-block mx-8 lg:mx-12"
                />
              ))}
            </marquee>
          </div> */}
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
    </>
  )
}
