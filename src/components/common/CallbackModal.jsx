import React from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

const CallbackModal = ({ 
  isOpen, 
  formData, 
  agreedToTerms, 
  status, 
  handleChange, 
  handleSubmit, 
  closeModal, 
  handleOverlayClick, 
  setAgreedToTerms 
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/50"
    >
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-2xl w-full max-w-lg p-8 relative animate-zoom-in border border-purple-400/30">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-purple-200 hover:text-white text-2xl transition-colors"
        >
          <X size={24} />
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold mb-2 text-center text-white">
          Request a Callback
        </h2>
        <p className="text-purple-200 text-center mb-6">
          Know how you can accelerate your career 🚀
        </p>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          />
          
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          />
          
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          >
            <option value="" className="text-gray-900">Select Experience Level</option>
            <option value="0-1 years" className="text-gray-900">0-1 years</option>
            <option value="1-3 years" className="text-gray-900">1-3 years</option>
            <option value="3-5 years" className="text-gray-900">3-5 years</option>
            <option value="5+ years" className="text-gray-900">5+ years</option>
          </select>
          
          <select
            name="specialisation"
            value={formData.specialisation}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          >
            <option value="" className="text-gray-900">Select Specialisation</option>
            <option value="Architecture" className="text-gray-900">Architecture</option>
            <option value="Structural Engineering" className="text-gray-900">Structural Engineering</option>
            <option value="MEP Engineering" className="text-gray-900">MEP Engineering</option>
            <option value="Civil Engineering" className="text-gray-900">Civil Engineering</option>
            <option value="Project Management" className="text-gray-900">Project Management</option>
            <option value="Other" className="text-gray-900">Other</option>
          </select>

          {/* Status Messages */}
          {status.success && (
            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-300 font-semibold">Success!</p>
                <p className="text-green-200 text-sm">Your request has been submitted. We'll contact you soon!</p>
              </div>
            </div>
          )}

          {status.error && (
            <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-300 font-semibold">Error</p>
                <p className="text-red-200 text-sm">{status.error}</p>
              </div>
            </div>
          )}

          {/* Terms Checkbox */}
          <label className="flex items-start gap-3 text-sm text-purple-200 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mr-2 mt-1 accent-purple-500"
            />
            I agree to the{" "}
            <a href="#" className="text-yellow-300 ml-1 underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-yellow-300 underline ml-1">
              Privacy Policy
            </a>
            , and consent to be contacted by Email, Call, WhatsApp, or SMS
          </label>

          <button
            onClick={handleSubmit}
            disabled={status.loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 py-3 rounded-lg shadow-lg hover:from-yellow-300 hover:to-pink-300 transition-all font-bold transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.loading ? (
              <>
                <div className="w-5 h-5 border-2 border-purple-900 border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              "Request a Callback"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallbackModal;