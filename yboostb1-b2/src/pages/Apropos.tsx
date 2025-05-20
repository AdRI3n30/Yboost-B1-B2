import React from 'react';
import { Glasses as GlassCocktail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import fond from '../assets/Fond3.png';

function Apropos() {
  return (
    <main
      className="min-h-screen text-white rounded-lg"
      style={{ backgroundImage: `url(${fond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      role="main"
    >
      <div className="max-w-4xl mx-auto px-4 py-24">
        <header>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center p-3 bg-amber-500/20 rounded-full mb-6"
              whileHover={{ scale: 1.2 }}
              aria-hidden="true"
            >
              <GlassCocktail className="w-8 h-8 text-amber-400" aria-hidden="true" focusable="false" />
            </motion.div>
            <h1 className="text-4xl font-serif font-bold mb-4">À propos</h1>
            <p className="text-amber-200 text-lg">Librairie de cocktail depuis 2025</p>
          </motion.div>
        </header>

        <section aria-labelledby="histoire-title">
          <motion.div
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-gray-700/50 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 id="histoire-title" className="sr-only">Notre histoire</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Chez ShakeLabs, nous croyons que chaque cocktail raconte une histoire. Notre passion pour les boissons d’exception est née d’une idée simple : créer un espace où l’art de la mixologie serait célébré et partagé avec tous.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Nous sélectionnons les meilleurs ingrédients du monde entier, des spiritueux rares aux herbes cultivées localement. Chaque boisson de notre carte est le fruit de nombreuses heures d’expérimentation et de perfectionnement.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Préparation d'un cocktail par un barman"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section aria-labelledby="contact-title">
          <motion.div
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-gray-700/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="text-amber-400 w-6 h-6" aria-hidden="true" focusable="false" />
              <h2 id="contact-title" className="text-2xl font-serif">Contactez Nous</h2>
            </div>
            <address className="text-gray-300 not-italic">
              <p className="mb-4">
                <a href="mailto:VraiMail@ynov.com" className="underline focus:outline-none focus:ring-2 focus:ring-amber-400">
                  VraiMail@ynov.com
                </a>
                <br />
                <a href="tel:+33640552721" className="underline focus:outline-none focus:ring-2 focus:ring-amber-400">
                  +33 6 40 55 27 21
                </a>
              </p>
            </address>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default Apropos;
