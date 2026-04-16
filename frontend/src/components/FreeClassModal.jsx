import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, Check } from 'lucide-react';
import Notification from './Notification';

const FreeClassModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    interes: 'Clase de Yoga Gratis',
    comentarios: '',
    origen: 'Clase Gratis'
  });

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxE53T6veiVfxGKtzlvlaSy7ALMr_UwgmJNEalKsKPxYyDzJp1kSckh_nXSpnt3oFEG/exec';

  const services = ['Clase de Yoga Gratis', 'Hatha Yoga', 'Vinyasa Flow', 'Meditación'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.telefono) {
      setNotification({ message: 'Por favor, rellena todos los campos obligatorios.', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setNotification({ message: '¡Éxito! Tu clase gratis ha sido enviada a tu email.', type: 'success' });
      
      // Cerrar después de un momento
      setTimeout(() => {
        onClose();
        setNotification(null);
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            interes: 'Clase de Yoga Gratis',
            comentarios: '',
            origen: 'Clase Gratis'
        });
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
      setNotification({ message: 'Hubo un error. Por favor, inténtalo de nuevo.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#F9F7F4] w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 p-2 text-stone-400 hover:text-stone-800 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
            {/* Left Image (Desktop only) */}
            <div className="hidden md:block col-span-2 relative">
                <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                    alt="Yoga" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3A4A3E]/20"></div>
            </div>

            {/* Form Column */}
            <div className="col-span-1 md:col-span-3 p-8 md:p-12 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-serif italic text-[#3A4A3E]">Tu Clase Gratis</h2>
                    <p className="text-sm text-stone-500 font-sans">Déjanos tus datos y recibe el acceso instantáneo por correo electrónico.</p>
                </div>

                {notification && (
                    <Notification 
                        message={notification.message} 
                        type={notification.type} 
                        onClose={() => setNotification(null)} 
                    />
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[9px] uppercase tracking-widest font-sans font-bold text-stone-400">Nombre</label>
                            <input 
                                required
                                type="text" 
                                value={formData.nombre}
                                placeholder="Nombre"
                                className="w-full bg-transparent border-b border-stone-200 py-2 text-sm italic focus:outline-none focus:border-[#3A4A3E] transition-colors"
                                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] uppercase tracking-widest font-sans font-bold text-stone-400">Apellido</label>
                            <input 
                                required
                                type="text" 
                                value={formData.apellido}
                                placeholder="Apellido"
                                className="w-full bg-transparent border-b border-stone-200 py-2 text-sm italic focus:outline-none focus:border-[#3A4A3E] transition-colors"
                                onChange={(e) => setFormData({...formData, apellido: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest font-sans font-bold text-stone-400">Email</label>
                        <input 
                            required
                            type="email" 
                            value={formData.email}
                            placeholder="tu@email.com"
                            className="w-full bg-transparent border-b border-stone-200 py-2 text-sm italic focus:outline-none focus:border-[#3A4A3E] transition-colors"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest font-sans font-bold text-stone-400">Teléfono</label>
                        <input 
                            required
                            type="tel" 
                            value={formData.telefono}
                            placeholder="+34..."
                            className="w-full bg-transparent border-b border-stone-200 py-2 text-sm italic focus:outline-none focus:border-[#3A4A3E] transition-colors"
                            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        />
                    </div>

                    <div className="space-y-1 relative" ref={dropdownRef}>
                        <label className="text-[9px] uppercase tracking-widest font-sans font-bold text-stone-400">Tu Interés</label>
                        <div 
                            className="w-full border-b border-stone-200 py-2 text-sm italic cursor-pointer flex justify-between items-center"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className="text-stone-800">{formData.interes}</span>
                            <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        
                        {isDropdownOpen && (
                            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-stone-100 rounded-xl shadow-lg z-50 overflow-hidden font-sans text-xs">
                                {services.map((s) => (
                                    <div 
                                        key={s}
                                        className="px-4 py-3 hover:bg-stone-50 cursor-pointer flex justify-between items-center"
                                        onClick={() => {
                                            setFormData({...formData, interes: s});
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {s}
                                        {formData.interes === s && <Check className="w-3 h-3" />}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button 
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-[#3A4A3E] text-white py-4 rounded-full font-sans font-bold uppercase tracking-widest text-[10px] transition-all ${loading ? 'opacity-70' : 'hover:scale-[1.02] hover:shadow-lg'}`}
                    >
                        {loading ? 'Preparando tu regalo...' : 'Obtener Clase Gratis →'}
                    </button>
                </form>
                
                <p className="text-[9px] text-stone-400 text-center font-sans">
                    Al solicitarla aceptas nuestra política de privacidad.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FreeClassModal;
