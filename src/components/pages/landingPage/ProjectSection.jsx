import React from 'react';
import { Globe, Gamepad2 } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function ProjectsSection() {
  // Modal functionality
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

  return (
    <div className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-12">
            {/* Left Content */}
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-700 text-lg font-medium">Practical Training</span>
                  <div className="h-px bg-gray-800 flex-grow max-w-xs"></div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Get Ahead with <span className="text-purple-600">Real-World Projects</span>
                </h2>
                
                <p className="text-gray-600 text-lg">
                  How do you learn to build a building? By building a building! Our courses include live projects that significantly enhance your portfolio.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-8">
                {/* International Exposure */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      International Exposure
                    </h3>
                    <p className="text-gray-600">
                      Our live projects are curated in partnership with leading AEC firms based in the US, Hong Kong and Portugal.
                    </p>
                  </div>
                </div>

                {/* Gamified Experience */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Gamepad2 className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Gamified Experience
                    </h3>
                    <p className="text-gray-600">
                      Take instructions from a client, pitch innovative solutions, and see your project unfold – all in a virtual simulation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Main 3D City Illustration */}
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop" 
                  alt="3D City Model"
                  className="w-full max-w-lg rounded-2xl opacity-90"
                />
                
                {/* Floating Labels */}
                <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-300 rounded"></div>
                  </div>
                  <span className="font-semibold text-blue-600">My Project</span>
                </div>
                
                <div className="absolute bottom-16 right-12 bg-white rounded-lg shadow-lg px-4 py-2">
                  <div className="font-semibold text-gray-800 mb-1">Aditya</div>
                  <div className="text-xs text-gray-500">Modeling</div>
                  <div className="text-xs text-gray-500">Design Analysis</div>
                  <div className="text-xs text-gray-500">Work Ethic</div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-8 w-12 h-12 bg-purple-500 rounded-lg opacity-70 transform rotate-12"></div>
                <div className="absolute bottom-1/4 left-4 w-12 h-12 bg-teal-500 rounded-lg opacity-70 transform -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 bg-purple-900 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-white text-lg">
              Learn more about the gamified experience in Elite BIM's live projects.
            </p>
            <button 
              onClick={openModal}
              className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Click to learn more
            </button>
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