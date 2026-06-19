import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import { COURSES } from '../constants';

const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-brand-blue selection:text-white pb-20">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/20 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navbar */}
      <div className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-lg border-b border-white/5 px-6 py-4 flex items-center justify-between">
         <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <ArrowLeft size={18} />
            </div>
            <span className="font-medium text-sm tracking-wide hidden sm:inline">VOLVER AL INICIO</span>
          </Link>
          <div className="text-sm font-bold tracking-widest text-slate-500">PASILLO 17 ACADEMY</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <motion.h5 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4"
            >
                Formación Profesional
            </motion.h5>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
            >
                Cursos para Artistas y Productores
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
                Lleva tu carrera al siguiente nivel con conocimientos prácticos y directos al grano. 
                Sin relleno, solo lo que necesitas saber para triunfar en la industria.
            </motion.p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {COURSES.map((course, index) => (
                <motion.div 
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-colors group flex flex-col md:flex-row"
                >
                    {/* Image */}
                    <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                        <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r"></div>
                        <div className="absolute bottom-4 left-4 md:top-4 md:left-4">
                            <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                {course.price}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{course.title}</h3>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                {course.description}
                            </p>
                            
                            <ul className="space-y-2 mb-6">
                                {course.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                        <Check size={16} className="text-brand-blue mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button disabled className="w-full py-3 bg-white/5 text-slate-400 rounded-lg font-bold text-sm tracking-widest cursor-not-allowed flex items-center justify-center gap-2 border border-white/5">
                            PRÓXIMAMENTE...
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default CoursesPage;
