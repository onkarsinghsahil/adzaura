import React from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, 
  Mail, Phone, MapPin, ExternalLink, ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const services = [
    'Web Design & Development',
    'Search Engine Optimization',
    'Google Ads Management',
    'Meta Ads Management',
    'Social Media Marketing',
    'Email Marketing',
    'WhatsApp Automation',
    'Content Production'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Case Studies',
    'Blog',
    'Careers',
    'Contact'
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Sitemap'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold text-white mb-6">AdzAura</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted digital marketing partner. We deliver transparent, 
                measurable growth that turns clicks into customers and visitors into loyal advocates.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>hello@adzaura.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      {service}
                      <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-6 mt-8">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest digital marketing insights, tips, and updates delivered to your inbox.
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-sm text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h4 className="font-medium mb-4">Certifications</h4>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800 px-3 py-2 rounded text-sm">Google Partner</div>
                  <div className="bg-gray-800 px-3 py-2 rounded text-sm">Meta Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 AdzAura. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Made with ❤️ in India</span>
              <button
                onClick={scrollToTop}
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-300"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;