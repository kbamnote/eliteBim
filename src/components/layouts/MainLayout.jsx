import React from 'react';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import FloatingChat from '../common/FloatingChat';
import ScrollToTop from '../common/ScrollToTop';

const MainLayout = ({ children, showHeader = true, showNavbar = true, showFooter = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {showHeader && <Header />}
      {showNavbar && <Navbar />}
      <main className="relative pt-20 sm:pt-12">
        {/* Add extra padding when header is shown to account for the fixed header banner */}
        <div className={showHeader ? "pt-12" : ""}>
          {children}
        </div>
      </main>
      {showFooter && <Footer />}
      <FloatingChat />
      <ScrollToTop />
     
    </div>
  );
};

export default MainLayout;