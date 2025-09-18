import React from 'react';
import { Sparkles, Brain, Heart, Utensils } from 'lucide-react';

export function FutureSection() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              AI + Dining: The <span className="text-gray-300">Future of Hospitality</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're bringing AI into dining spaces to create smarter, warmer, more satisfying guest experiences. 
              It's not just tech — it's hospitality, elevated.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Brain className="text-gray-400" size={40} />,
                title: "Intelligent",
                description: "AI that understands cuisine, dietary needs, and personal preferences"
              },
              {
                icon: <Heart className="text-gray-400" size={40} />,
                title: "Empathetic",
                description: "Technology that enhances human connection, not replaces it"
              },
              {
                icon: <Sparkles className="text-gray-400" size={40} />,
                title: "Innovative",
                description: "Cutting-edge solutions that feel natural and intuitive"
              },
              {
                icon: <Utensils className="text-gray-400" size={40} />,
                title: "Hospitality-First",
                description: "Built by restaurant people for restaurant people"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gray-700 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-200">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-12">
            <div className="bg-gray-700 rounded-2xl p-8 max-w-3xl mx-auto">
              <blockquote className="text-lg italic text-center">
                "The future of dining isn't about replacing human connection — it's about amplifying it. 
                Our AI gives staff the tools to create more meaningful interactions while giving guests 
                the confidence to explore and enjoy."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}