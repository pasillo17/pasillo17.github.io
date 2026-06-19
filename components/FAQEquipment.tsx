import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Settings2, Ear, Lightbulb } from "lucide-react";
import { FAQS, EQUIPMENT } from "../constants";

const icons = {
  settings: Settings2,
  ear: Ear,
  light: Lightbulb,
};

const FAQEquipment: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-32 bg-[#030509] overflow-hidden relative">
      {/* Background FX */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* FAQ Section */}
        <div className="mb-24 pb-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 relative z-10">
              <span className="text-yellow-500">?</span>
              <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">
                Dudas
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase mb-2">
              PREGUNTAS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">
                FRECUENTES
              </span>
            </h2>
          </div>

          <div className="space-y-4 relative z-10 max-w-4xl">
            {FAQS.map((faq) => (
              <motion.div
                key={faq.id}
                className="bg-[#0c1222] border border-white/10 rounded-[1.5rem] overflow-hidden hover:border-brand-blue/30 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex justify-between items-center w-full p-6 text-left text-white font-bold hover:bg-white/5 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${openFaq === faq.id ? "rotate-180 text-brand-blue" : "text-slate-500"}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 relative z-10">
              <span className="text-brand-blue">✺</span>
              <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">
                Hardware
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase mb-2">
              EL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                ESTUDIO
              </span>
            </h2>
            <div className="space-y-8 mt-12">
              {EQUIPMENT.map((item, i) => {
                const Icon = icons[item.icon];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="p-4 bg-[#0c1222] border border-white/10 rounded-2xl text-slate-400 group-hover:border-brand-blue/50 group-hover:text-brand-blue transition-all duration-300 shadow-xl group-hover:shadow-[0_0_20px_rgba(0,123,255,0.2)] flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white mb-1 tracking-wider uppercase group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-brand-blue/20 overflow-hidden shadow-[0_0_20px_rgba(0,123,255,0.15)] hover:shadow-[0_0_30px_rgba(0,123,255,0.4)] hover:border-brand-blue/60 transition-all duration-500 relative aspect-[3/4]"
            >
              {/* OPCION 1: YOUTUBE (Actualmente en uso)
                    Reemplaza "TU_ID_AQUI" por la ID de tu video de YouTube en ambos lugares del link. 
                    Ejemplo: si tu link es youtube.com/watch?v=dQw4w9WgXcQ, usa dQw4w9WgXcQ 
                */}
              <iframe
                src="https://www.youtube.com/embed/TU_ID_AQUI?autoplay=1&mute=1&loop=1&playlist=TU_ID_AQUI&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="Estudio Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 w-[300%] h-[150%] left-[-100%] top-[-25%] pointer-events-none"
                frameBorder="0"
              />

              {/* OPCION 2: DROPBOX (Recomendada para diseño premium sin logos)
                    Sube tu .mp4 a Dropbox, copia el link y cambia la parte final "?dl=0" por "?raw=1".
                    Luego borra el <iframe> de arriba, y descomenta el <video> de abajo:
                
                <video 
                    src="ENLACE_DE_DROPBOX_AQUI?raw=1" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
                */}
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://i.imgur.com/3hQmV8y.jpeg"
              alt="Mixer"
              className="rounded-2xl border border-brand-blue/20 mt-8 shadow-[0_0_20px_rgba(0,123,255,0.15)] hover:shadow-[0_0_30px_rgba(0,123,255,0.4)] hover:border-brand-blue/60 transition-all duration-500 aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQEquipment;
