import React from 'react';
import { AlertCircle, Users, TrendingDown } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: <AlertCircle className="text-gray-600" size={32} />,
      title: "Overwhelming Menus",
      description: "Diners struggle with bulky menus, complex ingredients, and hidden dietary info."
    },
    {
      icon: <Users className="text-gray-600" size={32} />,
      title: "Staff Overload",
      description: "Staff get overloaded with repetitive questions about dishes and ingredients."
    },
    {
      icon: <TrendingDown className="text-gray-600" size={32} />,
      title: "Lost Opportunities",
      description: "Restaurants lose upsell opportunities when guests play it safe with familiar orders."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Menus Shouldn't Be <span className="text-gray-600">Overwhelming</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional dining experiences create friction for both guests and staff, leading to missed opportunities and frustrated customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="group p-8 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}