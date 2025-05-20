import React from "react";
import { motion } from "framer-motion";
import cock from "../assets/cock.jpeg";
import bg from "../assets/bg.png";

const HomePres: React.FC = () => {
  return (
    <div>
      <motion.section
        id="A_propos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-20 w-full"
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        aria-labelledby="homepres-title"
        role="region"
      >
        <div className="p-4 sm:p-12 text-center">
          <h1 id="homepres-title" className="text-2xl sm:text-4xl font-poppins text-black">
            Plus qu’un cocktail, une <strong>expérience</strong>
          </h1>
          <p className="text-base sm:text-2xl text-black mt-5 px-2 sm:px-4 font-poppins mx-auto">
            Chez ShakeLabs, chaque boisson est pensée comme un voyage sensoriel.
            <br className="hidden sm:block" />
            Des classiques revisités aux créations originales, nous explorons
            l’art du cocktail avec passion, précision… et <br className="hidden sm:block" />
            une pointe d’audace.
          </p>
        </div>

        <div className="mt-10 sm:mt-20 w-full flex flex-col md:flex-row items-center md:items-around">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="px-4 md:pl-[15%] flex justify-center items-center flex-col w-full"
          >
            <h2 className="text-2xl sm:text-4xl font-poppins font-semibold mb-6">
              Notre Mission ?
            </h2>
            <p className="text-center text-base sm:text-2xl">
              Faire découvrir (ou redécouvrir) le plaisir de savourer <br />
              un bon cocktail, que ce soit chez soi ou entre amis, en <br />
              proposant des recettes accessibles, des conseils de pro <br />
              et des inspirations venues du monde entier.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full flex justify-center items-center mt-8 md:mt-0"
          >
            <img
              src={cock}
              alt="Cocktail dans un verre sur fond sombre"
              className="bg-gray-500 w-[90vw] max-w-[350px] h-[180px] sm:w-[50%] sm:h-[250px] md:h-[500px] rounded-2xl shadow-xl transition-transform duration-300 object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-20 text-center px-2 sm:px-4"
        >
          <h2 className="text-xl sm:text-3xl font-poppins text-black">
            <strong>Découvrez</strong> des cocktails et leurs recettes incontournables <br />
            pour <strong>épater</strong> vos invités et <strong>éveiller</strong> vos papilles
          </h2>
          <div className="w-1/2 sm:w-1/3 h-[2px] bg-black mt-4 mx-auto"></div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HomePres;