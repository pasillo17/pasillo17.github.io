import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [hasClicked, setHasClicked] = useState(false);

  // Detectamos el scroll para resetear el botón si vuelven arriba
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setHasClicked(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = () => {
    setHasClicked(true);
    // Esperamos un momento para que lean el nuevo texto y luego bajamos a la sección "Sobre mí"
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-brand-dark"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1b4b] to-brand-dark opacity-80"></div>
      <div className="absolute inset-0 stars"></div>
      
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 md:gap-2 mb-6 md:mb-8 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-[10px] md:text-xs font-bold uppercase tracking-widest md:tracking-[0.2em] backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-blue animate-pulse"></span>
          Grabación · Mezcla · Mastering
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold leading-none mb-8 tracking-tight"
        >
          <span className="text-white block">
            <span className="md:hidden">GRABÁ. SONÁ.</span>
            <span className="hidden md:inline">GRABÁ. CREÁ.</span>
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-violet-500 text-glow block mt-2 sm:mt-0">
            <span className="md:hidden">PROFESIONAL.</span>
            <span className="hidden md:inline">SONÁ PROFESIONAL.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light"
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
            className="px-10 py-4 bg-brand-blue text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_25px_rgba(0,123,255,0.5)] hover:shadow-[0_0_45px_rgba(0,123,255,0.7)] min-w-[240px]"
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