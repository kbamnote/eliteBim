import React from "react";
import { Mail, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import logo from '../../assets/1.jpg'


const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-16 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Illustration */}
          <div className="flex justify-start">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4903/4903482.png" // placeholder illustration
              alt="Illustration"
              className="w-48"
            />
          </div>

          <h2 className="text-2xl font-bold text-purple-700">Dare to Disrupt</h2>

          {/* Logo */}
          <div>
            <img
              src={logo} // placeholder logo
              alt="Novatr"
              className="h-28"
            />
            <p className="mt-2 text-gray-600 max-w-md">
              Join thousands of people who are taking AEC by storm with Novatr.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-purple-600">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-purple-700">Join our newsletter</h3>
            <p className="text-gray-600 mt-2">
              We'll send you a nice letter once per month. No spam.
            </p>
            <form className="mt-4 flex max-w-md">
              <div className="relative flex-grow">
                <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-400 text-white px-6 rounded-r-lg hover:bg-purple-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">About Us</a></li>
                <li><a href="#" className="hover:text-purple-600">BIM Professional Course for Architects V2.0</a></li>
                <li><a href="#" className="hover:text-purple-600">Master Computational Design Course</a></li>
                <li><a href="#" className="hover:text-purple-600">BIM Professional Course For Civil Engineers</a></li>
                <li><a href="#" className="hover:text-purple-600">Advanced Interior Design with AI</a></li>
                <li><a href="#" className="hover:text-purple-600">BIM Professional Course for MEP Engineers</a></li>
                <li><a href="#" className="hover:text-purple-600">Become a Mentor</a></li>
                <li><a href="#" className="hover:text-purple-600">Hiring Partners</a></li>
                <li><a href="#" className="hover:text-purple-600">Careers at Novatr</a></li>
                <li><a href="#" className="hover:text-purple-600">Media Room</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                Resources
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600">Events & Webinars</a></li>
                <li><a href="#" className="hover:text-purple-600">Our Impact</a></li>
                <li><a href="#" className="hover:text-purple-600">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6 lg:px-12">
        <div className="flex gap-4">
          <a href="#" className="hover:text-purple-600">Privacy Policy</a>
          <a href="#" className="hover:text-purple-600">Terms of Use</a>
        </div>
        <p className="mt-4 md:mt-0">
          ©2023 Oneistox India Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
