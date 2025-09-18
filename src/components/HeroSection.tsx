import { useState } from 'react';
import { QrCode, ArrowRight, X } from 'lucide-react';
import qrCodeImage from '../assets/qr-code.png';

export function HeroSection() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  return (
    <>
    <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Dining Tech,{' '}
                <span className="text-gray-300">Redefined</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Transform every menu into an intelligent dining experience. Our AI assistant helps guests discover, understand, and enjoy their perfect meal.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://botappetite.netlify.app/" target="_blank" rel="noopener noreferrer" className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Live Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
                            <button onClick={() => setIsQrModalOpen(true)} className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <QrCode size={20} />
                Scan QR Code
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-300">Guest Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30%</div>
                <div className="text-sm text-gray-300">Increase in Upsells</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24hrs</div>
                <div className="text-sm text-gray-300">Setup Time</div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <span className="font-semibold text-gray-800">Dining Assistant</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-700">"What's gluten-free on your pasta menu?"</p>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-800">I found 3 gluten-free pasta options for you! Our Risotto Primavera is particularly popular and made with fresh seasonal vegetables...</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-700">"Perfect! What wine pairs with that?"</p>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-800">Our sommelier recommends the Pinot Grigio - it complements the fresh vegetables beautifully. Would you like me to add both to your order?</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-green-100 rounded-full p-4">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {isQrModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 relative max-w-sm w-full text-center shadow-2xl">
            <button 
              onClick={() => setIsQrModalOpen(false)} 
              className="absolute -top-4 -right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Scan to Try the Demo</h3>
            <img src={qrCodeImage} alt="QR Code for Botappetite Demo" className="mx-auto w-64 h-64" />
            <p className="text-gray-600 mt-4">Point your phone's camera at the code to open the live demo.</p>
          </div>
        </div>
      )}
    </>
  );
}