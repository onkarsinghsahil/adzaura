import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Target, TrendingUp, Users, CheckCircle, ArrowRight, 
  Heart, MessageCircle, Share2, Eye, BarChart3, Award,
  ChevronLeft, Star, Clock, Shield, Zap
} from 'lucide-react';

const MetaAdsPage = () => {
  const features = [
    {
      icon: Target,
      title: 'Advanced Targeting',
      description: 'Reach your ideal customers with precision targeting options'
    },
    {
      icon: Heart,
      title: 'Creative Strategy',
      description: 'Engaging visuals and copy that stop the scroll'
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Continuous optimization for better results'
    },
    {
      icon: Users,
      title: 'Audience Building',
      description: 'Custom and lookalike audiences for maximum reach'
    },
    {
      icon: MessageCircle,
      title: 'Engagement Campaigns',
      description: 'Build community and drive meaningful interactions'
    },
    {
      icon: Share2,
      title: 'Multi-Platform Strategy',
      description: 'Coordinated campaigns across Facebook and Instagram'
    }
  ];

  const results = [
    {
      metric: '5x',
      label: 'Average ROAS',
      description: 'Return on ad spend achieved'
    },
    {
      metric: '70%',
      label: 'Cost Reduction',
      description: 'Lower cost per acquisition'
    },
    {
      metric: '300%',
      label: 'Reach Increase',
      description: 'Expanded audience reach'
    },
    {
      metric: '85%',
      label: 'Engagement Rate',
      description: 'Higher user engagement'
    }
  ];

  const adTypes = [
    {
      icon: Eye,
      title: 'Brand Awareness',
      description: 'Build recognition and reach new audiences',
      benefits: ['Increased brand recall', 'Wider audience reach', 'Cost-effective exposure']
    },
    {
      icon: Target,
      title: 'Conversion Campaigns',
      description: 'Drive sales and lead generation',
      benefits: ['Higher conversion rates', 'Qualified leads', 'Measurable ROI']
    },
    {
      icon: MessageCircle,
      title: 'Engagement Campaigns',
      description: 'Build community and drive interactions',
      benefits: ['Increased followers', 'Higher engagement', 'Brand loyalty']
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹15,000',
      adSpend: '₹20,000',
      features: [
        'Facebook & Instagram ads',
        'Basic audience targeting',
        'Creative design (5 ads)',
        'Campaign setup & optimization',
        'Monthly reporting'
      ]
    },
    {
      name: 'Growth',
      price: '₹25,000',
      adSpend: '₹40,000',
      features: [
        'Advanced targeting strategies',
        'Custom & lookalike audiences',
        'A/B testing of creatives',
        'Video ad creation',
        'Bi-weekly optimization',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Scale',
      price: '₹45,000',
      adSpend: '₹80,000+',
      features: [
        'Full-funnel campaign strategy',
        'Advanced retargeting',
        'Influencer collaboration ads',
        'Custom landing pages',
        'Weekly strategy calls',
        'Priority support'
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
            <span className="text-gray-600">Meta Ads Management</span>
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
                  <Facebook className="h-8 w-8 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-semibold text-lg">Meta Ads Management</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Reach Your Audience Where They Spend Their Time
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our Meta advertising experts create compelling campaigns across Facebook 
                and Instagram that engage your audience, build brand awareness, and drive 
                conversions with precision targeting and creative excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Get Free Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Creative Portfolio
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Results in 7-14 days</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Meta Business Partner</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Social Media Marketing"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-blue-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5x</div>
                    <div className="text-sm text-gray-600">ROAS Achieved</div>
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
              Proven Meta Ads Results
            </h2>
            <p className="text-xl text-gray-600">
              Real performance metrics from our Facebook and Instagram campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meta Advertising Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive campaigns tailored to your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adTypes.map((adType, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <adType.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{adType.title}</h3>
                <p className="text-gray-600 mb-6">{adType.description}</p>
                <ul className="space-y-2">
                  {adType.benefits.map((benefit, benefitIndex) => (
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
              Complete Meta Ads Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From creative strategy to performance optimization, we handle every aspect of your Meta advertising
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

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meta Ads Management Packages
            </h2>
            <p className="text-xl text-gray-600">
              Professional management fees + your ad spend budget
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
                <div className="mb-4">
                  <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
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
            Ready to Dominate Social Media Advertising?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free Meta Ads strategy session and discover how to reach your ideal customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Free Strategy Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Creative Examples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaAdsPage;