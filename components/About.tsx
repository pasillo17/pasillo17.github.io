import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-[#030509]">
      {/* Top Gradient Fade (Transition from Hero) */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#030509] to-transparent z-10 pointer-events-none"></div>

      {/* Ambient orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue to-teal-500 opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-brand-blue">✦</span>
            <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">
              Productor & Beatmaker
            </span>
          </div>
          <h2 className="text-5xl font-display font-black mb-8 text-white uppercase tracking-tighter">
            ¿QUIÉN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">
              SOY?
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-6 font-medium">
            Me llamo Alejo, y como productor musical se me conoce como{" "}
            <span className="text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Karim ABL
            </span>
            . Empecé a escribir y grabar mis propias canciones a los 13 años.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6 font-medium">
            A los 19 tomé la decisión de empezar a hacer mis propios beats y
            subirlos a YouTube, desarrollando mi propio sonido. A los pocos
            meses, ese canal me abrió las puertas para trabajar con grandes
            artistas de la industria.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
            En 2025, después de muchas producciones, firmé con{" "}
            <span className="text-brand-blue font-black drop-shadow-[0_0_15px_rgba(0,123,255,0.5)]">
              Universal Music Group
            </span>{" "}
            y abrí mi propio estudio comercial,{" "}
            <span className="text-brand-blue font-black drop-shadow-[0_0_15px_rgba(0,123,255,0.5)]">
              Pasillo17
            </span>
            , donde quiero ayudar artistas y{" "}
            <span className="text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              construir carreras musicales
            </span>
            .
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-white/10 bg-[#0c1222] p-8 rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-brand-blue/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-5xl font-display font-black text-white block mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(0,123,255,0.4)]">
                80M+
              </span>
              <p className="relative z-10 text-xs text-brand-blue uppercase font-bold tracking-widest">
                Vistas
              </p>
            </div>
            <div className="border border-white/10 bg-[#0c1222] p-8 rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-5xl font-display font-black text-white block mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                75+
              </span>
              <p className="relative z-10 text-xs text-cyan-400 uppercase font-bold tracking-widest">
                Producciones
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade (Transition to Portfolio) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030509] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default About;
