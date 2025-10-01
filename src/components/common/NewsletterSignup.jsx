import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const NewsletterSignup = ({ title = "Stay Updated", subtitle = "Subscribe to our newsletter for the latest updates and offers." }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setEmail("");
      setLoading(false);
      
      // Reset after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8 shadow-2xl border border-purple-400/30 backdrop-blur-sm">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-yellow-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-purple-200">{subtitle}</p>
      </div>
      
      {subscribed ? (
        <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-center animate-fade-in-up">
          <p className="text-green-300 font-medium">
            Thank you for subscribing! Please check your email to confirm.
          </p>
        </div>
      ) : (
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
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 font-bold py-3 rounded-lg hover:from-yellow-300 hover:to-pink-300 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-purple-900 border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
      
      <p className="text-purple-300 text-xs mt-4 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;