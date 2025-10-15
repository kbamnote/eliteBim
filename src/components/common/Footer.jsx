import React, { useState } from "react";
import { Mail, Instagram, Linkedin, Facebook, Youtube, Send, MapPin, Phone, Clock } from "lucide-react";
import logo from '../../assets/eliteLogo.jpg'
import brochurePdf from '../../assets/bim brochure.pdf';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleBrochureDownload = () => {
    const link = document.createElement('a');
    link.href = brochurePdf;
    link.download = 'Elite-BIM-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Elite BIM",
            "url": "https://elitebim.com",
            "logo": "https://elitebim.com/src/assets/eliteLogo.jpg",
            "sameAs": [
              "https://www.instagram.com/elitebim",
              "https://www.facebook.com/elitebim",
              "https://www.linkedin.com/company/elitebim",
              "https://www.youtube.com/elitebim"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            }
          }
        `}
      </script>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Company Info */}
        <div className="space-y-6 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Elite BIM Logo - Building Information Modeling Education" className="h-16 w-auto" />
            
          </div>
          
          <p className="text-purple-200 max-w-md">
            Empowering next-generation architects and engineers with industry-leading BIM certification courses in Building Information Modeling.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <p className="text-purple-200">1st Floor Mohota Complex, Above State Bank Of India, Katol Road, Chhaoni Rd, Nagpur, Maharashtra, 440013</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <p className="text-purple-200">+91 8855885807 /+91 9730893320</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-yellow-400" />
              <p className="text-purple-200">Mon-Fri: 10AM - 6PM</p>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com/elitebim" target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-all transform hover:scale-110" aria-label="Follow us on Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/elitebim" target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-all transform hover:scale-110" aria-label="Follow us on Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/elitebim" target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-all transform hover:scale-110" aria-label="Connect with us on LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/elitebim" target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-all transform hover:scale-110" aria-label="Subscribe to our YouTube channel">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-yellow-300 mb-6">Company</h3>
          <ul className="space-y-3">
            <li><a href="/" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span> About Elite BIM</a></li>
            <li><a href="/impact" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span> Our Impact</a></li>
            <li><a href="/hire" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span> Partner With Us</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-yellow-300 mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Home</a></li>
            <li><a href="/courses" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Our BIM Courses</a></li>
            <li><a href="/software" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Software Training</a></li>
            <li><a href="/career" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Career Support</a></li>
            <li><a href="/hire" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Hire BIM Professionals</a></li>
            <li><a href="/impact" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Our Impact</a></li>
            <li><a href="/events" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Events & Webinars</a></li>
            <li><a href="/past-events" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Past Events</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-yellow-300 mb-6">Our BIM Courses</h3>
          <ul className="space-y-3">
            <li><a href="/courses" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> Elite BIM Professional</a></li>
            <li><a href="/courses/structure" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> BIM for Structure</a></li>
            <li><a href="/courses/architecture" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> BIM for Architecture</a></li>
            <li><a href="/courses/mepf" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> BIM for MEPF</a></li>
            <li><a href="/software" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> Software Training</a></li>
            <li><a href="/courses" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> View All Courses</a></li>
          </ul>
        </div>

        {/* Support & Resources */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-yellow-300 mb-6">Support & Resources</h3>
          <ul className="space-y-3 mb-6">
            <li><a href="/career" className="text-purple-200 hover:text-yellow-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Career Guidance</a></li>
          </ul>
          
          <h4 className="text-lg font-bold text-yellow-300 mb-4">Join Our Newsletter</h4>
          <p className="text-purple-200 mb-4 text-sm">
            Stay updated with the latest BIM trends, course offerings, and industry insights in Building Information Modeling.
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
                aria-label="Email for newsletter subscription"
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
          
          <div className="mt-6 p-4 bg-purple-800/30 rounded-xl border border-purple-400/30 backdrop-blur-sm">
            <h4 className="font-bold text-yellow-300 mb-2 text-sm">Download Our Brochure</h4>
            <p className="text-purple-200 text-xs mb-3">
              Get detailed information about our BIM courses and career opportunities in Building Information Modeling.
            </p>
            <button 
              onClick={handleBrochureDownload}
              className="text-xs bg-white text-purple-900 px-3 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-purple-400/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300 px-6 lg:px-12">
        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <a href="/sitemap.xml" className="hover:text-yellow-300 transition-colors">Sitemap</a>
        </div>
        <p className="text-center md:text-right">
          © {new Date().getFullYear()} Elite BIM. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;