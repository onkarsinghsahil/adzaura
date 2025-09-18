import React from 'react';
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react';
import { packages, addOns } from '../data/packages';

const PackagesSection = () => {
  const getColorClasses = (color: string, popular: boolean) => {
    const baseClasses = popular 
      ? 'ring-2 ring-orange-500 scale-105 shadow-2xl' 
      : 'hover:shadow-xl';
    
    return `${baseClasses} transition-all duration-300`;
  };

  const getButtonClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'purple':
        return 'bg-purple-500 hover:bg-purple-600 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-orange-500 mr-2" />
            <span className="text-orange-500 font-semibold text-lg">Pricing Packages</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Choose Your Growth Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Every package is designed to deliver 
            maximum value and measurable results for your investment.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`relative bg-white border-2 border-gray-200 rounded-2xl p-8 ${getColorClasses(pkg.color, pkg.popular)}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600">{pkg.period}</span>
                </div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <div className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {pkg.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start opacity-50">
                      <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 ${getButtonClasses(pkg.color)}`}>
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services & Add-ons
            </h3>
            <p className="text-xl text-gray-600">
              Enhance your package with specialized services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900">{addon.name}</h4>
                  <span className="text-blue-600 font-bold">{addon.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure Which Package is Right?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and we'll recommend the perfect package 
              based on your business goals and budget.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center">
              Get Custom Recommendation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;