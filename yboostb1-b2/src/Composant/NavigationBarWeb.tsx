import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, X, Menu } from 'lucide-react';
import LogoC from '../assets/cocktails_icon.png';

const NAV_LINKS = [
  { to: '/home', label: 'Accueil' },
  { to: '/list', label: 'Cocktails' },
  { to: '/apropos', label: 'À propos' },
];

const NavigationBarWeb: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loadingRandom, setLoadingRandom] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleRandomCocktail = async () => {
    setLoadingRandom(true);
    try {
      const res = await fetch('/cocktails/random');
      if (!res.ok) throw new Error();
      const data = await res.json();
      navigate(`/cocktails/${data.Id}`);
    } catch {
      /* silent */
    } finally {
      setLoadingRandom(false);
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 group">
            <img src={LogoC} alt="ShakeLabs" className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-poppins font-semibold text-white text-lg tracking-wide">ShakeLabs</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to}>
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all duration-200 ${
                    isActive(to)
                      ? 'text-white bg-zinc-800'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {label}
                  {isActive(to) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500"
                    />
                  )}
                </motion.span>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRandomCocktail}
              disabled={loadingRandom}
              title="Cocktail aléatoire"
              className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-200 disabled:opacity-50"
            >
              <Shuffle size={15} className={loadingRandom ? 'animate-spin' : ''} />
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(v => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 text-white"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center gap-2 pt-16"
          >
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setIsMenuOpen(false)}>
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className={`text-2xl font-poppins font-medium px-8 py-4 rounded-2xl transition-colors ${
                    isActive(to) ? 'text-amber-400' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {label}
                </motion.div>
              </Link>
            ))}

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleRandomCocktail}
              disabled={loadingRandom}
              className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black font-poppins font-semibold disabled:opacity-50"
            >
              <Shuffle size={16} className={loadingRandom ? 'animate-spin' : ''} />
              Cocktail aléatoire
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBarWeb;
