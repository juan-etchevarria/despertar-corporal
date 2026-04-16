import React from 'react';

const PhilosophyPage = () => {
  const stats = [
    { label: "PRACTICANTES", value: "17k" },
    { label: "AÑOS DE GUÍA", value: "12+" },
    { label: "SESIONES GRABADAS", value: "400+" },
    { label: "FILOSOFÍA", value: "Zen" }
  ];

  const pillars = [
    {
      title: "Presencia",
      description: "Habitar el instante presente a través de la respiración consciente y el anclaje físico.",
      icon: "🌿"
    },
    {
      title: "Fluidez",
      description: "Encontrar la gracia en el esfuerzo, permitiendo que el cuerpo se mueva sin resistencia mental.",
      icon: "✨"
    },
    {
      title: "Integración",
      description: "Llevar la calma de la esterilla a cada decisión y momento de la vida cotidiana.",
      icon: "🧘"
    }
  ];

  return (
    <main className="font-serif text-[#1C1C1C]">
      {/* Hero Philosophy */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-sans">Nuestra Esencia</span>
          <h1 className="text-6xl md:text-8xl font-light leading-tight italic">
            El movimiento <br /> es una <br /> conversación <br /> silenciosa.
          </h1>
          <p className="text-lg text-stone-600 max-w-md font-sans leading-relaxed">
            Entiendo el cuerpo no como una herramienta de rendimiento, sino como un templo de consciencia. Mi práctica se aleja de la exigencia externa para reconectar con el ritmo natural de nuestra propia biología.
          </p>
          <button className="text-xs font-bold uppercase tracking-widest border-b border-stone-800 pb-2">Descubre el método</button>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
            alt="Instructora" 
            className="rounded-[2rem] shadow-2xl"
          />
          <div className="absolute -bottom-10 -left-10 bg-[#EBD8B8] p-8 max-w-xs rounded-2xl shadow-xl hidden md:block border border-stone-200/50">
            <p className="italic text-stone-800 leading-relaxed">
              "La quietud no es la ausencia de movimiento, sino la presencia en la esencia del movimiento mismo."
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="bg-stone-100/50 py-32 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl mb-8">Una comunidad de 17,000 personas unidas por el bienestar.</h2>
            <p className="text-stone-500 font-sans leading-relaxed max-w-lg">
              Lo que comenzó como una búsqueda personal se ha convertido en un refugio digital para miles de almas que buscan equilibrio en un mundo saturado de ruido.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-center md:text-left">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-light mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-sans font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-sans font-bold">Pilares</span>
          <h2 className="text-4xl italic">Los tres estados del Despertar</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`p-12 rounded-3xl transition-all duration-500 hover:shadow-xl ${idx === 1 ? 'bg-[#3A4A3E] text-stone-100 shadow-2xl scale-105' : 'bg-white border border-stone-100 shadow-sm'}`}>
              <div className="text-3xl mb-6">{pillar.icon}</div>
              <h3 className="text-2xl mb-4 italic">{pillar.title}</h3>
              <p className={`font-sans text-sm leading-relaxed ${idx === 1 ? 'text-stone-300' : 'text-stone-500'}`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PhilosophyPage;
