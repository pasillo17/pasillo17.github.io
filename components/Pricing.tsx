import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mic, AudioWaveform, Disc, Crown } from 'lucide-react';
import { SERVICES } from '../constants';

const icons = {
  mic: Mic,
  waveform: AudioWaveform,
  disc: Disc,
  crown: Crown
};

const Pricing: React.FC = () => {
  const standardServices = SERVICES.slice(0, 3);
  const deluxeService = SERVICES[3];

  return (
    <section id="pricing" className="py-24 relative bg-brand-dark overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-white mb-4 uppercase tracking-widest"
        >
            SERVICIOS
        </motion.h2>
        <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-slate-500 mb-16"
        >
            Elegí el plan que mejor se adapte a tu proyecto.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {standardServices.map((service, i) => {
            const Icon = icons[service.icon];
            const isRecommended = service.recommended;
            const isUltra = service.id === 'premium';
            
            // Construimos el link de WhatsApp personalizado
            const whatsappMessage = encodeURIComponent(`Buenas! Quiero consultar sobre el plan ${service.title}`);
            const whatsappUrl = `https://wa.me/5492216248756?text=${whatsappMessage}`;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ 
                    y: 0,
                    translateY: isRecommended || isUltra ? [0, -12, 0] : [0, -6, 0] // Floating effect
                }}
                transition={{ 
                    delay: i * 0.1,
                    translateY: {
                        duration: isUltra ? 5 : 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i * 0.2) + 1
                    }
                }}
                className={`glass-panel p-10 rounded-3xl flex flex-col items-center transition-all duration-500 relative ${
                    isUltra
                    ? 'platinum-pulse bg-white/5 z-20 scale-105'
                    : isRecommended 
                        ? 'neon-pulse scale-105 z-10 border-brand-blue' 
                        : 'hover:border-brand-blue/30 hover:bg-white/5'
                }`}
              >
                {/* Background Effects Container */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                     {/* Standard Plan Rotating Glow */}
                     {isRecommended && (
                      <div className="absolute inset-0 z-0">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,123,255,0.1)_180deg,transparent_360deg)] opacity-50"
                        />
                      </div>
                    )}

                    {/* Ultra Premium Sheen & Static Glow (Non-rotating) */}
                    {isUltra && (
                       <div className="absolute inset-0 z-0">
                          {/* Soft white center glow */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/5 blur-[60px] rounded-full"></div>
                          
                          {/* Moving Sheen Effect */}
                          <motion.div 
                            initial={{ x: '-150%', opacity: 0 }}
                            animate={{ x: '150%', opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 blur-md"
                          />
                       </div>
                    )}
                </div>

                {isRecommended && (
                  <div className="absolute -top-4 bg-brand-blue text-white text-[10px] px-4 py-1 rounded-full font-black uppercase tracking-widest shadow-lg shadow-brand-blue/50 z-20">
                    MÁS POPULAR
                  </div>
                )}
                
                {isUltra && (
                  <div className="absolute -top-4 bg-white text-black text-[10px] px-4 py-1 rounded-full font-black uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20 flex items-center gap-1">
                    <span className="animate-pulse">★</span> EXCLUSIVO
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col items-center w-full h-full">
                    <Icon className={`w-12 h-12 mb-6 ${
                        isUltra 
                        ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
                        : isRecommended 
                            ? 'text-brand-blue drop-shadow-[0_0_15px_rgba(0,123,255,0.6)]' 
                            : 'text-slate-400 group-hover:text-brand-blue'
                    }`} />
                    
                    <h3 className={`text-2xl font-display font-bold mb-2 ${isUltra ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]' : 'text-white'}`}>{service.title}</h3>
                    <p className="text-slate-400 mb-6 text-sm h-10">{service.subtitle}</p>
                    
                    <div className={`text-4xl font-bold mb-8 font-display ${isUltra ? 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]' : 'text-white'}`}>
                      <span>{service.price}</span>
                      <span className="text-sm text-slate-500 font-normal font-body">{service.priceUnit}</span>
                    </div>
                    
                    <ul className="text-slate-300 text-sm space-y-4 mb-10 text-left w-full flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 group/item">
                          <CheckCircle2 size={16} className={`flex-shrink-0 transition-colors ${
                              isUltra 
                              ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]' 
                              : isRecommended 
                                ? 'text-brand-blue drop-shadow-[0_0_5px_rgba(0,123,255,0.5)]' 
                                : 'text-brand-blue group-hover/item:text-blue-400'
                            }`} />
                          <span className={`${feature.includes('DT.Bilardo') ? "font-bold text-base " + (isUltra ? "text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" : "text-brand-blue drop-shadow-[0_0_8px_rgba(0,123,255,0.8)]") : ""} group-hover/item:text-white transition-colors`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 rounded-xl font-bold transition-all text-center ${
                        isUltra
                        ? 'bg-white hover:bg-slate-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_50px_rgba(255,255,255,0.9)]'
                        : isRecommended
                            ? 'bg-brand-blue hover:bg-blue-600 text-white shadow-[0_0_30px_rgba(0,123,255,0.5)] hover:shadow-[0_0_50px_rgba(0,123,255,0.8)]' 
                            : 'border border-white/10 hover:bg-white/10 text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    }`}>
                      {service.ctaText}
                    </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deluxe Plan */}
        {deluxeService && (() => {
            const Icon = icons[deluxeService.icon];
            const whatsappMessage = encodeURIComponent(`Buenas! Quiero consultar sobre el plan ${deluxeService.title}`);
            const whatsappUrl = `https://wa.me/5492216248756?text=${whatsappMessage}`;

            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto relative group"
                >
                    {/* Ambient Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    
                    <div className="relative bg-[#050505] ring-1 ring-white/10 rounded-[2rem] overflow-hidden">
                        
                        {/* Top Spotlight */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row">
                            
                            {/* Left Panel: Identity & Price */}
                            <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/5 bg-white/[0.02] relative">
                                {/* Animated Crown */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-yellow-500 blur-[30px] opacity-20 animate-pulse"></div>
                                    <Icon className="w-16 h-16 text-yellow-400 relative z-10 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                                </div>

                                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 tracking-tight">{deluxeService.title}</h3>
                                <p className="text-yellow-500/80 font-medium uppercase tracking-widest text-xs mb-8">{deluxeService.subtitle}</p>

                                <div className="mb-8">
                                    <span className="text-4xl md:text-5xl font-display font-bold text-white block">{deluxeService.price}</span>
                                    <span className="text-slate-500 text-sm">{deluxeService.priceUnit}</span>
                                </div>

                                <a 
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 px-8 rounded-xl font-bold bg-yellow-500 hover:bg-yellow-400 text-black transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                                >
                                    {deluxeService.ctaText}
                                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>

                            {/* Right Panel: The Experience */}
                            <div className="w-full md:w-3/5 p-6 md:p-12 bg-gradient-to-br from-transparent to-white/[0.02]">
                                <h4 className="text-lg md:text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-yellow-500"></span>
                                    LA EXPERIENCIA COMPLETA
                                </h4>
                                
                                <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                                    No es solo una grabación, es el inicio de tu carrera profesional. 
                                    Accedé a un equipo de trabajo dedicado exclusivamente a tu visión artística.
                                </p>

                                <div className="grid grid-cols-1 gap-4">
                                    {deluxeService.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 group/item">
                                            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                                feature.includes('DT.Bilardo') 
                                                ? 'bg-blue-500 text-black shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                                                : 'bg-yellow-500/20 text-yellow-500'
                                            }`}>
                                                <CheckCircle2 size={12} strokeWidth={4} />
                                            </div>
                                            <div>
                                                <span className={`text-sm md:text-base transition-colors ${
                                                    feature.includes('DT.Bilardo') 
                                                    ? 'text-white font-bold drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]' 
                                                    : 'text-slate-300 group-hover/item:text-white'
                                                }`}>
                                                    {feature}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            );
        })()}

      </div>
    </section>
  );
};

export default Pricing;