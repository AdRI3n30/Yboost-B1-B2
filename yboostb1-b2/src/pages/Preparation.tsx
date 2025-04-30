import React from "react";
import { motion } from "framer-motion";
import cocktailimg from "../image/cocktail2.jpg";
import shakerimg from "../image/shaker-a-cocktail_1.png";
import solarimg from "../image/solar_hourglass-broken.png";
import solarstarimg from "../image/solar_stars-broken.png";

const Preparation = () => {
    return (
        <motion.div 
            className="flex p-10 justify-center items-center h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className="w-full flex justify-center items-center"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img className="rounded-[55px] shadow-lg h-[650px]" src={cocktailimg} alt="Cocktail" />
            </motion.div>

            <motion.div 
                className="w-full"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div className="mb-10">
                    <h1 className="font-instrument italic font-medium text-[80px]">Margarita</h1>
                    <p className="w-4/5 mt-[-15px] font-light">
                        La Margarita est un cocktail classique à base de tequila, de liqueur d'orange (généralement Cointreau ou Triple sec) et de jus de citron vert frais. 
                        Ce cocktail est connu pour son équilibre parfait entre le sucré, l'acide et l'alcool, avec une touche de salinité parfois, grâce au sel qui borde le verre.
                    </p>
                </motion.div>

                <motion.div 
                    className="mb-[50px] shadow-custom-inset-2 p-8 rounded-3xl w-[60%]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <ul className="list-disc pl-6">
                        <li className="font-light pb-[15px]">50 ml de tequila (blanche de préférence)</li>
                        <li className="font-light pb-[15px]">30 ml de liqueur d'orange (Cointreau ou Triple sec)</li>
                        <li className="font-light pb-[15px]">20 ml de jus de citron vert frais</li>
                        <li className="font-light pb-[15px]">Glaçons</li>
                        <li className="font-light">Sel (pour le bord du verre, optionnel)</li>
                    </ul>
                </motion.div>

                <div className="flex justify-around items-center w-full pr-[200px]">
                    {[ 
                        { img: solarimg, label: "temps" }, 
                        { img: solarstarimg, label: "note" }, 
                        { img: shakerimg, label: "difficulte", imgClass: "h-[35px]" } 
                    ].map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="flex justify-center items-center font-poppins"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="rounded-xl shadow-custom-inset p-2 w-[60px] h-[60px] flex justify-center items-center">
                                <img src={item.img} className={item.imgClass || ""} alt={item.label} />
                            </div>
                            <span className="ml-2">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Preparation;
