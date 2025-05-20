import { motion } from "framer-motion";
import FondH from "../assets/Fond3.png";
import fleche from "../assets/weui_arrow-outlined.png";

const HomeHero = () => {
  return (
    <>
      <main role="main">
        <section
          className="relative flex flex-col md:flex-row justify-center w-full h-[90vh] md:h-screen mb-12"
          aria-label="Présentation ShakeLabs"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full bg-cover bg-center relative rounded-[25px] shadow-lg min-h-[400px] sm:min-h-[500px] lg:min-h-[650px] xl:min-h-[750px] max-w-none"
            style={{ backgroundImage: `url(${FondH})` }}
            aria-hidden="true"
          >
            <div className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] absolute bg-red-0 bottom-0 right-[10vw] md:right-[305px] rounded-full shadow-[8.5px_9px_0_#fff]"></div>
            <div className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] absolute bg-red-0 bottom-[60px] md:bottom-[73px] right-0 rounded-full shadow-[8.5px_9px_0_#fff]"></div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-[28%] left-4 md:left-12 text-left text-white max-w-[95vw] md:max-w-2xl lg:max-w-3xl"
            >
              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins mb-6">
                ShakeLabs
              </h1>
              <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-poppins font-light max-w-lg sm:max-w-2xl lg:max-w-3xl">
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
            aria-hidden="true"
          ></motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/list")}
            className="absolute bottom-[2%] left-1/2  md:left-auto md:right-[2%] bg-white text-black w-[80vw] max-w-[290px] h-[50px] md:w-[290px] md:h-[60px] rounded-[200px] shadow-md hover:bg-gray-200 transition duration-300 border-2 border-black text-xs sm:text-xl font-poppins"
            aria-label="Explorer les recettes"
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
            className="absolute bg-center bg-contain w-[48px] h-[48px] md:w-[64px] md:h-[64px] bottom-[18%] md:bottom-[10%] left-[5%] rounded-[50%] border border-white border-2"
            aria-label="Aller à la section À propos"
          >
            <img src={fleche} alt="Aller à la section À propos" />
          </motion.button>
        </section>
      </main>
    </>
  );
};

export default HomeHero;