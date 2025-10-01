import React, { useState } from "react";
import { Mail, Instagram, Linkedin, Facebook, Youtube, Send, MapPin, Phone, Clock } from "lucide-react";
import logo from '../../assets/1.jpg'

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white pt-16 pb-6 border-t border-purple-400/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Elite BIM Logo" className="h-16 w-auto" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
              Elite BIM
            </span>
          </div>
          
          <p className="text-purple-200 max-w-md">
            Empowering next-generation architects and engineers with industry-leading BIM certification courses.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <p className="text-purple-200">123 Innovation Street, Tech City, TC 10001</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <p className="text-purple-200">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-yellow-400" />
              <p className="text-purple-200">Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-all transform hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-all transform hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-all transform hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-all transform hover:scale-110">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-yellow-300 mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> About Us</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Our Courses</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Career Support</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Success Stories</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Events & Webinars</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Blog</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-yellow-300 mb-6">Our Courses</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> BIM Professional for Architects</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> BIM for Civil Engineers</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> MEP Engineering with BIM</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> Computational Design</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> Advanced Interior Design</a></li>
            <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> All Courses</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-yellow-300 mb-6">Join Our Newsletter</h3>
          <p className="text-purple-200 mb-4">
            Stay updated with the latest BIM trends, course offerings, and industry insights.
          </p>
          
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-3.5 text-purple-300" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-purple-800/50 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 font-bold py-3 rounded-lg hover:from-yellow-300 hover:to-pink-300 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
            >
              {subscribed ? (
                <>
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
          
          {subscribed && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-400/30 rounded-lg text-green-300 text-sm animate-fade-in-up">
              Thank you for subscribing! Check your email for confirmation.
            </div>
          )}
          
          <div className="mt-8 p-4 bg-purple-800/30 rounded-xl border border-purple-400/30 backdrop-blur-sm">
            <h4 className="font-bold text-yellow-300 mb-2">Download Our Brochure</h4>
            <p className="text-purple-200 text-sm mb-3">
              Get detailed information about our courses and career opportunities.
            </p>
            <button className="text-sm bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-purple-400/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300 px-6 lg:px-12">
        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Sitemap</a>
        </div>
        <p className="text-center md:text-right">
          © {new Date().getFullYear()} Elite BIM. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;