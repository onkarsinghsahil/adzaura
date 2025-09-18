import React from 'react';
import { Shield, Target, BarChart3, Clock, Users, Trophy } from 'lucide-react';

const TrustSection = () => {
  const features = [
    {
      icon: Target,
      title: 'ROI-First Approach',
      description: 'Every campaign optimized for maximum return on investment'
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting',
      description: 'Real-time dashboards and weekly performance reports'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Expert strategists, designers, and analysts for your success'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-lg">Why Choose AdzAura</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Trusted Growth Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AdzAura is a full-service digital marketing agency helping businesses scale via 
            performance ads, SEO, and high-converting websites. We deliver transparent, 
            measurable digital growth that turns clicks into customers.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <feature.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To deliver transparent, measurable digital growth that turns clicks into customers. 
              We believe in data-driven strategies that create lasting business impact.
            </p>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <Trophy className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the trusted growth partner for ambitious brands across India & beyond, 
              empowering businesses to achieve their full digital potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;