import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import { useFreeClass } from '../context/FreeClassContext';
import { Play } from 'lucide-react';


const HomePage = () => {
   const navigate = useNavigate();
  const { openModal } = useFreeClass();

  const classes = [
    {
      title: "Hatha Yoga",
      category: "EQUILIBRIO",
      description: "Posturas sostenidas para fortalecer el cuerpo y calmar la fluctuación de la mente.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Vinyasa Flow",
      category: "FLUIDEZ",
      description: "Sincroniza respiración y movimiento en una danza meditativa y dinámica.",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Meditación",
      category: "QUIETUD",
      description: "Encuentra el silencio interior a través de técnicas ancestrales de observación.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <main className="font-serif text-[#1C1C1C]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-2 pb-32 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start overflow-hidden">
        <div className="order-2 lg:order-1 space-y-8 lg:space-y-10 lg:mt-12">
          <h1 className="text-6xl md:text-8xl font-light leading-tight italic">
            Yoga dinámico <br />
            <span className="text-5xl md:text-7xl">+ Conciencia</span>
          </h1>
          <div className="space-y-10">
            <p className="text-xl text-stone-600 max-w-lg leading-relaxed font-sans">
              Transforma tu energía y encuentra tu centro a través del movimiento consciente. Una práctica diseñada para elevar el alma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate('/contacto#contacto-formulario')}>CONTACTAR</Button>
              <Button variant="outline" onClick={() => navigate('/filosofia')}>MÁS INFORMACIÓN →</Button>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative h-[50vh] lg:h-auto lg:aspect-[4/5] rounded-[3.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl lg:rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" 
              alt="Práctica de Yoga"
              className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
            />
          </div>
        </div>
       </section>
      
      {/* Free Class Section */}
      <section className="bg-stone-900 py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3A4A3E]/10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-2xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-sans font-bold">Regalo de Bienvenida</span>
            <h2 className="text-4xl md:text-6xl text-[#F9F7F4] font-light leading-tight">
              Regálate una <span className="italic">pausa consciente</span>.
            </h2>
            <p className="text-lg text-stone-400 font-sans leading-relaxed">
              Obtén acceso a una clase virtual gratuita grabada exclusivamente para ti. Una introducción perfecta a nuestro método desde la comodidad de tu hogar.
            </p>
          </div>
          <button 
            onClick={openModal}
            className="group relative flex items-center justify-center bg-[#EBD8B8] hover:bg-[#E2CCAA] text-stone-900 w-48 h-48 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-[#EBD8B8]/20"
          >
            <div className="absolute inset-0 border border-stone-900/10 rounded-full animate-ping opacity-20 group-hover:block hidden"></div>
            <div className="flex flex-col items-center gap-2">
              <Play className="fill-stone-900" size={32} />
              <span className="text-[10px] uppercase font-bold tracking-widest text-center px-4 leading-tight">Obtener Clase Gratis</span>
            </div>
          </button>
        </div>
      </section>

      {/* Quote Section */}

      <section className="bg-[#EAE4DD] py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-sans font-semibold">Nuestra Esencia</span>
          <blockquote className="text-3xl md:text-5xl font-light italic text-[#3A4A3E] leading-relaxed">
            "El movimiento no es solo un cambio de lugar, es un despertar de la presencia en cada fibra de tu ser."
          </blockquote>
          <div className="w-20 h-px bg-[#3A4A3E]/30 mx-auto"></div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="max-w-7xl mx-auto px-6 py-32 space-y-16">
        <div className="flex justify-between items-end border-b border-stone-200 pb-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Clases Destacadas</h2>
            <p className="text-stone-500 font-sans">Sesiones diseñadas para cultivar el equilibrio entre la fuerza física y la serenidad mental.</p>
          </div>
          <Link to="/contacto#contacto-formulario" className="hidden md:block uppercase text-xs font-sans font-bold tracking-widest border-b border-stone-800 pb-1">Consultar Sesiones</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/90 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase font-sans">
                  {item.category}
                </div>
              </div>
              <h3 className="text-2xl mb-3">{item.title}</h3>
              <p className="text-stone-500 font-sans text-sm leading-relaxed mb-4">{item.description}</p>
              <button className="text-xs font-bold uppercase tracking-wider font-sans border-b border-transparent group-hover:border-stone-800 transition-all">Detalles ↗</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-[#EBD8B8] rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="z-10 space-y-6 max-w-xl">
            <h2 className="text-5xl md:text-7xl">Comienza tu viaje hoy mismo.</h2>
            <p className="text-stone-700 font-sans text-lg">Escríbenos para agendar tu primera sesión y descubre el potencial de tu cuerpo en movimiento.</p>
            <Button className="!bg-stone-900 !text-white" onClick={() => navigate('/contacto#contacto-formulario')}>CONTACTANOS</Button>
          </div>
          <div className="z-10 space-y-8">
            <div className="flex items-center gap-6 bg-white/30 backdrop-blur-sm p-6 rounded-2xl">
              <div className="p-3 bg-stone-900 text-white rounded-xl">📅</div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-tighter">Horarios Flexibles</h4>
                <p className="font-sans text-stone-700">Mañana, tarde y noche.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 bg-white/30 backdrop-blur-sm p-6 rounded-2xl">
              <div className="p-3 bg-stone-900 text-white rounded-xl">📍</div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-tighter">Ubicación Central</h4>
                <p className="font-sans text-stone-700">Estudio zen en el corazón de la ciudad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
