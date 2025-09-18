import React from 'react';
import { CheckCircle, Smartphone, Settings, Clock } from 'lucide-react';

export function IntegrationSection() {
  const features = [
    {
      icon: <Smartphone className="text-gray-700" size={32} />,
      title: "Works with Existing Systems",
      description: "Seamlessly integrates with your current POS and QR menu systems"
    },
    {
      icon: <Clock className="text-gray-700" size={32} />,
      title: "Quick Setup",
      description: "Up and running in days, not months - simple onboarding process"
    },
    {
      icon: <Settings className="text-gray-700" size={32} />,
      title: "No Extra Hardware",
      description: "Works entirely through your existing devices and infrastructure"
    }
  ];

  return (
    <section id="integration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Seamless Setup, <span className="text-gray-700">Zero Hassle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI assistant works with your existing technology stack, requiring minimal setup and no additional hardware investments.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Integration Checklist:</h3>
              <div className="space-y-2">
                {[
                  "Connect to existing POS system",
                  "Upload current menu data",
                  "Customize AI responses",
                  "Train staff on new features",
                  "Launch to customers"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-gray-600" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Ready in 3 Steps</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <span>Connect your existing menu & POS</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <span>Customize AI responses for your brand</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <span>Go live with enhanced dining experience</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white border-opacity-20">
                  <div className="text-center">
                    <div className="text-3xl font-bold">24 hours</div>
                    <div className="text-sm text-gray-300">Average setup time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}