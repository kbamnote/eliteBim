import React, { useState } from "react";
import { X, Phone, Mail, MapPin, Calendar, User } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("callback");

  // Close modal when clicking outside content
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-400 text-white flex flex-col sm:flex-row justify-center items-center py-2 px-4 gap-2 sm:gap-4">
        <span className="flex items-center gap-2 font-medium text-sm sm:text-base">
          ⚡ Hurry! Last Chance for Scholarship - Enroll before 30th Sep ⚡
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="text-black font-semibold bg-white px-3 py-1 sm:px-4 sm:py-1 rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-105 animate-pulse-glow"
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
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-2xl w-full max-w-lg p-8 relative animate-zoom-in border border-purple-400/30">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
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

            {/* Tabs */}
            <div className="flex mb-6 bg-purple-800/50 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("callback")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "callback"
                    ? "bg-white text-purple-900"
                    : "text-purple-200 hover:text-white"
                }`}
              >
                Request Callback
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "contact"
                    ? "bg-white text-purple-900"
                    : "text-purple-200 hover:text-white"
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-purple-400/30 rounded-lg px-4 py-3 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-purple-400/30 rounded-lg px-4 py-3 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300"
                />
              </div>
              
              <div className="flex">
                <span className="px-4 py-3 border border-r-0 border-purple-400/30 rounded-l-lg bg-purple-800/30 text-purple-200 font-medium">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-purple-400/30 rounded-r-lg px-4 py-3 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-purple-400/30 rounded-lg px-4 py-3 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300"
              />

              <select className="w-full border border-purple-400/30 rounded-lg px-4 py-3 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300">
                <option value="">Select experience</option>
                <option value="fresher">Fresher</option>
                <option value="1-2">1-2 Years</option>
                <option value="3+">3+ Years</option>
              </select>

              <select className="w-full border border-purple-400/30 rounded-lg px-4 py-3 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300">
                <option value="">Select specialisation</option>
                <option value="architect">Architect</option>
                <option value="civil">Civil Engineer</option>
                <option value="mep">MEP Engineer</option>
                <option value="interior">Interior Designer</option>
                <option value="other">Other</option>
              </select>

              {activeTab === "contact" && (
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-purple-400/30 rounded-lg px-4 py-3 bg-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-300"
                ></textarea>
              )}

              <label className="flex items-start text-sm text-purple-200">
                <input
                  type="checkbox"
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
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 py-3 rounded-lg shadow-lg hover:from-yellow-300 hover:to-pink-300 transition-all font-bold transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {activeTab === "callback" ? "Request a Callback" : "Send Message"}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-purple-400/30">
              <h3 className="text-white font-bold mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="text-purple-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span className="text-purple-200">info@elitebim.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span className="text-purple-200">123 Innovation Street, Tech City</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span className="text-purple-200">Mon-Fri: 9AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;