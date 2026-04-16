import React, { useState } from 'react';
import Notification from '../components/Notification';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    interes: '',
    comentarios: ''
  });

  // URL de tu Web App desplegada en Google Apps Script
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxE53T6veiVfxGKtzlvlaSy7ALMr_UwgmJNEalKsKPxYyDzJp1kSckh_nXSpnt3oFEG/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones Manuales para evitar el popup nativo del navegador
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.telefono || !formData.interes) {
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

      setNotification({ message: '¡Gracias! Hemos recibido tu solicitud correctamente.', type: 'success' });
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        interes: '',
        comentarios: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setNotification({ message: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-20 font-serif text-[#1C1C1C]">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        {/* Left Column: Text & Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-light italic leading-tight">
              Da el primer paso hacia tu bienestar
            </h1>
            <p className="text-xl text-stone-600 font-sans leading-relaxed max-w-md">
              Encontremos juntos el ritmo que tu cuerpo necesita. Escríbenos para consultas sobre nuestros programas, retiros o sesiones privadas.
            </p>
          </div>

          <div className="space-y-8 pt-8 font-sans">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-xl">✉️</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Email</p>
                <p className="text-lg italic font-serif">hola@despertarcorporal.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-xl">📸</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Instagram</p>
                <p className="text-lg italic font-serif">@despertarcorporal</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg grayscale">
            <img 
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200" 
              alt="Estudio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div id="contacto-formulario" className="bg-[#F3EFEA] p-8 md:p-16 rounded-[3rem] shadow-sm border border-stone-200/50">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-stone-400">Nombre</label>
                <input 
                  required
                  type="text" 
                  value={formData.nombre}
                  placeholder="Tu nombre..."
                  className="w-full bg-transparent border-b border-stone-300 py-3 italic focus:outline-none focus:border-[#3A4A3E] transition-colors"
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-stone-400">Apellido</label>
                <input 
                  required
                  type="text" 
                  value={formData.apellido}
                  placeholder="Tu apellido..."
                  className="w-full bg-transparent border-b border-stone-300 py-3 italic focus:outline-none focus:border-[#3A4A3E] transition-colors"
                  onChange={(e) => setFormData({...formData, apellido: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-stone-400">Correo Electrónico</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  placeholder="hola@ejemplo.com"
                  className="w-full bg-transparent border-b border-stone-300 py-3 italic focus:outline-none focus:border-[#3A4A3E] transition-colors"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-stone-400">Teléfono</label>
                <input 
                  required
                  type="tel" 
                  value={formData.telefono}
                  placeholder="+34 000 000 000"
                  className="w-full bg-transparent border-b border-stone-300 py-3 italic focus:outline-none focus:border-[#3A4A3E] transition-colors"
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-stone-400">Interés Principal</label>
              <select 
                required
                value={formData.interes}
                className="w-full bg-transparent border-b border-stone-300 py-3 italic focus:outline-none focus:border-[#3A4A3E] transition-colors appearance-none"
                onChange={(e) => setFormData({...formData, interes: e.target.value})}
              >
                <option value="">Selecciona una opción</option>
                <option value="Sesiones Privadas">Sesiones Privadas</option>
                <option value="Programas de Bienestar">Programas de Bienestar</option>
                <option value="Retiros y Talleres">Retiros y Talleres</option>
                <option value="Otros">Otros</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-stone-400">Tu Mensaje</label>
              <textarea 
                rows="4"
                value={formData.comentarios}
                placeholder="Cuéntanos un poco más sobre ti..."
                className="w-full bg-transparent border-b border-stone-300 py-3 italic focus:outline-none focus:border-[#3A4A3E] transition-colors resize-none"
                onChange={(e) => setFormData({...formData, comentarios: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className={`w-full bg-[#3A4A3E] text-stone-100 py-6 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs transition-all flex justify-center items-center gap-4 group ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#2A3A2E]'}`}
            >
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
              {!loading && <span className="group-hover:translate-x-2 transition-transform">→</span>}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
