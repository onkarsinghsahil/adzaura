import React from 'react';
import { MessageSquare, Search, Rocket, BarChart3, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery Call',
      description: 'We understand your business goals, target audience, and current challenges.',
      duration: 'Week 1'
    },
    {
      icon: Search,
      title: 'Strategy Development',
      description: 'Create a comprehensive digital marketing strategy tailored to your needs.',
      duration: 'Week 1-2'
    },
    {
      icon: Rocket,
      title: 'Implementation',
      description: 'Execute campaigns, optimize websites, and launch your growth initiatives.',
      duration: 'Week 2-4'
    },
    {
      icon: BarChart3,
      title: 'Monitor & Optimize',
      description: 'Track performance, analyze data, and continuously improve results.',
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-lg">Our Process</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How We Drive Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures every project delivers maximum impact. 
            From strategy to execution, we make the complex simple.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 to-orange-300"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="bg-white border-4 border-blue-200 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {step.duration}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Growth Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your free strategy call today and discover how we can accelerate 
              your business growth with our proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;