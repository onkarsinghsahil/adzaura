import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, Code, Smartphone, Zap, CheckCircle, ArrowRight, 
  Monitor, Layers, Settings, TrendingUp, Users, Award,
  ChevronLeft, Star, Clock, Shield
} from 'lucide-react';

const WebDesignPage = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Perfect display across all devices and screen sizes'
    },
    {
      icon: Zap,
      title: 'Fast Loading',
      description: 'Optimized for speed with 3-second load times'
    },
    {
      icon: Settings,
      title: 'SEO Ready',
      description: 'Built with search engine optimization in mind'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'SSL certificates and security best practices'
    },
    {
      icon: Layers,
      title: 'Modern UI/UX',
      description: 'Contemporary design that converts visitors'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable codebase'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your business goals and target audience',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'Creating mockups and user experience flow',
      duration: '3-5 days'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your website with modern technologies',
      duration: '7-14 days'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Quality assurance and going live',
      duration: '2-3 days'
    }
  ];

  const packages = [
    {
      name: 'Basic Website',
      price: '₹25,000',
      features: [
        '5-page responsive website',
        'Mobile-friendly design',
        'Basic SEO setup',
        'Contact form integration',
        '1 month support'
      ]
    },
    {
      name: 'Business Website',
      price: '₹45,000',
      features: [
        '10-page responsive website',
        'Custom design & branding',
        'Advanced SEO optimization',
        'Google Analytics setup',
        'Social media integration',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'E-commerce Website',
      price: '₹75,000',
      features: [
        'Full e-commerce functionality',
        'Payment gateway integration',
        'Product catalog management',
        'Inventory management',
        'Order tracking system',
        '6 months support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Web Design & Development</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link to="/" className="text-blue-600 hover:text-blue-700 mr-4">
                  <ChevronLeft className="h-6 w-6" />
                </Link>
                <div className="flex items-center">
                  <Palette className="h-8 w-8 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-semibold text-lg">Web Design & Development</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Beautiful Websites That Convert Visitors Into Customers
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Custom web design and development services that combine stunning visuals 
                with powerful functionality. We create websites that not only look amazing 
                but drive real business results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">2-3 weeks delivery</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">100+ websites delivered</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Web Design Process"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">300%</div>
                    <div className="text-sm text-gray-600">Conversion Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Design Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with technology to deliver websites that perform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to launch, we follow a proven methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Web Design Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white border-2 rounded-2xl p-8 ${pkg.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a website that drives results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;