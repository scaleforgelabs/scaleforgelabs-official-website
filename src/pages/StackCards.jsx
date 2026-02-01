import { useState } from 'react';
import { Lock, ClipboardList, Target, Building2, Users, Check } from 'lucide-react';
import StackCardsFeatures from '../components/StackCardsFeatures';
import ImageModal from '../components/ImageModal';

const StackCards = () => {
  const [modalImage, setModalImage] = useState({ isOpen: false, src: '', alt: '' });

  const detectDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  };

  const handleDownload = () => {
    const isIOS = detectDevice();
    if (isIOS) {
      window.open('https://apps.apple.com/app/whatsapp-messenger/id310633997', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.whatsapp', '_blank');
    }
  };

  const openModal = (src, alt) => {
    setModalImage({ isOpen: true, src, alt });
  };

  const closeModal = () => {
    setModalImage({ isOpen: false, src: '', alt: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 px-4 sm:px-0">
            StackCards
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            "Turn every business card into a smart contact. Never lose a connection again."
          </p>
        </div>
      </section>

      {/* StackCards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="StackCards Demo"
                className="w-full h-80 rounded-3xl shadow-2xl"
                allowFullScreen
              ></iframe>
              <div className="absolute -top-6 -right-6 bg-black text-white p-4 rounded-2xl">
                <p className="text-sm font-semibold">Most Popular</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Digital Business Card Management</h2>
              <p className="text-xl text-gray-600 mb-8">
                "Turn every business card into a smart contact. Never lose a connection again."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Lock, title: "Secure Digital Wallet", desc: "Bank-level encryption" },
                  { icon: ClipboardList, title: "Smart Organization", desc: "Auto-categorization" },
                  { icon: Target, title: "AI-Powered Scanning", desc: "99% accuracy" }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className="text-center p-4 rounded-xl bg-gray-50 hover:bg-black hover:text-white transition-colors"
                    >
                      <IconComponent size={32} className="mb-2 mx-auto" />
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs opacity-70">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={handleDownload}
                className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Download StackCards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* StackCards Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StackCardsFeatures />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Networking?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who never lose a business card again.
          </p>
          
          <button 
            onClick={handleDownload}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Download StackCards
          </button>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-400 max-w-2xl mx-auto px-4 sm:px-0 mt-8">
            {['Free tier available', 'No ads in premium', 'Works offline', 'Cross-platform'].map((item, index) => (
              <div key={index} className="flex items-center">
                <Check size={16} className="mr-2 text-green-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ImageModal 
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
      />
    </div>
  );
};

export default StackCards;