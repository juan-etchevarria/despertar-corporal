import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 py-16 px-6 bg-stone-50 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-sans uppercase tracking-widest font-bold text-stone-400">
        <div className="italic text-lg normal-case tracking-normal text-stone-800 font-serif">Despertar Corporal</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-stone-900 transition-colors">Instagram</a>
          <a href="#" className="hover:text-stone-900 transition-colors">YouTube</a>
          <a href="#" className="hover:text-stone-900 transition-colors">WhatsApp</a>
        </div>
        <div>© 2024 EL ARTE DEL MOVIMIENTO CONSCIENTE.</div>
      </div>
    </footer>
  );
};

export default Footer;
