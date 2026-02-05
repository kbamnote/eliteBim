import React, { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { addDetail } from '../utils/Api';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    experience: '',
    specialisation: '',
    productCompany: 'Elite-BIM'
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please agree to the Terms of Use and Privacy Policy.'
      });
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phoneNo || !formData.experience || !formData.specialisation) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please fill in all required fields.'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      await addDetail(formData);
      
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        fullName: '',
        email: '',
        phoneNo: '',
        experience: '',
        specialisation: '',
        productCompany: 'Elite-BIM'
      });
      setAgreedToTerms(false);
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Header Banner */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-400 text-white flex flex-col sm:flex-row justify-center items-center py-2 px-2 sm:px-4 gap-1.5 sm:gap-4 z-50 mobile-text-xs mobile-py-1.5 mobile-px-2">
        <span className="flex items-center gap-2 font-medium text-xs sm:text-sm md:text-base text-center mobile-text-xs">
          ⚡ Hurry! Last Chance for Scholarship - Enroll before 30th Sep ⚡
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="text-black font-semibold bg-white px-2.5 py-1.5 sm:px-4 sm:py-1 rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-105 animate-pulse-glow whitespace-nowrap mobile-text-xs mobile-px-2 mobile-py-1"
        >
          Apply Now ↗
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          id="overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/50"
        >
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-2xl w-full max-w-lg p-4 sm:p-8 relative animate-zoom-in border border-purple-400/30 mobile-mx-4 mobile-p-4 mobile-max-w-xs">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-purple-200 hover:text-white text-2xl transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Title */}
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center text-white mobile-text-lg">
              Request a Callback
            </h2>
            <p className="text-purple-200 text-center mb-6 text-sm sm:text-base mobile-text-sm">
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
                className="w-full border border-purple-400/30 rounded-lg px-3 py-2.5 sm:px-4 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300 mobile-text-sm mobile-px-2.5 mobile-py-2"
              />
              
              <div className="flex">
                <span className="px-2.5 py-2.5 sm:px-4 border border-r-0 border-purple-400/30 rounded-l-lg bg-purple-800/30 text-purple-200 font-medium text-sm mobile-text-xs mobile-px-2 mobile-py-2">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-purple-400/30 rounded-r-lg px-3 py-2.5 sm:px-4 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300 mobile-text-sm mobile-px-2.5 mobile-py-2"
                />
              </div>
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-purple-400/30 rounded-lg px-3 py-2.5 sm:px-4 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300 mobile-text-sm mobile-px-2.5 mobile-py-2"
              />

              <select 
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full border border-purple-400/30 rounded-lg px-3 py-2.5 sm:px-4 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 mobile-text-sm mobile-px-2.5 mobile-py-2"
              >
                <option value="">Select experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1-2 Years">1-2 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>

              <select 
                name="specialisation"
                value={formData.specialisation}
                onChange={handleChange}
                className="w-full border border-purple-400/30 rounded-lg px-3 py-2.5 sm:px-4 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 mobile-text-sm mobile-px-2.5 mobile-py-2"
              >
                <option value="">Select specialisation</option>
                <option value="Architecture">Architecture</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Structural Engineering">Structural Engineering</option>
                <option value="MEP Engineering">MEP Engineering</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Computational Design">Computational Design</option>
                <option value="Other">Other</option>
              </select>

              {status.success && (
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-300 font-semibold">Success!</p>
                    <p className="text-green-200 text-sm">We'll call you back soon!</p>
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

              <label className="flex items-start text-xs sm:text-sm text-purple-200">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mr-2 mt-1 accent-purple-500 touch-target"
                />
                <span className="flex-1">
                  I agree to the{" "}
                  <a href="#" className="text-yellow-300 ml-1 underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-yellow-300 underline ml-1">
                    Privacy Policy
                  </a>
                  , and consent to be contacted by Email, Call, WhatsApp, or SMS
                </span>
              </label>

              <button
                onClick={handleSubmit}
                disabled={status.loading}
                className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 py-2.5 rounded-lg shadow-lg hover:from-yellow-300 hover:to-pink-300 transition-all font-bold transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed touch-target-large"
              >
                {status.loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-purple-900 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm">Sending...</span>
                  </>
                ) : (
                  "Request a Callback"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;