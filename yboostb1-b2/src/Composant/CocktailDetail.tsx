import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ChefHat } from 'lucide-react';
import { CocktailDetail as CocktailDetailType } from '../types';

const DIFFICULTY_STYLE: Record<string, string> = {
  Facile: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Moyenne: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Difficile: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
};

const DetailSkeleton = () => (
  <div className="min-h-screen bg-zinc-950 px-6 sm:px-10 lg:px-16 pt-24 pb-16 animate-pulse">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
      <div className="rounded-3xl bg-zinc-800 aspect-[3/4]" />
      <div className="space-y-6 pt-4">
        <div className="h-12 bg-zinc-800 rounded-xl w-3/4" />
        <div className="h-4 bg-zinc-800 rounded w-full" />
        <div className="h-4 bg-zinc-800 rounded w-5/6" />
        <div className="h-48 bg-zinc-800 rounded-2xl" />
      </div>
    </div>
  </div>
);

const CocktailFusion: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState<CocktailDetailType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/cocktails/${id}`)
      .then(r => {
        if (!r.ok) throw new Error('Erreur de chargement.');
        return r.json();
      })
      .then(data => setCocktail(data))
      .catch(() => setError('Impossible de charger ce cocktail.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <DetailSkeleton />;

  if (error) return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-4">
      <p className="text-rose-400 font-poppins">{error}</p>
      <button onClick={() => navigate(-1)} className="text-amber-400 font-poppins text-sm underline">
        Retour
      </button>
    </div>
  );

  if (!cocktail) return null;

  const difficultyStyle = DIFFICULTY_STYLE[cocktail.Difficulte] ?? 'text-zinc-400 bg-zinc-800 border-zinc-700';

  return (
    <main className="min-h-screen bg-zinc-950 px-6 sm:px-10 lg:px-16 pt-20 pb-16" aria-label={`Détail du cocktail ${cocktail.Name}`}>
      <div className="max-w-6xl mx-auto">

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-400 hover:text-white font-poppins text-sm mb-10 transition-colors duration-200 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Retour
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-800 sticky top-24"
          >
            {cocktail.Image ? (
              <img
                src={cocktail.Image}
                alt={cocktail.Name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-zinc-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6 pt-2"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className={`text-xs font-poppins font-medium px-3 py-1 rounded-full border ${difficultyStyle}`}>
                {cocktail.Difficulte}
              </span>
              {cocktail.Temps && (
                <span className="flex items-center gap-1 text-xs font-poppins font-medium px-3 py-1 rounded-full border text-zinc-400 bg-zinc-800 border-zinc-700">
                  <Clock size={11} />
                  {cocktail.Temps} min
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-instrument italic text-5xl sm:text-6xl lg:text-7xl text-white leading-none">
              {cocktail.Name}
            </h1>

            {/* Description */}
            {cocktail.Description && (
              <p className="font-poppins font-light text-zinc-400 text-base leading-relaxed">
                {cocktail.Description}
              </p>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-zinc-800" />

            {/* Ingredients */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat size={16} className="text-amber-400" />
                <h2 className="font-poppins font-semibold text-white text-sm tracking-wide uppercase">
                  Ingrédients
                </h2>
              </div>
              <ul className="space-y-2">
                {cocktail.Ingredients.map((ingredient, i) => (
                  <motion.li
                    key={ingredient.Id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    className="flex items-center justify-between py-2.5 border-b border-zinc-800/60 last:border-0"
                  >
                    <span className="font-poppins text-white text-sm">{ingredient.Name}</span>
                    <span className="font-poppins font-medium text-amber-400 text-sm">{ingredient.Quantity}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom info */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
                <ChefHat size={16} className="text-zinc-400" />
                <div>
                  <p className="text-zinc-500 font-poppins text-xs">Difficulté</p>
                  <p className="text-white font-poppins font-medium text-sm">{cocktail.Difficulte}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
                <Clock size={16} className="text-zinc-400" />
                <div>
                  <p className="text-zinc-500 font-poppins text-xs">Préparation</p>
                  <p className="text-white font-poppins font-medium text-sm">
                    {cocktail.Temps ? `${cocktail.Temps} min` : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default CocktailFusion;
