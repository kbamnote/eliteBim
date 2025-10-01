import React from 'react';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import FloatingChat from '../common/FloatingChat';
import ScrollToTop from '../common/ScrollToTop';
import CookieConsent from '../common/CookieConsent';

const MainLayout = ({ children, showHeader = true, showNavbar = true, showFooter = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {showHeader && <Header />}
      {showNavbar && <Navbar />}
      <main className="relative">
        {children}
      </main>
      {showFooter && <Footer />}
      <FloatingChat />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default MainLayout;