import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Botappetite</h3>
              <p className="text-gray-300 leading-relaxed">
                Transforming restaurant experiences through intelligent AI that understands hospitality.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={18} />
                <span className="text-gray-300">reagankibetsang@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400" size={18} />
                <span className="text-gray-300">+254724577131</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-400" size={18} />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-300">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#integration" className="text-gray-400 hover:text-white transition-colors">Integration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-300">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-300">Stay Connected</h4>
            <p className="text-gray-300">Get updates on new features and industry insights.</p>
            
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center sm:text-left">
              Built by <span className="text-white font-semibold">Reagan Langat</span> — AI Systems Engineer | Dining Tech Innovator
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Botappetite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}