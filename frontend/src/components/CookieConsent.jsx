import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:bottom-12 md:max-w-md z-[1000] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-[#F9F7F4] border border-stone-200 shadow-2xl rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
        {/* Subtle background decoration */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#EBD8B8]/10 rounded-full blur-3xl group-hover:bg-[#EBD8B8]/20 transition-colors duration-700"></div>
        
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#EBD8B8] text-stone-800 rounded-2xl shadow-inner">
              <Cookie size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif italic text-stone-800">Momento de pausa...</h3>
          </div>
          
          <p className="text-sm text-stone-500 font-sans leading-relaxed">
            Utilizamos pequeñas "migajas" digitales (cookies) para entender cómo navegas y ofrecerte una experiencia más fluida y personalizada en nuestro espacio zen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button 
              onClick={handleAccept}
              className="flex-1 bg-[#3A4A3E] text-stone-50 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#2A3A2E] transition-all shadow-md active:scale-95 font-sans"
            >
              Aceptarlas todas
            </button>
            <button 
              onClick={handleDecline}
              className="flex-1 bg-transparent border border-stone-200 text-stone-400 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-stone-50 hover:text-stone-600 transition-all font-sans"
            >
              Solo esenciales
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-stone-300 hover:text-stone-600 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
