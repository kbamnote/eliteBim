const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-8">
              <p className="text-sm mb-4 opacity-90">
                Join thousands of people who organise work and life with Novatr.
              </p>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering next-gen{' '}
              <span className="text-yellow-400">architects</span> and{' '}
              <span className="text-yellow-400">engineers</span> towards career success
            </h1>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Online certification courses that set you up for success. Gain industry-relevant skills with cohort-based learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Explore Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Request a Call Back
              </button>
            </div>

            {/* Company Logos */}
            <div className="mb-8">
              <p className="text-sm mb-4 opacity-75">Learn from experts working at</p>
              <div className="flex flex-wrap items-center gap-6 opacity-80">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded text-sm">RSP</div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded text-sm">POPULOUS</div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded text-sm">UNS</div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded text-sm">BENOY</div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded text-sm">AECOM</div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded text-sm">HEATHER</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-full h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-sm">Gain industry-relevant skills with cohort-based learning.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero