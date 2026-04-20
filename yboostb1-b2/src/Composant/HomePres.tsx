import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Heart } from 'lucide-react';
import cock from '../assets/cock.jpeg';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Recettes authentiques',
    desc: 'Des classiques intemporels aux créations contemporaines, triés sur le volet.',
  },
  {
    icon: Globe,
    title: 'Inspirations mondiales',
    desc: 'Cocktails venus des quatre coins du monde, adaptés à tous les niveaux.',
  },
  {
    icon: Heart,
    title: 'Pour tous',
    desc: 'Que vous soyez débutant ou barman confirmé, chaque recette est accessible.',
  },
];

const HomePres: React.FC = () => (
  <section id="mission" className="bg-zinc-950 py-24 px-6 sm:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-amber-400 font-poppins text-sm font-medium tracking-widest uppercase mb-4">
          Notre philosophie
        </p>
        <h2 className="font-poppins font-bold text-3xl sm:text-5xl text-white leading-tight max-w-2xl mx-auto">
          Plus qu'un cocktail,{' '}
          <span className="text-amber-400">une expérience</span>
        </h2>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src={cock}
              alt="Cocktail artisanal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 bg-amber-500 text-zinc-950 font-poppins font-bold px-5 py-3 rounded-2xl shadow-xl text-sm">
            600+ recettes
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h3 className="font-poppins font-semibold text-2xl sm:text-3xl text-white">
            Notre mission
          </h3>
          <p className="font-poppins font-light text-zinc-400 text-base sm:text-lg leading-relaxed">
            Chez ShakeLabs, nous croyons que chaque cocktail raconte une histoire. Notre passion pour les boissons d'exception est née d'une idée simple : créer un espace où l'art de la mixologie serait célébré et partagé avec tous.
          </p>
          <p className="font-poppins font-light text-zinc-400 text-base sm:text-lg leading-relaxed">
            Faire découvrir — ou redécouvrir — le plaisir de savourer un bon cocktail, en proposant des recettes accessibles et des inspirations venues du monde entier.
          </p>
          <div className="w-12 h-0.5 bg-amber-500" />
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-3 gap-6">
        {FEATURES.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-6 hover:border-amber-500/30 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
              <Icon size={18} className="text-amber-400" />
            </div>
            <h4 className="font-poppins font-semibold text-white mb-2">{title}</h4>
            <p className="font-poppins font-light text-zinc-400 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HomePres;
