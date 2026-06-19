import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const [hasClicked, setHasClicked] = useState(false);

  // Detectamos el scroll para resetear el botón si vuelven arriba
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setHasClicked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    setHasClicked(true);
    // Esperamos un momento para que lean el nuevo texto y luego bajamos a la sección "Sobre mí"
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#030509]">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24] to-[#030509] opacity-80"></div>
      <div className="absolute inset-0 stars"></div>

      {/* Glow Centers */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            Grabación · Mezcla · Mastering
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-black leading-none mb-8 tracking-tighter uppercase"
        >
          <span className="text-white block drop-shadow-2xl">
            <span className="md:hidden">GRABÁ. SONÁ.</span>
            <span className="hidden md:inline">GRABÁ. CREÁ.</span>
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-400 to-cyan-400 block mt-2 sm:mt-0 drop-shadow-[0_0_30px_rgba(0,123,255,0.3)]">
            <span className="md:hidden">PROFESIONAL.</span>
            <span className="hidden md:inline">SONÁ PROFESIONAL.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium tracking-wide"
        >
          Desde La Plata para el Mundo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={handleButtonClick}
            className="px-10 py-5 bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-full font-bold tracking-widest text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,123,255,0.4)] hover:shadow-[0_0_50px_rgba(0,123,255,0.6)] min-w-[240px] uppercase"
          >
            <AnimatePresence mode="wait">
              {!hasClicked ? (
                <motion.span
                  key="default"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="block"
                >
                  RESERVAR SESIÓN
                </motion.span>
              ) : (
                <motion.span
                  key="alt"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="block"
                >
                  ANTES MIRÁ
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 inset-x-0 flex justify-center"
      >
        <ChevronDown className="text-slate-500 w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
