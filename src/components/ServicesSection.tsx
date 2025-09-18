import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Palette, Search, MapPin, BarChart3, ShoppingCart, 
  Target, Play, Camera, MessageCircle, Mail, Video, ArrowRight, 
  CheckCircle, Facebook, Server, Code, TrendingUp, Building, 
  Settings, Package
} from 'lucide-react';
import { services } from '../data/services';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Globe, Palette, Search, MapPin, BarChart3, ShoppingCart,
  Target, Play, Camera, MessageCircle, Mail, Video,
  Facebook, Server, Code, TrendingUp, Building, Settings, Package
};

const ServicesSection = () => {
  const serviceRoutes: { [key: string]: string } = {
    'web-design': '/services/web-design',
    'seo': '/services/seo',
    'google-ads': '/services/google-ads',
    'meta-ads': '/services/meta-ads',
    'social-media': '/services/social-media',
    'email-marketing': '/services/email-marketing',
    'whatsapp-automation': '/services/whatsapp',
    'content-production': '/services/content-production'
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-lg">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide end-to-end digital marketing services 
            that drive growth and deliver measurable results for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Target;
            
            return (
              <div 
                key={service.id}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.summary}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={serviceRoutes[service.id] || '#'}
                  className="group/btn inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can drive growth for your business. 
              Get a free consultation and custom strategy recommendations.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;