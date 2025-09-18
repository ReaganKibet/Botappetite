import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">DiningAI</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Features</a>
              <a href="#benefits" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Benefits</a>
              <a href="#integration" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Integration</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-700">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Features</a>
            <a href="#benefits" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Benefits</a>
            <a href="#integration" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Integration</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}