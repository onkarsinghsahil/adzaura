import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, 
  Globe, MapPin, FileText, Settings, Users, Award,
  ChevronLeft, Star, Clock, Shield, Zap
} from 'lucide-react';

const SEOPage = () => {
  const features = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'In-depth analysis to find high-converting keywords'
    },
    {
      icon: FileText,
      title: 'Content Optimization',
      description: 'SEO-optimized content that ranks and converts'
    },
    {
      icon: Settings,
      title: 'Technical SEO',
      description: 'Website optimization for search engine crawling'
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Dominate local search results in your area'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Detailed insights and performance tracking'
    },
    {
      icon: Globe,
      title: 'Link Building',
      description: 'High-quality backlinks from authoritative sites'
    }
  ];

  const results = [
    {
      metric: '300%',
      label: 'Organic Traffic Increase',
      description: 'Average improvement in 6 months'
    },
    {
      metric: '85%',
      label: 'First Page Rankings',
      description: 'Keywords ranking on page 1'
    },
    {
      metric: '250%',
      label: 'Lead Generation',
      description: 'Increase in qualified leads'
    },
    {
      metric: '150%',
      label: 'Revenue Growth',
      description: 'Average business growth'
    }
  ];

  const packages = [
    {
      name: 'Local SEO',
      price: '₹15,000',
      period: '/month',
      features: [
        'Google My Business optimization',
        'Local keyword targeting',
        'Citation building',
        'Review management',
        'Monthly reporting'
      ]
    },
    {
      name: 'National SEO',
      price: '₹35,000',
      period: '/month',
      features: [
        'Comprehensive keyword research',
        'On-page optimization',
        'Content creation',
        'Technical SEO audit',
        'Link building campaign',
        'Bi-weekly reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise SEO',
      price: '₹75,000',
      period: '/month',
      features: [
        'Advanced SEO strategy',
        'Competitor analysis',
        'Custom content calendar',
        'Priority support',
        'Weekly strategy calls',
        'Advanced analytics'
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
            <span className="text-gray-600">Search Engine Optimization</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link to="/" className="text-blue-600 hover:text-blue-700 mr-4">
                  <ChevronLeft className="h-6 w-6" />
                </Link>
                <div className="flex items-center">
                  <Search className="h-8 w-8 text-green-600 mr-3" />
                  <span className="text-green-600 font-semibold text-lg">Search Engine Optimization</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Dominate Search Results & Drive Organic Growth
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our proven SEO strategies help businesses rank higher, attract more 
                qualified traffic, and convert visitors into customers. Get sustainable 
                growth that compounds over time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Get SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Case Studies
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Results in 3-6 months</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Google certified experts</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SEO Analytics Dashboard"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+300%</div>
                    <div className="text-sm text-gray-600">Organic Traffic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven SEO Results
            </h2>
            <p className="text-xl text-gray-600">
              Real numbers from real businesses we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate search results and drive organic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              SEO Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right SEO strategy for your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white border-2 rounded-2xl p-8 ${pkg.popular ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                  <span className="text-gray-600">{pkg.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${pkg.popular ? 'bg-green-600 hover:bg-green-700 text-white' : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free SEO audit and discover how we can grow your organic traffic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Free SEO Audit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOPage;