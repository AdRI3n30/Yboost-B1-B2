import React from 'react';
import { motion } from 'framer-motion';
import { GlassWater, MapPin, Mail, Phone, Sparkles } from 'lucide-react';

const TEAM_VALUES = [
  { icon: Sparkles, label: 'Passion', desc: 'La mixologie comme art de vivre.' },
  { icon: GlassWater, label: 'Authenticité', desc: 'Des recettes fidèles aux origines.' },
  { icon: MapPin, label: 'Diversité', desc: 'Inspirations des quatre coins du monde.' },
];

const Apropos: React.FC = () => (
  <main className="min-h-screen bg-zinc-950 px-6 sm:px-10 lg:px-16 pt-24 pb-20">
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
          <GlassWater size={20} className="text-amber-400" />
        </div>
        <p className="text-amber-400 font-poppins text-sm font-medium tracking-widest uppercase mb-3">
          À propos
        </p>
        <h1 className="font-poppins font-bold text-4xl sm:text-6xl text-white leading-tight mb-4">
          L'histoire de{' '}
          <span className="text-amber-400">ShakeLabs</span>
        </h1>
        <p className="text-zinc-400 font-poppins text-base sm:text-lg leading-relaxed max-w-2xl">
          Une bibliothèque de cocktails née en 2025 avec une mission simple : rendre l'art de la mixologie accessible à tous.
        </p>
      </motion.div>

      {/* Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-zinc-900/60 border border-zinc-800/60 rounded-3xl p-8 sm:p-10 mb-8"
      >
        <h2 className="font-poppins font-semibold text-white text-xl mb-6">Notre histoire</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <p className="font-poppins font-light text-zinc-400 text-base leading-relaxed">
            Chez ShakeLabs, nous croyons que chaque cocktail raconte une histoire. Notre passion pour les boissons d'exception est née d'une idée simple : créer un espace où l'art de la mixologie serait célébré et partagé avec tous.
          </p>
          <p className="font-poppins font-light text-zinc-400 text-base leading-relaxed">
            Nous sélectionnons les meilleurs ingrédients du monde entier, des spiritueux rares aux herbes cultivées localement. Chaque boisson de notre catalogue est le fruit d'une recherche approfondie et d'un respect des traditions.
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-3 gap-4 mb-8"
      >
        {TEAM_VALUES.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-900/60 border border-zinc-800/60 hover:border-amber-500/30 rounded-2xl p-6 transition-colors duration-300"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
              <Icon size={16} className="text-amber-400" />
            </div>
            <h3 className="font-poppins font-semibold text-white text-sm mb-1">{label}</h3>
            <p className="font-poppins font-light text-zinc-500 text-sm">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-zinc-900/60 border border-zinc-800/60 rounded-3xl p-8 sm:p-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <MapPin size={18} className="text-amber-400" />
          <h2 className="font-poppins font-semibold text-white text-xl">Nous contacter</h2>
        </div>
        <address className="not-italic flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:contact@shakelabs.fr"
            className="flex items-center gap-3 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 hover:border-amber-500/30 px-5 py-3 rounded-xl font-poppins text-zinc-300 hover:text-white text-sm transition-all duration-200 group"
          >
            <Mail size={15} className="text-amber-400 group-hover:scale-110 transition-transform" />
            contact@shakelabs.fr
          </a>
          <a
            href="tel:+33640552721"
            className="flex items-center gap-3 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 hover:border-amber-500/30 px-5 py-3 rounded-xl font-poppins text-zinc-300 hover:text-white text-sm transition-all duration-200 group"
          >
            <Phone size={15} className="text-amber-400 group-hover:scale-110 transition-transform" />
            +33 6 40 55 27 21
          </a>
        </address>
      </motion.div>

    </div>
  </main>
);

export default Apropos;
