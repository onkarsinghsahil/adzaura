import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, Camera, Edit, Palette, CheckCircle, ArrowRight, 
  Play, Image, Mic, Monitor, Users, Award,
  ChevronLeft, Star, Clock, Shield, Zap, BarChart3
} from 'lucide-react';

const ContentProductionPage = () => {
  const services = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional product and lifestyle photography',
      details: ['Product photography', 'Lifestyle shoots', 'Brand photography', 'Event coverage']
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Engaging video content for all platforms',
      details: ['Promotional videos', 'Social media content', 'Explainer videos', 'Testimonials']
    },
    {
      icon: Edit,
      title: 'Post-Production',
      description: 'Professional editing and enhancement',
      details: ['Video editing', 'Color correction', 'Motion graphics', 'Audio enhancement']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Visual content for digital marketing',
      details: ['Social media graphics', 'Infographics', 'Banner designs', 'Brand materials']
    },
    {
      icon: Mic,
      title: 'Audio Production',
      description: 'Professional audio content creation',
      details: ['Podcast production', 'Voice-overs', 'Audio ads', 'Sound design']
    },
    {
      icon: Monitor,
      title: 'Animation',
      description: 'Animated content and motion graphics',
      details: ['2D animation', 'Motion graphics', 'Logo animation', 'Explainer animations']
    }
  ];

  const contentTypes = [
    {
      icon: Image,
      title: 'Social Media Content',
      description: 'Daily content for all your social platforms',
      benefits: ['Consistent posting', 'Brand alignment', 'Engagement focused']
    },
    {
      icon: Play,
      title: 'Video Marketing',
      description: 'Compelling videos that drive action',
      benefits: ['Higher engagement', 'Better conversions', 'Viral potential']
    },
    {
      icon: Camera,
      title: 'Product Showcase',
      description: 'Professional product photography and videos',
      benefits: ['Increased sales', 'Better presentation', 'Brand credibility']
    }
  ];

  const results = [
    {
      metric: '500%',
      label: 'Engagement Increase',
      description: 'With professional content'
    },
    {
      metric: '300%',
      label: 'Brand Recognition',
      description: 'Improved brand awareness'
    },
    {
      metric: '200%',
      label: 'Conversion Rate',
      description: 'Higher sales conversions'
    },
    {
      metric: '1000+',
      label: 'Content Pieces',
      description: 'Created for clients'
    }
  ];

  const packages = [
    {
      name: 'Content Starter',
      price: '₹20,000',
      deliverables: '10 pieces/month',
      features: [
        '10 social media graphics',
        'Basic photo editing',
        '2 short videos',
        'Content calendar',
        'Basic revisions'
      ]
    },
    {
      name: 'Content Pro',
      price: '₹40,000',
      deliverables: '25 pieces/month',
      features: [
        '20 social media graphics',
        'Professional photography',
        '5 promotional videos',
        'Motion graphics',
        'Advanced editing',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Content Studio',
      price: '₹75,000',
      deliverables: 'Unlimited',
      features: [
        'Unlimited graphics',
        'Monthly photo/video shoot',
        'Professional video production',
        'Animation & motion graphics',
        'Dedicated creative team',
        'Same-day turnaround'
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
            <span className="text-gray-600">Content Production</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link to="/" className="text-blue-600 hover:text-blue-700 mr-4">
                  <ChevronLeft className="h-6 w-6" />
                </Link>
                <div className="flex items-center">
                  <Video className="h-8 w-8 text-orange-600 mr-3" />
                  <span className="text-orange-600 font-semibold text-lg">Content Production</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional Content That Captivates Your Audience
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our creative team produces high-quality photos, videos, and graphics 
                that tell your brand story and engage your audience. From concept to 
                final delivery, we create content that drives results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Start Creating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Fast turnaround</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Award-winning team</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Content Production Studio"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <BarChart3 className="h-8 w-8 text-orange-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500%</div>
                    <div className="text-sm text-gray-600">Engagement Boost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Content Production Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create compelling visual content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content That Drives Results
            </h2>
            <p className="text-xl text-gray-600">
              Strategic content creation for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <content.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.title}</h3>
                <p className="text-gray-600 mb-6">{content.description}</p>
                <ul className="space-y-2">
                  {content.benefits.map((benefit, benefitIndex) => (
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

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content Performance Results
            </h2>
            <p className="text-xl text-gray-600">
              Measurable impact from professional content creation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
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
              Content Production Packages
            </h2>
            <p className="text-xl text-gray-600">
              Professional content creation packages for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white border-2 rounded-2xl p-8 ${pkg.popular ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-orange-600">{pkg.price}</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">{pkg.deliverables}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${pkg.popular ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Stunning Content?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's bring your brand to life with professional content that engages and converts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentProductionPage;