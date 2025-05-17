import { motion } from "framer-motion";
import FondH from "../assets/Fond3.png";
import fleche from "../assets/weui_arrow-outlined.png";
import cock from "../assets/cock.jpeg";
import bg from "../assets/bg.png";
import Caroussel from '../Composant/Caroussel.tsx';

const Home = () => {
  return (
    <>
      <section className="relative flex flex-col md:flex-row justify-center w-full h-[90vh] md:h-screen mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full bg-cover bg-center relative rounded-[25px] shadow-lg min-h-[320px] md:min-h-[500px]"
          style={{ backgroundImage: `url(${FondH})` }}
        >
          <div className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] absolute bg-red-0 bottom-0 right-[10vw] md:right-[305px] rounded-full shadow-[8.5px_9px_0_#fff]"></div>
          <div className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] absolute bg-red-0 bottom-[60px] md:bottom-[73px] right-0 rounded-full shadow-[8.5px_9px_0_#fff]"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-[30%] left-4 md:left-8 text-left text-white max-w-[90vw] md:max-w-xl"
          >
            <h1 className="text-xl sm:text-3xl md:text-6xl font-poppins mb-4">ShakeLabs</h1>
            <p className="text-xs sm:text-lg md:text-xl font-poppins font-light max-w-xs sm:max-w-xl">
              Bienvenue dans l’univers des cocktails où chaque recette <br />
              raconte une histoire et chaque gorgée éveille les sens
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute bg-white w-[90vw] max-w-[325px] h-[70px] md:w-[325px] md:h-[90px] bottom-0 right-0 border-white border-8 rounded-3xl"
        ></motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/list")}
          className="absolute bottom-[2%] right-[2%] bg-white text-black w-[80vw] max-w-[290px] h-[50px] md:w-[290px] md:h-[60px] rounded-[200px] shadow-md hover:bg-gray-200 transition duration-300 border-2 border-black text-xs sm:text-xl font-poppins"
        >
          Explorer les recettes
        </motion.button>

        <motion.button
          whileHover={{ rotate: 15 }}
          onClick={() => {
            const section = document.querySelector("#A_propos");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="absolute bg-center bg-contain w-[48px] h-[48px] md:w-[64px] md:h-[64px] bottom-[12%] md:bottom-[10%] left-[5%] rounded-[50%] border border-white border-2"
        >
          <img src={fleche} alt="fleche" />
        </motion.button>
      </section>

      <motion.section
        id="A_propos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-20 w-full"
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="p-4 sm:p-12 text-center">
          <h1 className="text-2xl sm:text-4xl font-poppins text-black">
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
            <h1 className="text-2xl sm:text-4xl font-poppins font-semibold mb-6">
              Notre Mission ?
            </h1>
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
            <div
              className="bg-gray-500 w-[90vw] max-w-[350px] h-[180px] sm:w-[50%] sm:h-[250px] md:h-[500px] rounded-2xl shadow-xl transition-transform duration-300"
              style={{ backgroundImage: `url(${cock})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
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
          <h1 className="text-xl sm:text-3xl font-poppins text-black">
            <strong>Découvrez</strong> des cocktails et leurs recettes incontournables <br />
            pour <strong>épater</strong> vos invités et <strong>éveiller</strong> vos papilles
          </h1>
          <div className="w-1/2 sm:w-1/3 h-[2px] bg-black mt-4 mx-auto"></div>
        </motion.div>
      </motion.section>
        <Caroussel />
    </>
  );
};

export default Home;
