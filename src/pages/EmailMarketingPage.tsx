import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, TrendingUp, Users, Target, CheckCircle, ArrowRight, 
  Send, BarChart3, Clock, Zap, Heart, Settings,
  ChevronLeft, Star, Award, Shield
} from 'lucide-react';

const EmailMarketingPage = () => {
  const features = [
    {
      icon: Target,
      title: 'Segmentation & Targeting',
      description: 'Precise audience segmentation for personalized messaging'
    },
    {
      icon: Zap,
      title: 'Automation Workflows',
      description: 'Automated email sequences that nurture leads'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Detailed insights on opens, clicks, and conversions'
    },
    {
      icon: Heart,
      title: 'Personalization',
      description: 'Dynamic content tailored to each subscriber'
    },
    {
      icon: Settings,
      title: 'A/B Testing',
      description: 'Optimize subject lines, content, and send times'
    },
    {
      icon: Send,
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox, not spam'
    }
  ];

  const campaignTypes = [
    {
      icon: Mail,
      title: 'Welcome Series',
      description: 'Onboard new subscribers with engaging welcome emails',
      benefits: ['Higher engagement', 'Brand introduction', 'Expectation setting']
    },
    {
      icon: TrendingUp,
      title: 'Promotional Campaigns',
      description: 'Drive sales with targeted promotional emails',
      benefits: ['Increased revenue', 'Product awareness', 'Limited-time offers']
    },
    {
      icon: Users,
      title: 'Newsletter Campaigns',
      description: 'Keep your audience engaged with valuable content',
      benefits: ['Brand loyalty', 'Thought leadership', 'Regular touchpoints']
    }
  ];

  const results = [
    {
      metric: '45%',
      label: 'Open Rate',
      description: 'Above industry average'
    },
    {
      metric: '12%',
      label: 'Click Rate',
      description: 'Higher engagement rates'
    },
    {
      metric: '25%',
      label: 'Revenue Increase',
      description: 'From email campaigns'
    },
    {
      metric: '300%',
      label: 'List Growth',
      description: 'Subscriber base expansion'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹8,000',
      subscribers: 'Up to 2,500',
      features: [
        '4 email campaigns per month',
        'Basic templates',
        'List management',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Growth',
      price: '₹15,000',
      subscribers: 'Up to 10,000',
      features: [
        '8 email campaigns per month',
        'Custom email design',
        'Automation workflows',
        'Advanced segmentation',
        'A/B testing',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹30,000',
      subscribers: 'Unlimited',
      features: [
        'Unlimited campaigns',
        'Advanced automation',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics',
        'Phone support'
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
            <span className="text-gray-600">Email Marketing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link to="/" className="text-blue-600 hover:text-blue-700 mr-4">
                  <ChevronLeft className="h-6 w-6" />
                </Link>
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-indigo-600 mr-3" />
                  <span className="text-indigo-600 font-semibold text-lg">Email Marketing</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Turn Subscribers Into Loyal Customers
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our email marketing experts create personalized campaigns that nurture 
                relationships, drive conversions, and build lasting customer loyalty. 
                From welcome series to promotional campaigns, we make every email count.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Get Email Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Templates
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">24/7 automation</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">99% deliverability</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Email Marketing Campaign"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">45%</div>
                    <div className="text-sm text-gray-600">Open Rate</div>
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
              Email Marketing Performance
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading results that drive real business growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{result.metric}</div>
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
              Email Campaign Types
            </h2>
            <p className="text-xl text-gray-600">
              Strategic campaigns designed to achieve your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <campaign.icon className="h-8 w-8 text-indigo-600" />
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
              Advanced Email Marketing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools and strategies to maximize your email marketing ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
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
              Email Marketing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your email marketing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white border-2 rounded-2xl p-8 ${pkg.popular ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-indigo-600">{pkg.price}</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">{pkg.subscribers}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${pkg.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's create email campaigns that convert subscribers into loyal customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Start Email Marketing
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Email Examples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketingPage;