import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Cocktail } from '../types';

const DIFFICULTY_COLOR: Record<string, string> = {
  Facile: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Moyenne: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Difficile: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
};

const CardSkeleton = () => (
  <div className="rounded-2xl overflow-hidden bg-zinc-800/40 border border-zinc-700/30 animate-pulse">
    <div className="aspect-[3/4] bg-zinc-700/40" />
    <div className="p-4 space-y-2">
      <div className="h-4 bg-zinc-700/60 rounded w-3/4" />
      <div className="h-3 bg-zinc-700/40 rounded w-1/2" />
    </div>
  </div>
);

const CocktailList: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/cocktails')
      .then(r => {
        if (!r.ok) throw new Error(`Erreur HTTP ${r.status}`);
        return r.json();
      })
      .then(data => setCocktails(data))
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : 'Erreur inconnue';
        setError(`Impossible de charger les cocktails. ${msg}`);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = cocktails.filter(c =>
    c.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 px-6 sm:px-10 lg:px-16 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-amber-400 font-poppins text-sm font-medium tracking-widest uppercase mb-2">
            Bibliothèque
          </p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-6">
            Tous les cocktails
          </h1>

          {/* Search bar */}
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Rechercher un cocktail..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700/60 text-white placeholder-zinc-500 rounded-full pl-10 pr-5 py-3 font-poppins text-sm focus:outline-none focus:border-amber-500/50 transition-colors duration-200"
            />
          </div>

          {!loading && !error && (
            <p className="text-zinc-500 font-poppins text-sm mt-3">
              {filtered.length} cocktail{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
            </p>
          )}
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {Array.from({ length: 10 }).map((_, i) => <CardSkeleton key={i} />)}
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-24">
            <div className="text-center">
              <p className="text-rose-400 font-poppins mb-2">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-amber-400 font-poppins text-sm underline"
              >
                Réessayer
              </button>
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-zinc-500 font-poppins">Aucun cocktail trouvé pour « {searchTerm} »</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          >
            {filtered.map(cocktail => (
              <motion.div
                key={cocktail.Id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Link to={`/cocktails/${cocktail.Id}`} className="block group">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/60 hover:border-amber-500/30 transition-colors duration-300"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-zinc-800">
                      {cocktail.Image ? (
                        <img
                          src={cocktail.Image}
                          alt={cocktail.Name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-zinc-800" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-3">
                      <h2 className="font-poppins font-semibold text-white text-sm leading-tight mb-1.5 line-clamp-1">
                        {cocktail.Name}
                      </h2>
                      <span className={`inline-block text-xs font-poppins font-medium px-2 py-0.5 rounded-full border ${DIFFICULTY_COLOR[cocktail.Id_difficulte] ?? 'text-zinc-400 bg-zinc-800 border-zinc-700'}`}>
                        {cocktail.Id_difficulte}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CocktailList;
