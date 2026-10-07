import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Sobre mí", href: "#about", type: "anchor" },
    { name: "Lanzamientos", href: "#portfolio", type: "anchor" },
    { name: "Servicios", href: "#pricing", type: "anchor" },
    { name: "Cursos (Próximamente)", href: "/cursos", type: "route" },
    { name: "Contacto", href: "#contact", type: "anchor" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-1 group cursor-pointer"
        >
          {/* LOGO: Reemplaza el src con la URL de tu logo real */}
          <img
            src="https://i.imgur.com/6s2UIvX.png"
            alt="Pasillo17"
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,123,255,0.6)]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest items-center">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.name}
                to={link.href}
                className="relative hover:text-brand-blue transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="relative hover:text-brand-blue transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
              </a>
            ),
          )}
          <a
            href="#pricing"
            onClick={(e) => handleAnchorClick(e, "#pricing")}
            className="bg-brand-blue hover:bg-blue-600 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,123,255,0.4)] hover:shadow-[0_0_35px_rgba(0,123,255,0.7)] hover:scale-105"
          >
            RESERVAR AHORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-panel border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 text-center">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium uppercase tracking-widest hover:text-brand-blue"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setMobileOpen(false);
                      handleAnchorClick(e, link.href);
                    }}
                    className="text-sm font-medium uppercase tracking-widest hover:text-brand-blue"
                  >
                    {link.name}
                  </a>
                ),
              )}
              <a
                href="#pricing"
                onClick={(e) => {
                  setMobileOpen(false);
                  handleAnchorClick(e, "#pricing");
                }}
                className="bg-brand-blue w-full py-3 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(0,123,255,0.4)]"
              >
                RESERVAR AHORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
