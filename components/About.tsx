import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-brand-dark">
      {/* Top Gradient Fade (Transition from Hero) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-dark to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue to-purple-600 opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
          {/* TODO: Reemplaza el src con la ruta a tu imagen local o URL. Ejemplo: src="/assets/mi-foto.jpg" */}
          <img 
            src="https://i.imgur.com/ijndmUm.jpeg" 
            alt="Productor en Pasillo17" 
            className="relative rounded-2xl border border-white/10 shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-display font-bold mb-6 text-white uppercase tracking-wider">¿QUIEN SOY?</h2>
          <div className="w-20 h-1 bg-brand-blue mb-8"></div>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Me llamo Alejo, y como productor musical se me conoce como <span className="text-white font-medium shadow-white/20 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Karim ABL</span>. Empecé a escribir y grabar mis propias canciones a los 13 años.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            A los 19 tomé la decisión de empezar a hacer mis propios beats y subirlos a YouTube, desarrollando mi propio sonido. A los pocos meses, ese canal me abrió las puertas para trabajar con grandes artistas de la industria.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            En 2025, después de muchas producciones, firmé con <span className="text-brand-blue font-bold drop-shadow-[0_0_10px_rgba(0,123,255,0.5)]">Universal Music Group</span> y abrí mi estudio <span className="text-brand-blue font-bold drop-shadow-[0_0_10px_rgba(0,123,255,0.5)]">Pasillo17</span>, donde quiero ayudar artistas y <span className="text-white font-medium shadow-white/20 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">construir carreras musicales</span>.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-brand-blue hover:bg-white/5 transition-colors duration-300">
              <span className="text-4xl font-display font-bold text-brand-blue block mb-1 drop-shadow-[0_0_10px_rgba(0,123,255,0.4)]">80M+</span>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Vistas</p>
            </div>
            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-brand-blue hover:bg-white/5 transition-colors duration-300">
              <span className="text-4xl font-display font-bold text-brand-blue block mb-1 drop-shadow-[0_0_10px_rgba(0,123,255,0.4)]">75+</span>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Producciones</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade (Transition to Portfolio) */}
      {/* Esto suaviza el cambio de color hacia la sección azul oscura de abajo */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050b1e] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default About;