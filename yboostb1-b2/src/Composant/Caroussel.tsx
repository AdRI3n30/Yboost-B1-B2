import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Cocktail } from '../types';

const VISIBLE = 6;
const INTERVAL = 4000;

const Carousel: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetch('/cocktails')
      .then(r => r.json())
      .then(d => setCocktails(d.slice(0, VISIBLE)))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, cocktails.length - itemsPerView);

  const next = useCallback(() => setIndex(i => Math.min(i + 1, maxIndex)), [maxIndex]);
  const prev = () => setIndex(i => Math.max(i - 1, 0));

  useEffect(() => {
    if (paused || cocktails.length === 0) return;
    timerRef.current = setTimeout(() => {
      setIndex(i => (i >= maxIndex ? 0 : i + 1));
    }, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, cocktails.length, maxIndex]);

  if (cocktails.length === 0) return null;

  const translatePercent = index * (100 / cocktails.length);

  return (
    <section className="bg-zinc-950 py-20 px-6 sm:px-10 lg:px-16" aria-label="Cocktails en vedette">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-amber-400 font-poppins text-sm font-medium tracking-widest uppercase mb-2">
              Sélection
            </p>
            <h2 className="font-poppins font-bold text-3xl text-white">Cocktails en vedette</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-amber-500/50 hover:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-amber-500/50 hover:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(cocktails.length / itemsPerView) * 100}%`,
              transform: `translateX(-${translatePercent}%)`,
            }}
          >
            {cocktails.map(cocktail => (
              <div
                key={cocktail.Id}
                className="px-2.5"
                style={{ width: `${100 / cocktails.length}%` }}
              >
                <Link to={`/cocktails/${cocktail.Id}`} className="block group">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-800"
                  >
                    {cocktail.Image && (
                      <img
                        src={cocktail.Image}
                        alt={cocktail.Name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-poppins font-semibold text-white text-base leading-tight">{cocktail.Name}</h3>
                      <span className="text-amber-400 text-xs font-poppins mt-1 inline-block">{cocktail.Id_difficulte}</span>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index ? 'w-6 h-1.5 bg-amber-500' : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
