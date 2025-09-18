import React from 'react';
import { MessageSquare, Brain, Zap, Smartphone } from 'lucide-react';

export function SolutionSection() {
  const features = [
    {
      icon: <MessageSquare className="text-gray-700" size={24} />,
      title: "Interactive Menu Guide",
      description: "Turns any menu into an intelligent, conversational experience"
    },
    {
      icon: <Brain className="text-gray-700" size={24} />,
      title: "Instant Explanations",
      description: "Explains dishes, nutrition, and allergens in natural language"
    },
    {
      icon: <Zap className="text-gray-700" size={24} />,
      title: "Smart Recommendations",
      description: "Provides personalized suggestions based on preferences and dietary needs"
    },
    {
      icon: <Smartphone className="text-gray-700" size={24} />,
      title: "Seamless Integration",
      description: "Works with QR menus, POS systems, and existing ordering workflows"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Meet Your <span className="text-gray-700">AI Dining Assistant</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our intelligent assistant transforms every dining interaction, making menus more accessible, 
                staff more efficient, and guests more satisfied.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-lg">
                  <span className="font-semibold">AI Dining Assistant</span>
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  <div className="flex justify-end">
                    <div className="bg-gray-700 text-white p-3 rounded-lg max-w-xs">
                      "I'm looking for something light and vegetarian"
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                      Perfect! I recommend our Mediterranean Quinoa Bowl - it's packed with fresh vegetables, feta cheese, and a light lemon vinaigrette. Only 380 calories and full of nutrients!
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gray-700 text-white p-3 rounded-lg max-w-xs">
                      "That sounds great! Any wine pairings?"
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                      Our Sauvignon Blanc pairs beautifully with the quinoa bowl! It has crisp citrus notes that complement the lemon vinaigrette. Would you like me to add both to your order?
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                    Add to Order
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}