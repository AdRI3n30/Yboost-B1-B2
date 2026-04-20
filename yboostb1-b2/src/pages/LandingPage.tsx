import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, GlassWater } from 'lucide-react';
import '../styles/animations.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const bubbles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 8,
        size: 4 + Math.random() * 16,
      })),
    []
  );

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden flex flex-col items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-amber-800/10 blur-3xl" />
      </div>

      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map(b => (
          <div
            key={b.id}
            className="absolute rounded-full border border-amber-500/10 bg-amber-500/5"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
              animation: `float-up ${b.duration}s ${b.delay}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Decorative corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l border-t border-amber-500/20 rounded-tl-xl" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-amber-500/20 rounded-br-xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={mounted ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'backOut' }}
          className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-8"
        >
          <GlassWater className="w-8 h-8 text-amber-400" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={mounted ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="font-poppins font-extrabold tracking-tight text-5xl sm:text-7xl text-white mb-2"
        >
          Shake
          <span className="text-amber-400">Labs</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={mounted ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-zinc-400 text-base sm:text-lg leading-relaxed mt-4 mb-10"
        >
          Explorez des centaines de recettes de cocktails.
          <br className="hidden sm:block" />
          De l'apéritif au digestif, trouvez l'inspiration.
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={mounted ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/home')}
          className="group flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-poppins font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20"
        >
          Découvrir l'expérience
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-zinc-600 text-xs mt-12"
        >
          © {new Date().getFullYear()} ShakeLabs. Tous droits réservés.
        </motion.p>
      </div>
    </div>
  );
};

export default LandingPage;
