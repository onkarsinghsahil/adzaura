import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, TrendingUp, Users, Heart, MessageCircle, CheckCircle, ArrowRight, 
  Instagram, Facebook, Twitter, Linkedin, Youtube, Calendar,
  ChevronLeft, Star, Clock, Shield, Zap, BarChart3
} from 'lucide-react';

const SocialMediaPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Content Planning',
      description: 'Strategic content calendar aligned with your business goals'
    },
    {
      icon: Heart,
      title: 'Creative Design',
      description: 'Eye-catching visuals and engaging copy that drives engagement'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Active engagement with your audience and community building'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Detailed performance tracking and actionable insights'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Proven tactics to grow your followers and engagement'
    },
    {
      icon: MessageCircle,
      title: 'Social Listening',
      description: 'Monitor brand mentions and industry conversations'
    }
  ];

  const platforms = [
    {
      icon: Instagram,
      name: 'Instagram',
      description: 'Visual storytelling and brand building',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      description: 'Community building and customer engagement',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      description: 'B2B networking and thought leadership',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      description: 'Real-time engagement and brand voice',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      description: 'Video content and channel management',
      color: 'from-red-600 to-red-700'
    }
  ];

  const results = [
    {
      metric: '300%',
      label: 'Follower Growth',
      description: 'Average increase in 6 months'
    },
    {
      metric: '85%',
      label: 'Engagement Rate',
      description: 'Higher than industry average'
    },
    {
      metric: '250%',
      label: 'Reach Increase',
      description: 'Expanded audience reach'
    },
    {
      metric: '150%',
      label: 'Website Traffic',
      description: 'From social media referrals'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹15,000',
      platforms: '2 Platforms',
      features: [
        '12 posts per month',
        'Basic graphic design',
        'Content calendar',
        'Monthly analytics report',
        'Community management'
      ]
    },
    {
      name: 'Growth',
      price: '₹25,000',
      platforms: '3 Platforms',
      features: [
        '20 posts per month',
        'Advanced graphic design',
        'Video content creation',
        'Stories & reels',
        'Bi-weekly analytics',
        'Hashtag strategy'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹45,000',
      platforms: '5 Platforms',
      features: [
        '30+ posts per month',
        'Premium design & video',
        'Influencer collaborations',
        'Social media advertising',
        'Weekly strategy calls',
        'Dedicated account manager'
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
            <span className="text-gray-600">Social Media Marketing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link to="/" className="text-blue-600 hover:text-blue-700 mr-4">
                  <ChevronLeft className="h-6 w-6" />
                </Link>
                <div className="flex items-center">
                  <Share2 className="h-8 w-8 text-purple-600 mr-3" />
                  <span className="text-purple-600 font-semibold text-lg">Social Media Marketing</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Build Your Brand & Engage Your Community
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our social media experts create compelling content, build engaged communities, 
                and drive meaningful conversations that turn followers into loyal customers. 
                Let's amplify your brand's voice across all social platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Get Content Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Daily content creation</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Community management</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Social Media Content Creation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-red-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">85%</div>
                    <div className="text-sm text-gray-600">Engagement Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Manage All Major Platforms
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive social media management across all platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${platform.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Social Media Success Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our social media campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
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
              Complete Social Media Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From content creation to community management, we handle every aspect of your social media presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-purple-600" />
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
              Social Media Management Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your social media goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white border-2 rounded-2xl p-8 ${pkg.popular ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-purple-600">{pkg.price}</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">{pkg.platforms}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Social Media Presence?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create a social media strategy that builds your brand and engages your audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Content Strategy
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;