import React from 'react'
import backgroundGrad from '../../../assets/background.webp'
import rightImg from '../../../assets/ban1.webp'
import marqueeImg1 from '../../../assets/assystem-stup.svg'
import marqueeImg2 from '../../../assets/BDP.svg'
import marqueeImg3 from '../../../assets/bim-engineer-white.svg'
import marqueeImg4 from '../../../assets/burns-white.svg'
import marqueeImg5 from '../../../assets/creative-group-llp.svg'
import marqueeImg6 from '../../../assets/dar.svg'
import marqueeImg7 from '../../../assets/john-white.svg'
import marqueeImg8 from '../../../assets/khatib-alami.svg'
import marqueeImg9 from '../../../assets/latinem-white.svg'
import marqueeImg10 from '../../../assets/neilsoft-white.svg'
import marqueeImg11 from '../../../assets/rsp.svg'
import marqueeImg12 from '../../../assets/TCE.svg'
import marqueeImg13 from '../../../assets/techture-white.svg'
import marqueeImg14 from '../../../assets/total-environment.svg'

const HireHeroComp = () => {
  const marqueeImages = [
    marqueeImg1, marqueeImg2, marqueeImg3, marqueeImg4, marqueeImg5,
    marqueeImg6, marqueeImg7, marqueeImg8, marqueeImg9, marqueeImg10,
    marqueeImg11, marqueeImg12, marqueeImg13, marqueeImg14
  ]

  return (
    <div className="relative bg-blue-600 overflow-hidden">
      {/* Background gradient image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={backgroundGrad} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            {/* Top tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium">
              <span className="uppercase tracking-wide">TOP TALENT</span>
              <span className="text-white/60">✦</span>
              <span className="uppercase tracking-wide">HASSLE-FREE</span>
              <span className="text-white/60">✦</span>
              <span className="uppercase tracking-wide">ZERO COST</span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hire BIM Professionals Superfast!
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/90 max-w-xl">
              Build your workforce with future-ready candidates equipped with the latest tools and workflows
            </p>

            {/* Email input and button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-full px-6 py-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  type="email" 
                  placeholder="Enter your Email"
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/70"
                />
              </div>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors">
                Start Hiring
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <img 
              src={rightImg} 
              alt="BIM Professionals" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Marquee section */}
        <div className="mt-16 lg:mt-24">
          {/* Separator line */}
          <div className="w-full h-px bg-white/20 mb-8"></div>

          {/* Text */}
          <p className="text-center text-white text-sm sm:text-base mb-8">
            Join 300+ companies already hiring from us!
          </p>

          {/* Marquee container */}
          <marquee behavior="scroll" direction="right" scrollamount="5" className="flex items-center">
            {marqueeImages.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Company ${index + 1}`}
                className="h-5 sm:h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity inline-block mx-8 lg:mx-12"
              />
            ))}
          </marquee>
        </div>
      </div>
    </div>
  )
}

export default HireHeroComp