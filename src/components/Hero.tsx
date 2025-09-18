import React from 'react';
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-orange-600">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-medium">Rated #1 Digital Marketing Agency</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let's Grow Your Brand with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                  AdzAura
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Data-driven digital marketing & web solutions for measurable ROI. 
                We turn clicks into customers and visitors into loyal brand advocates.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">₹10Cr+</div>
                <div className="text-sm text-gray-600">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">300%</div>
                <div className="text-sm text-gray-600">Avg. ROI Increase</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                Get a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                View Packages
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Google Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Meta Business Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Certified Experts</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero image/video */}
          <div className="relative">
            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="AdzAura Team"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Floating stats card */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">2.5x</div>
                  <div className="text-sm opacity-90">ROI Increase</div>
                </div>
              </div>
              
              {/* Floating engagement card */}
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm opacity-90">Client Retention</div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;