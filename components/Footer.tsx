import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, Youtube } from "lucide-react";

// Icono de TikTok personalizado (SVG)
const TikTokIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="py-24 bg-[#030509] border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter">
            ¿ESTÁS LISTO PARA HACER{" "}
            <span className="text-brand-blue italic pr-2 text-glow drop-shadow-[0_0_25px_rgba(0,123,255,0.8)]">
              HISTORIA?
            </span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            Vení a Pasillo17 y dale a tu música el sonido que se merece.
            Sesiones abiertas de Lunes a Sábados.
          </p>

          <a
            href="https://wa.me/5492216248756"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-emerald-500 hover:bg-emerald-600 px-12 py-5 rounded-full text-white font-bold text-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 mb-20 group"
          >
            <MessageCircle className="fill-current" />
            ENVIAR WHATSAPP
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 text-left pt-16 border-t border-white/10">
          <div>
            {/* LOGO: Reemplaza el src con la URL de tu logo real */}
            <img
              src="https://i.imgur.com/6s2UIvX.png"
              alt="Pasillo17"
              className="h-14 mb-6 object-contain"
            />
            <p className="text-slate-500 text-sm">
              Tu estudio de grabación en el corazón de la ciudad. Equipamiento
              profesional y ambiente de primer nivel.
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">
              Navegación
            </h5>
            <ul className="text-slate-500 text-sm space-y-3">
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-blue transition-colors"
                >
                  Sobre el estudio
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-brand-blue transition-colors"
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-brand-blue transition-colors"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">
              Seguinos
            </h5>
            <div className="flex gap-4">
              {/* INSTAGRAM LINK */}
              <a
                href="https://www.instagram.com/pasillo17" /* <-- PONE TU LINK DE INSTAGRAM ACA */
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-gradient-to-tr hover:from-cyan-500 hover:via-blue-500 hover:to-blue-600 hover:text-white text-slate-400 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              {/* YOUTUBE LINK */}
              <a
                href="https://www.youtube.com/@KarimBeatz" /* <-- UPDATED LINK */
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-red-600 hover:text-white text-slate-400 transition-all duration-300"
              >
                <Youtube size={18} />
              </a>

              {/* TIKTOK LINK */}
              <a
                href="https://www.tiktok.com/@pasillo.17" /* <-- UPDATED LINK */
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-black hover:text-white hover:border-white/20 text-slate-400 transition-all duration-300"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center text-center gap-4 border border-white/5 bg-white/5 p-6 rounded-lg">
          <div className="text-slate-500 text-xs uppercase tracking-[0.3em]">
            © 2026 Pasillo17 Estudio. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
