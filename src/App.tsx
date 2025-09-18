import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ServicesSection from './components/ServicesSection';
import PackagesSection from './components/PackagesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WebDesignPage from './pages/WebDesignPage';
import SEOPage from './pages/SEOPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import MetaAdsPage from './pages/MetaAdsPage';
import SocialMediaPage from './pages/SocialMediaPage';
import EmailMarketingPage from './pages/EmailMarketingPage';
import WhatsAppPage from './pages/WhatsAppPage';
import ContentProductionPage from './pages/ContentProductionPage';

const HomePage = () => (
  <div className="min-h-screen bg-white mt-20">
    <Hero />
    <TrustSection />
    <ServicesSection />
    <PackagesSection />
    <ProcessSection />
    <TestimonialsSection />
    <ContactSection />
  </div>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/web-design" element={<WebDesignPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/google-ads" element={<GoogleAdsPage />} />
        <Route path="/services/meta-ads" element={<MetaAdsPage />} />
        <Route path="/services/social-media" element={<SocialMediaPage />} />
        <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
        <Route path="/services/whatsapp" element={<WhatsAppPage />} />
        <Route path="/services/content-production" element={<ContentProductionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;