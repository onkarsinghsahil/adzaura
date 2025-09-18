import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, Bot, Zap, Users, CheckCircle, ArrowRight, 
  Clock, BarChart3, Settings, Send, Smartphone, Shield,
  ChevronLeft, Star, Award, TrendingUp
} from 'lucide-react';

const WhatsAppPage = () => {
  const features = [
    {
      icon: Bot,
      title: 'Chatbot Automation',
      description: 'Intelligent chatbots that handle customer queries 24/7'
    },
    {
      icon: Send,
      title: 'Broadcast Messaging',
      description: 'Send promotional messages to your customer base'
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Streamlined customer service through WhatsApp'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track message performance and customer engagement'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Automated sequences for lead nurturing'
    },
    {
      icon: Shield,
      title: 'Secure Messaging',
      description: 'End-to-end encrypted business communications'
    }
  ];

  const useCases = [
    {
      icon: MessageCircle,
      title: 'Customer Support',
      description: 'Instant support and query resolution',
      benefits: ['24/7 availability', 'Quick response times', 'Reduced support costs']
    },
    {
      icon: Send,
      title: 'Order Updates',
      description: 'Automated order confirmations and tracking',
      benefits: ['Real-time updates', 'Reduced inquiries', 'Better customer experience']
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically',
      benefits: ['Higher conversion rates', 'Automated follow-ups', 'Lead scoring']
    }
  ];

  const results = [
    {
      metric: '90%',
      label: 'Open Rate',
      description: 'Messages are read within minutes'
    },
    {
      metric: '70%',
      label: 'Response Rate',
      description: 'Higher engagement than email'
    },
    {
      metric: '50%',
      label: 'Cost Reduction',
      description: 'Lower customer service costs'
    },
    {
      metric: '24/7',
      label: 'Availability',
      description: 'Round-the-clock automation'
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: '₹8,000',
      messages: '1,000 messages',
      features: [
        'WhatsApp Business setup',
        'Basic chatbot flows',
        'Customer support automation',
        'Message templates',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '₹15,000',
      messages: '5,000 messages',
      features: [
        'Advanced chatbot workflows',
        'Broadcast messaging',
        'Lead qualification automation',
        'CRM integration',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹30,000',
      messages: 'Unlimited messages',
      features: [
        'Custom automation workflows',
        'Multi-agent support',
        'Advanced integrations',
        'Custom reporting',
        'Dedicated account manager',
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
            <span className="text-gray-600">WhatsApp Automation</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link to="/" className="text-blue-600 hover:text-blue-700 mr-4">
                  <ChevronLeft className="h-6 w-6" />
                </Link>
                <div className="flex items-center">
                  <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                  <span className="text-green-600 font-semibold text-lg">WhatsApp Automation</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Automate Customer Communication & Support
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your customer communication with WhatsApp Business automation. 
                Our intelligent chatbots and automated workflows provide instant support, 
                generate leads, and enhance customer experience 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Get WhatsApp Setup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Demo
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">24/7 automation</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">WhatsApp verified</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="WhatsApp Business Automation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Smartphone className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">90%</div>
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
              WhatsApp Marketing Results
            </h2>
            <p className="text-xl text-gray-600">
              Impressive performance metrics that drive business growth
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

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WhatsApp Business Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Versatile automation solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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
              Complete WhatsApp Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features to automate and optimize your WhatsApp business communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WhatsApp Automation Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right automation solution for your business
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
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-600">{pkg.price}</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">{pkg.messages}</div>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your WhatsApp Communication?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Transform your customer service and boost engagement with WhatsApp automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Start WhatsApp Automation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppPage;