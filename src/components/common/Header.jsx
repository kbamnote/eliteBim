import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal when clicking outside content
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-400 text-white flex justify-center items-center py-2 px-4">
        <span className="flex items-center gap-2 font-medium">
          ⚡ Hurry! Last Chance for Scholarship - Enroll before 30th Sep ⚡
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="ml-4 text-black font-semibold bg-white px-4 py-1 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Apply Now ↗
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          id="overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-opacity-50"
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative animate-fadeIn scale-95 hover:scale-100 transition-transform duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
            >
              ✖
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
              Request a Callback
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Know how you can accelerate your career 🚀
            </p>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div className="flex">
                <span className="px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-100 text-gray-700 font-medium">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-r-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400">
                <option>Select experience</option>
                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>3+ Years</option>
              </select>

              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400">
                <option>Select specialisation</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Full Stack</option>
              </select>

              <label className="flex items-start text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 mt-1 accent-purple-500"
                />
                I agree to the{" "}
                <a href="#" className="text-blue-500 ml-1 underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline ml-1">
                  Privacy Policy
                </a>
                , and consent to be contacted by Email, Call, WhatsApp, or SMS
              </label>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg shadow-lg hover:opacity-90 transition"
              >
                Request a Callback
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
