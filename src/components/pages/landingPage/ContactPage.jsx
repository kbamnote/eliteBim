import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { addDetail } from '../../utils/Api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    experience: '',
    specialisation: ''
  });

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
    console.log(formData);
    
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
        specialisation: ''
      });
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold mb-3 text-sm tracking-wider uppercase">
            Get In Touch
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Start Your Learning Journey
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to transform your career? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-2">Get in touch via email</p>
              <a href="mailto:info@elitebim.com" className="text-purple-600 font-semibold hover:underline">
                info@elitebim.com
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+911234567890" className="text-purple-600 font-semibold hover:underline">
                +91 123 456 7890
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                123 BIM Street, Tech Park<br />
                Nagpur, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Specialisation *
                  </label>
                  <select
                    name="specialisation"
                    value={formData.specialisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select your specialisation</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Structural Engineering">Structural Engineering</option>
                    <option value="MEP Engineering">MEP Engineering</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Computational Design">Computational Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Experience *
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your experience (e.g., 2 years in BIM modeling)"
                  />
                </div>

                {status.success && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-semibold">Success!</p>
                      <p className="text-green-700 text-sm">Your message has been sent. We'll get back to you soon!</p>
                    </div>
                  </div>
                )}

                {status.error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-semibold">Error</p>
                      <p className="text-red-700 text-sm">{status.error}</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status.loading}
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {status.loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}