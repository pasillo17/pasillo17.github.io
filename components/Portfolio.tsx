import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTISTS, RELEASES } from '../constants';

// Helper to convert HEX to RGBA for the shadow effect
const hexToRgba = (hex: string, alpha: number) => {
    let r = 0, g = 0, b = 0;
    // Remove # if present
    hex = hex.replace('#', '');
    
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Portfolio: React.FC = () => {
  // Duplicamos el array varias veces para asegurar un loop fluido en pantallas grandes
  const carouselReleases = [...RELEASES, ...RELEASES, ...RELEASES];

  return (
    <section id="portfolio" className="relative py-24 bg-[#050b1e] overflow-hidden">
      
      {/* Top Transition Gradient (Connects with About) */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-dark to-transparent z-10 pointer-events-none"></div>

      {/* Background FX for Artists Section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none">
          <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
                rotate: [0, 10, -10, 0]
            }}
            transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-gradient-to-r from-brand-blue via-purple-600 to-brand-blue rounded-full blur-[100px] opacity-20"
          />
      </div>

      {/* Artist Trust Section */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 mb-20 pb-20 border-b border-white/10 pt-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
        >
             <h2 className="text-3xl font-display font-bold mb-4 text-white tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,123,255,0.3)]">ARTISTAS QUE YA CONFIARON</h2>
             <p className="text-slate-500 mb-16 relative z-10">Trabajando con grandes exponentes de la escena actual.</p>
        </motion.div>
       
        {/* Adjusted gap for mobile (gap-6 instead of gap-12) to keep circles closer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto relative z-10">
          {ARTISTS.map((artist, i) => (
            <motion.div 
                key={artist.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="relative p-[3px] rounded-full group-hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(225,48,108,0.4)]">
                {/* Instagram Style Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] animate-spin-slow duration-[8s]"></div>
                
                {/* Inner background to separate image from border */}
                <div className="absolute inset-[3px] rounded-full bg-brand-dark z-0"></div>
                
                <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-transparent object-cover"
                />
              </div>
              <span className="text-sm font-bold tracking-widest text-slate-300 group-hover:text-white transition-colors group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                {artist.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest Releases Carousel */}
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end mb-4 gap-6 pb-4">
          <div>
            <h2 className="text-3xl font-display font-bold text-white tracking-widest uppercase mb-2">ÚLTIMOS LANZAMIENTOS</h2>
            <p className="text-slate-500">Producciones recientes hechas en el estudio.</p>
          </div>
          
          {/* Desktop Button */}
          <Link 
            to="/trabajos" 
            className="hidden md:inline-block px-8 py-3 border border-brand-blue/40 text-brand-blue hover:bg-brand-blue hover:text-white transition-all rounded-full text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(0,123,255,0.4)]"
          >
            VER MÁS TRABAJOS
          </Link>
        </div>

        {/* MARQUEE CONTAINER */}
        {/* Increased vertical padding to py-32 to accommodate the large 80px glow without clipping */}
        {/* Added -my-10 to compensate for the visual gap created by the extra padding */}
        <div className="relative w-full overflow-hidden py-32 -my-10">
          {/* Gradient Masks (Fade edges) */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#050b1e] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#050b1e] to-transparent z-20 pointer-events-none"></div>

          {/* Scrolling Track */}
          <motion.div 
            className="flex gap-8 px-6"
            animate={{ x: ["0%", "-33.33%"] }} // Adjust based on how many times we duplicated. 3 sets = move 1/3 to loop
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 60 // Slower speed
            }}
            whileHover={{ animationPlayState: "paused" }}
            style={{ width: "fit-content" }}
          >
             {carouselReleases.map((release, i) => {
                const glowColor = release.color || '#007BFF'; // Default to blue if no color
                const glowShadow = hexToRgba(glowColor, 0.4); // 40% opacity for shadow
                const isNika = release.title === 'NIKA';
                const isSponsor = release.title === 'SPONSOR';

                return (
                    <a
                        key={`${release.id}-${i}`}
                        href={release.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Pass dynamic colors as CSS variables
                        style={{
                            '--glow-color': glowColor,
                            '--glow-shadow': glowShadow,
                        } as React.CSSProperties}
                        // Large blur radius (80px) requires the container to have ample padding to avoid clipping
                        className="group relative flex-shrink-0 w-[280px] md:w-[350px] aspect-square overflow-hidden rounded-2xl bg-slate-900 border border-white/5 transition-all duration-700 hover:border-[var(--glow-color)] hover:shadow-[0_0_80px_var(--glow-shadow)] hover:-translate-y-2"
                    >
                    {/* Image container */}
                    <div className="w-full h-full relative z-0 overflow-hidden">
                        <img 
                            src={release.image} 
                            alt={release.title} 
                            className={`w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100 ${
                                isNika ? 'scale-125 group-hover:scale-[1.35]' : 'group-hover:scale-110'
                            }`}
                        />
                    </div>
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Content with Slide Up Animation */}
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20">
                        {/* Artist Name */}
                        <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1 opacity-90 drop-shadow-md">
                            {release.artist}
                        </div>

                        <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-wider mb-2 leading-none drop-shadow-md">
                            {release.title}
                        </h3>
                        
                        {/* The "Escuchar" button with dynamic color */}
                        <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                            <span 
                                style={{ backgroundColor: 'var(--glow-color)', boxShadow: '0 0 15px var(--glow-shadow)' }}
                                className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                            >
                                <Play size={12} className={`ml-0.5 ${isSponsor ? 'fill-black text-black' : 'fill-white text-white'}`} />
                            </span>
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">
                                Escuchar
                            </span>
                        </div>
                    </div>
                    </a>
                );
             })}
          </motion.div>
        </div>

        {/* Enlace a la Playlist de Spotify General - VISIBLE ONLY ON MOBILE (CENTERED BELOW) */}
        <div className="md:hidden mt-8 flex justify-center px-6">
            <Link 
                to="/trabajos" 
                className="w-full text-center px-8 py-3 border border-brand-blue/40 text-brand-blue hover:bg-brand-blue hover:text-white transition-all rounded-full text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(0,123,255,0.4)]"
            >
                VER MÁS TRABAJOS
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;