import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, TrendingUp, DollarSign, BarChart3, CheckCircle, ArrowRight, 
  Search, ShoppingCart, Monitor, Smartphone, Users, Award,
  ChevronLeft, Star, Clock, Shield, Zap
} from 'lucide-react';

const GoogleAdsPage = () => {
  const features = [
    {
      icon: Search,
      title: 'Search Campaigns',
      description: 'Capture high-intent customers actively searching for your products'
    },
    {
      icon: ShoppingCart,
      title: 'Shopping Ads',
      description: 'Showcase your products with rich visuals in Google Shopping'
    },
    {
      icon: Monitor,
      title: 'Display Advertising',
      description: 'Build brand awareness across Google\'s vast display network'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Optimized campaigns for mobile users and app downloads'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Real-time analytics and conversion tracking'
    },
    {
      icon: Target,
      title: 'Precise Targeting',
      description: 'Reach your ideal customers with advanced targeting options'
    }
  ];

  const results = [
    {
      metric: '400%',
      label: 'Average ROAS',
      description: 'Return on ad spend achieved'
    },
    {
      metric: '65%',
      label: 'Cost Reduction',
      description: 'Lower cost per acquisition'
    },
    {
      metric: '250%',
      label: 'Lead Increase',
      description: 'More qualified leads generated'
    },
    {
      metric: '₹10Cr+',
      label: 'Ad Spend Managed',
      description: 'Successfully optimized campaigns'
    }
  ];

  const campaignTypes = [
    {
      icon: Search,
      title: 'Search Campaigns',
      description: 'Target users searching for your keywords',
      benefits: ['High-intent traffic', 'Immediate visibility', 'Measurable ROI']
    },
    {
      icon: ShoppingCart,
      title: 'Shopping Campaigns',
      description: 'Showcase products with images and prices',
      benefits: ['Visual product display', 'Qualified traffic', 'Higher conversion rates']
    },
    {
      icon: Monitor,
      title: 'Display Campaigns',
      description: 'Build awareness across millions of websites',
      benefits: ['Brand awareness', 'Remarketing opportunities', 'Visual storytelling']
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹15,000',
      adSpend: '₹25,000',
      features: [
        'Search campaigns setup',
        'Keyword research & optimization',
        'Ad copy creation',
        'Landing page recommendations',
        'Monthly reporting'
      ]
    },
    {
      name: 'Growth',
      price: '₹25,000',
      adSpend: '₹50,000',
      features: [
        'Search + Shopping campaigns',
        'Advanced keyword targeting',
        'A/B testing of ad creatives',
        'Conversion tracking setup',
        'Bi-weekly optimization',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹50,000',
      adSpend: '₹1,00,000+',
      features: [
        'Full campaign suite',
        'Advanced audience targeting',
        'Custom landing pages',
        'Weekly strategy calls',
        'Priority support',
        'Advanced analytics dashboard'
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
            <span className="text-gray-600">Google Ads Management</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link to="/" className="text-blue-600 hover:text-blue-700 mr-4">
                  <ChevronLeft className="h-6 w-6" />
                </Link>
                <div className="flex items-center">
                  <Target className="h-8 w-8 text-red-600 mr-3" />
                  <span className="text-red-600 font-semibold text-lg">Google Ads Management</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Drive Instant Results With Google Ads That Convert
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our Google Ads experts create and manage high-performing campaigns 
                that capture high-intent customers and deliver measurable ROI. 
                Get immediate visibility and drive qualified traffic to your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Get Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Case Studies
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Results in 7-14 days</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Google Partner certified</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Google Ads Dashboard"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4:1</div>
                    <div className="text-sm text-gray-600">Average ROAS</div>
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
              Proven Google Ads Results
            </h2>
            <p className="text-xl text-gray-600">
              Real performance metrics from our managed campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-red-600 mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Google Ads Campaign Types
            </h2>
            <p className="text-xl text-gray-600">
              We manage all types of Google Ads campaigns for maximum reach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <campaign.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{campaign.title}</h3>
                <p className="text-gray-600 mb-6">{campaign.description}</p>
                <ul className="space-y-2">
                  {campaign.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Google Ads Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to optimization, we handle every aspect of your Google Ads campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Google Ads Management Packages
            </h2>
            <p className="text-xl text-gray-600">
              Professional management fees + your ad spend budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white border-2 rounded-2xl p-8 ${pkg.popular ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-red-600">{pkg.price}</div>
                  <div className="text-sm text-gray-600">Management Fee/month</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">+ {pkg.adSpend} ad spend</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${pkg.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Scale Your Business with Google Ads?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get a free Google Ads audit and discover untapped opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Free Ads Audit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleAdsPage;