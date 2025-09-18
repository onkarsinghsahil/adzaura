import React from 'react';
import { Star, Quote, TrendingUp, Users, DollarSign } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechStart Solutions',
      company: 'B2B SaaS',
      content: "AdzAura transformed our digital presence completely. Our lead generation increased by 400% within 3 months, and our cost per acquisition dropped by 60%. Their team's expertise in B2B marketing is exceptional.",
      rating: 5,
      results: {
        metric1: '400%',
        label1: 'Lead Increase',
        metric2: '60%',
        label2: 'Cost Reduction'
      },
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      position: 'Marketing Director',
      company: 'Fashion Forward',
      content: "Working with AdzAura has been game-changing for our e-commerce brand. Their Meta and Google Ads expertise helped us achieve a 5x ROAS consistently. The creative team understands our brand perfectly.",
      rating: 5,
      results: {
        metric1: '5x',
        label1: 'ROAS Achieved',
        metric2: '250%',
        label2: 'Revenue Growth'
      },
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Amit Patel',
      position: 'Owner',
      company: 'Local Restaurant Chain',
      content: "The local SEO and GMB optimization by AdzAura brought us 300% more foot traffic. Their WhatsApp automation system has revolutionized our customer service. Highly recommended!",
      rating: 5,
      results: {
        metric1: '300%',
        label1: 'Foot Traffic',
        metric2: '85%',
        label2: 'Review Rating'
      },
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: '250%',
      label: 'Average Revenue Increase',
      description: 'Clients see significant growth within 3-6 months'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Businesses transformed across industries'
    },
    {
      icon: DollarSign,
      number: '₹10Cr+',
      label: 'Ad Spend Managed',
      description: 'Successfully optimized campaigns'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Client Satisfaction',
      description: 'Based on 200+ verified reviews'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-orange-500 mr-2 fill-current" />
            <span className="text-orange-500 font-semibold text-lg">Client Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've helped businesses like yours 
            achieve remarkable growth and success through strategic digital marketing.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-blue-200" />
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-blue-50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{testimonial.results.metric1}</div>
                  <div className="text-sm text-gray-600">{testimonial.results.label1}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">{testimonial.results.metric2}</div>
                  <div className="text-sm text-gray-600">{testimonial.results.label2}</div>
                </div>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <stat.icon className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create your success story together. Book a free consultation 
              and discover how we can transform your business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;