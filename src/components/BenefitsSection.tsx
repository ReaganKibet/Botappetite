import React from 'react';
import { Heart, Zap, DollarSign } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Heart className="text-gray-400" size={48} />,
      title: "Happier Guests",
      description: "Guests order confidently and discover new favorites with personalized recommendations.",
      metric: "98% satisfaction rate",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Zap className="text-gray-400" size={48} />,
      title: "Efficient Staff",
      description: "Fewer repetitive questions mean smoother operations and more meaningful guest interactions.",
      metric: "60% reduction in menu questions",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: <DollarSign className="text-gray-400" size={48} />,
      title: "Higher Sales",
      description: "Smart upsells and personalized suggestions drive revenue and encourage repeat visits.",
      metric: "30% increase in average order value",
      color: "from-gray-800 to-gray-900"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">
            The Impact for Your <span className="text-gray-300">Restaurant</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI dining assistant creates measurable improvements across every aspect of the dining experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative overflow-hidden bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
                
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${benefit.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                  {benefit.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}