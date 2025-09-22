import React from 'react';
import { QrCode, ArrowRight, Smartphone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to See It in <span className="text-gray-300">Action?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of dining technology firsthand. Try our AI dining assistant 
              and see how it transforms menu interactions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Smartphone size={20} />
                  Try Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                
                <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Schedule Demo
                </button>
              </div>
              
              <div className="text-center text-gray-300">
                <p className="text-lg font-medium">Join restaurants already using AI dining</p>
                <p className="text-sm">No credit card required • 14-day free trial</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <div className="text-center space-y-4">
                  <QrCode className="text-gray-800 mx-auto" size={120} />
                  <div className="text-gray-800">
                    <p className="font-semibold">Scan to Try Demo</p>
                    <p className="text-sm text-gray-600">Works on any smartphone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-300">5 minutes</div>
              <div className="text-gray-400">Setup time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-300">24/7</div>
              <div className="text-gray-400">AI assistance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-300">∞</div>
              <div className="text-gray-400">Menu questions handled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
