import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import FondH from '../assets/Fond3.png';

const HomeHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden" aria-label="Présentation ShakeLabs">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${FondH})` }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-amber-400 font-poppins text-sm font-medium tracking-widest uppercase mb-4">
            Bienvenue sur ShakeLabs
          </p>
          <h1 className="font-poppins font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
            L'art du cocktail,{' '}
            <span className="text-amber-400">réinventé.</span>
          </h1>
          <p className="font-poppins font-light text-zinc-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Des classiques revisités aux créations originales — chaque recette raconte une histoire.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/list')}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-poppins font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              Explorer les recettes
              <ChevronRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#mission')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-zinc-800/60 hover:bg-zinc-700/60 backdrop-blur-sm text-white font-poppins font-medium px-7 py-3.5 rounded-full border border-zinc-700/60 transition-all duration-200"
            >
              Notre mission
              <ArrowDown size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 sm:right-12 flex flex-col items-center gap-2 text-zinc-500"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-zinc-500 mx-auto" />
        <span className="text-xs font-poppins tracking-widest rotate-90 mt-1">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default HomeHero;
