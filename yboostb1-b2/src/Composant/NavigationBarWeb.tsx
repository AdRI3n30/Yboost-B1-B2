import React, { useState, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LogoC from '../assets/cocktails_icon.png';
import back from '../assets/Fond3.png';

const NavigationBarWeb: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const randomId = useMemo(() => Math.floor(Math.random() * 13) + 1, []);

    const isActive = (path: string) => location.pathname === path;

    // Fonction pour naviguer vers un cocktail random
    const handleRandomCocktail = () => {
        const randomId = Math.floor(Math.random() * 13) + 1;
        navigate(`/cocktails/${randomId}`);
        setIsMenuOpen(false); // ferme le menu mobile si besoin
    };

    return (
        <>
            {/* NAVBAR */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`
                    z-50 bg-[rgba(243,244,246,0.85)] backdrop-blur-md bg-cover shadow-lg
                    fixed md:absolute
                    top-0 md:top-[1.5rem]
                    left-0 md:left-14
                    w-full md:w-11/12
                    h-16 md:h-20
                    px-2 md:p-2
                    flex items-center justify-between
                    rounded-b-2xl md:rounded-[25px]
                `}
                style={{ backgroundImage: `url(${back})` }}
            >
                {/* Desktop Navigation */}
                <div className="hidden md:flex w-full h-full rounded-full border border-white bg-transparent items-center justify-between">
                    <div className="flex space-x-1 h-full">
                        <Link to="/home">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-[120px] md:w-[160px] h-full rounded-full font-poppins border border-white transition-all duration-300 text-xs md:text-base ${
                                    isActive("/home")
                                        ? "bg-white text-black md:w-[250px]"
                                        : "bg-transparent text-white hover:bg-white hover:text-black hover:md:w-[250px]"
                                }`}
                            >
                                Home
                            </motion.button>
                        </Link>
                        <Link to="/list">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-[120px] md:w-[160px] h-full rounded-full font-poppins border border-white transition-all duration-300 text-xs md:text-base ${
                                    isActive("/list")
                                        ? "bg-white text-black md:w-[250px]"
                                        : "bg-transparent text-white hover:bg-white hover:text-black hover:md:w-[250px]"
                                }`}
                            >
                                Cocktails
                            </motion.button>
                        </Link>
                    </div>
                    <div className="flex space-x-1 h-full">
                        <Link to="/apropos">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-[120px] md:w-[160px] h-full rounded-full font-poppins border border-white ml-2 md:ml-5 transition-all duration-300 text-xs md:text-base ${
                                    isActive("/apropos")
                                        ? "bg-white text-black md:w-[250px]"
                                        : "bg-transparent text-white hover:bg-white hover:text-black hover:md:w-[250px]"
                                }`}
                            >
                                A propos
                            </motion.button>
                        </Link>
                        <button
                            onClick={handleRandomCocktail}
                            className={`w-[45px] md:w-[65px] h-full rounded-full border border-white flex items-center justify-center group transition-all duration-300 ${
                                location.pathname.startsWith("/cocktails/")
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white hover:bg-white hover:text-black"
                            }`}
                        >
                            <motion.img
                                src={LogoC}
                                alt="Cocktails Icon"
                                className={`w-5 md:w-6 ml-[2px] h-5 md:h-6 transition-all duration-300 ${
                                    location.pathname.startsWith("/cocktails/") ? "invert" : "group-hover:invert"
                                }`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center w-full h-full">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-10 h-10 rounded-full border border-white bg-transparent flex items-center justify-center"
                        aria-label="Ouvrir le menu"
                    >
                        <div className="flex flex-col items-center justify-center space-y-1">
                            <div className="w-6 h-1 bg-white rounded-lg"></div>
                            <div className="w-6 h-1 bg-white rounded-lg"></div>
                            <div className="w-6 h-1 bg-white rounded-lg"></div>
                        </div>
                    </button>
                    <div className="flex-1 flex justify-center">
                        <img src={LogoC} alt="Logo" className="w-8 h-8" />
                    </div>
                    <div className="w-10"></div>
                </div>
            </motion.div>

            {/* ✅ Menu mobile EN DEHORS de la navbar */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col justify-start items-center z-[200] overflow-y-auto"
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
                        aria-label="Fermer le menu"
                    >
                        <span className="text-white text-3xl">&times;</span>
                    </button>
                    <div className="flex flex-col items-center w-full pt-20">
                        <Link to="/home" onClick={() => setIsMenuOpen(false)}>
                            <div className="text-white text-2xl py-4 font-poppins">Home</div>
                        </Link>
                        <Link to="/list" onClick={() => setIsMenuOpen(false)}>
                            <div className="text-white text-2xl py-4 font-poppins">Cocktails</div>
                        </Link>
                        <Link to="/apropos" onClick={() => setIsMenuOpen(false)}>
                            <div className="text-white text-2xl py-4 font-poppins">A propos</div>
                        </Link>
                        <button
                            onClick={handleRandomCocktail}
                            className="text-white text-2xl py-4 font-poppins"
                        >
                            Random Cocktail
                        </button>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default NavigationBarWeb;
