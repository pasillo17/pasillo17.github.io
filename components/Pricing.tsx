import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Mic,
  AudioWaveform,
  Disc,
  Crown,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "../constants";

const icons = {
  mic: Mic,
  waveform: AudioWaveform,
  disc: Disc,
  crown: Crown,
};

// Colors mapping for modern look
const cardStyles = {
  basic: {
    base: "border-slate-800 bg-slate-900/50",
    hover:
      "hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    icon: "text-blue-400",
    button: "bg-slate-800 text-white hover:bg-slate-700",
    text: "text-slate-300",
    glow: "from-blue-500/10 to-transparent",
  },
  standard: {
    base: "border-brand-blue bg-[#0c1222]",
    hover: "hover:shadow-[0_0_50px_rgba(0,123,255,0.3)]",
    icon: "text-brand-blue",
    button:
      "bg-brand-blue text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(0,123,255,0.5)]",
    text: "text-white",
    glow: "from-brand-blue/20 to-transparent",
    badge: "bg-brand-blue text-white",
  },
  premium: {
    base: "border-cyan-500/50 bg-slate-900/50",
    hover: "hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
    icon: "text-cyan-400",
    button:
      "bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    text: "text-slate-200",
    glow: "from-cyan-500/10 to-transparent",
    badge: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  },
};

const Pricing: React.FC = () => {
  const standardServices = SERVICES.slice(0, 3);
  const deluxeService = SERVICES[3];

  return (
    <section
      id="pricing"
      className="py-32 relative bg-[#030509] overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Sparkles size={16} className="text-brand-blue" />
            <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">
              Elegí tu plan
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tight"
          >
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">
              Servicios
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:px-8">
          {standardServices.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const styleId = service.id as keyof typeof cardStyles;
            const style = cardStyles[styleId];

            const isRecommended = service.recommended;
            const isUltra = service.id === "premium";

            const whatsappMessage = encodeURIComponent(
              `Buenas! Quiero consultar sobre el plan ${service.title}`,
            );
            const whatsappUrl = `https://wa.me/5492216248756?text=${whatsappMessage}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-[2rem] border backdrop-blur-xl p-8 flex flex-col transition-all duration-300 ${style.base} ${style.hover} ${isRecommended ? "md:-mt-8 md:mb-8 scale-105 z-10" : "z-0"}`}
              >
                {/* Glow behind card */}
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${style.glow} opacity-50 rounded-[2rem] pointer-events-none`}
                ></div>

                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-20 whitespace-nowrap shadow-[0_0_20px_rgba(0,123,255,0.4)] animate-bounce border border-brand-blue/50 bg-brand-blue text-white">
                    <Zap size={12} className="fill-white" /> MÁS POPULAR
                  </div>
                )}

                {isUltra && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-20 whitespace-nowrap ${style.badge}`}
                  >
                    EXCLUSIVO
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl`}
                    >
                      <Icon
                        strokeWidth={1.5}
                        className={`w-7 h-7 ${style.icon}`}
                      />
                    </div>

                    <h3 className="text-2xl font-display font-black text-white tracking-widest mb-1">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm h-10">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="mb-8 border-b border-white/10 pb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white font-display tracking-tighter">
                        {service.price}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">
                      {service.priceUnit}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div
                          className={`mt-0.5 rounded-full p-1 bg-white/5 border border-white/10 transition-colors`}
                        >
                          <Check
                            size={12}
                            className={style.icon}
                            strokeWidth={3}
                          />
                        </div>
                        <span
                          className={`text-sm tracking-wide leading-tight ${style.text}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto w-full py-4 rounded-xl font-bold tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 group ${style.button}`}
                  >
                    {service.ctaText}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deluxe Plan (Horizontal layout) */}
        {deluxeService &&
          (() => {
            const Icon = icons[deluxeService.icon as keyof typeof icons];
            const whatsappMessage = encodeURIComponent(
              `Buenas! Quiero consultar sobre el plan ${deluxeService.title}`,
            );
            const whatsappUrl = `https://wa.me/5492216248756?text=${whatsappMessage}`;

            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto mt-16 relative group"
              >
                {/* Golden Glow Backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700]/30 via-[#FACC15]/30 to-[#FFD700]/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="relative border border-[#FACC15]/30 bg-gradient-to-b from-[#1a1500] to-[#0A0800] rounded-[2.5rem] overflow-hidden backdrop-blur-md shadow-2xl">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-5/12 p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#FACC15]/20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] relative">
                      {/* Golden ray */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FACC15]/10 to-transparent pointer-events-none"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-[#FACC15]/10 flex items-center justify-center border border-[#FACC15]/30 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                            <Icon className="w-8 h-8 text-[#FACC15]" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-display font-black text-white tracking-widest">
                              {deluxeService.title}
                            </h3>
                            <div className="text-[#FACC15] text-xs font-bold tracking-[0.2em] uppercase">
                              {deluxeService.subtitle}
                            </div>
                          </div>
                        </div>

                        <div className="mb-8">
                          <span className="text-5xl font-display font-black text-white tracking-tighter">
                            {deluxeService.price}
                          </span>
                          <span className="text-slate-500 text-sm font-medium tracking-widest uppercase block mt-1">
                            {deluxeService.priceUnit}
                          </span>
                        </div>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black hover:opacity-90 transition-all uppercase tracking-widest flex items-center justify-center gap-2 group/btn shadow-[0_0_30px_rgba(250,204,21,0.4)]"
                        >
                          {deluxeService.ctaText}
                          <ArrowRight
                            size={18}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="w-full md:w-7/12 p-10 relative">
                      {/* Decorative elements */}
                      <div className="absolute right-10 top-10 w-32 h-32 bg-[#FACC15]/5 rounded-full blur-2xl pointer-events-none"></div>

                      <h4 className="text-sm font-black text-[#FACC15] tracking-[0.2em] mb-8 flex items-center gap-4 uppercase">
                        <span className="h-[1px] flex-grow bg-[#FACC15]/30"></span>
                        La Experiencia Completa
                        <span className="h-[1px] flex-grow bg-[#FACC15]/30"></span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {deluxeService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/30 flex items-center justify-center shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                              <Check
                                size={12}
                                strokeWidth={3}
                                className="text-[#FACC15]"
                              />
                            </div>
                            <span
                              className={`text-sm leading-snug font-medium tracking-wide ${
                                feature.includes("DT.Bilardo")
                                  ? "text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                  : "text-slate-300"
                              }`}
                            >
                              {feature}
                            </span>
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
