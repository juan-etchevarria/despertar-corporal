import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PlayCircle } from 'lucide-react';
import { useFreeClass } from '../context/FreeClassContext';


const Navbar = () => {
   const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useFreeClass();

  
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Filosofía', path: '/filosofia' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="w-full bg-[#F9F7F4]/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 md:h-24 flex justify-between items-center group">
          {/* Brand */}
          <Link 
            to="/" 
            className="text-lg md:text-xl tracking-[0.25em] uppercase font-serif shrink-0 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          >
            Despertar Corporal
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 xl:space-x-20 text-[10px] uppercase tracking-[0.3em] font-sans font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-stone-900 transition-colors py-1 ${
                  isActive(link.path) ? 'border-b border-stone-800 text-stone-900' : 'text-stone-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Action Button & Menu Toggle */}
           <div className="flex items-center gap-4">
            <button 
              onClick={openModal}
              className="hidden md:flex items-center gap-2 bg-[#EBD8B8] text-stone-800 px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-[#E2CCAA] transition-all hover:shadow-md active:scale-95 font-sans"
            >
              <PlayCircle size={14} />
              CLASE GRATIS
            </button>
            <Link to="/contacto#contacto-formulario" className="hidden md:block bg-[#3A4A3E] text-stone-100 px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-[#2A3A2E] transition-all hover:shadow-lg active:scale-95 font-sans">
              CONTACTAR
            </Link>

            
            <button 
              className="lg:hidden p-2 text-stone-800 focus:outline-none relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved OUTSIDE header for absolute opacity */}
      <div 
        className={`fixed inset-0 bg-[#F9F7F4] z-[9999] flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button 
          className="absolute top-8 right-8 p-2 text-stone-800 hover:rotate-90 transition-transform duration-300"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center space-y-10 px-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl md:text-3xl uppercase tracking-[0.3em] font-serif transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${isActive(link.path) ? 'text-stone-900 underline underline-offset-12' : 'text-stone-400'}`}
              style={{ transitionDelay: `${idx * 75}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
             <button 
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              className="bg-[#EBD8B8] text-stone-800 px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] font-sans mt-8 transition-all animate-pulse"
            >
              CLASE VIRTUAL GRATIS
            </button>

            <Link 
              to="/contacto#contacto-formulario" 
              onClick={() => setIsOpen(false)} 
              className={`text-[#3A4A3E] px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] font-sans transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              CONTACTANOS
            </Link>

        </div>

        <div className="absolute bottom-12 text-stone-400 text-[10px] tracking-[0.4em] font-sans uppercase">
          El arte del movimiento consciente
        </div>
      </div>
    </>
  );
};

export default Navbar;
