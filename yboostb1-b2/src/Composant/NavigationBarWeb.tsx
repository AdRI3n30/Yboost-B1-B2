import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";
import LogoC from '../image/cocktails_icon.png';
import back from '../Public/Fond3.png';

const NavigationBarWeb: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const randomId = useMemo(() => {
        const minId = 1;
        const maxId = 20; // adapte selon ta base
        return Math.floor(Math.random() * (maxId - minId + 1)) + minId;
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`absolute top-[1.5rem] w-[96.7vw] h-20 p-2 flex items-center justify-between z-50 rounded-[25px] bg-cover ${(isActive("/home") || isActive("/apropos")) ? "bg-transparent" : ""}`}
            style={!(isActive("/home") || isActive("/apropos")) ? { backgroundImage: `url(${back})` } : {}}
        >
            {/* Desktop Navigation */}
            <div className="hidden md:flex w-full h-full rounded-full border border-white bg-transparent items-center justify-between">
                <div className="flex space-x-1 h-full">
                    <Link to="/home">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-[160px] h-full rounded-full font-poppins border border-white transition-all duration-300 ${
                                isActive("/home") 
                                    ? "bg-white text-black w-[250px]" 
                                    : "bg-transparent text-white hover:bg-white hover:text-black hover:w-[250px]"
                            }`}
                        >
                            Home
                        </motion.button>
                    </Link>

                    <Link to="/list">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-[160px] h-full rounded-full font-poppins border border-white transition-all duration-300 ${
                                isActive("/list") 
                                    ? "bg-white text-black w-[250px]" 
                                    : "bg-transparent text-white hover:bg-white hover:text-black hover:w-[250px]"
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
                            className={`w-[160px] h-full rounded-full font-poppins border border-white ml-5 transition-all duration-300 ${
                                isActive("/apropos") 
                                    ? "bg-white text-black w-[250px]" 
                                    : "bg-transparent text-white hover:bg-white hover:text-black hover:w-[250px]"
                            }`}
                        >
                            A propos
                        </motion.button>
                    </Link>

                    <Link to={`/cocktails/${randomId}`}>
                        <motion.button
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-[65px] h-full rounded-full border border-white flex items-center justify-center group transition-all duration-300 ${
                            isActive("/cocktail") 
                                ? "bg-white text-black" 
                                : "bg-transparent text-white hover:bg-white hover:text-black"
                            }`}
                        >
                            <motion.img
                                src={LogoC}
                                alt="Cocktails Icon"
                                className={`w-6 ml-[2px] h-6 transition-all duration-300 ${
                                    isActive("/cocktail") ? "invert" : "group-hover:invert"
                                }`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center justify-start w-full h-full ml-2">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-12 h-12 rounded-full border border-white bg-transparent flex items-center justify-center"
                >
                    {/* Hamburger Icon */}
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <div className="w-6 h-1 bg-white rounded-lg"></div>
                        <div className="w-6 h-1 bg-white rounded-lg"></div>
                        <div className="w-6 h-1 bg-white rounded-lg"></div>
                    </div>
                </button>

                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-20 w-[84%] bg-black bg-opacity-80 p-4 rounded-lg"
                    >
                        <Link to="/home" onClick={() => setIsMenuOpen(false)}>
                            <div className="text-white py-2">Home</div>
                        </Link>
                        <Link to="/list" onClick={() => setIsMenuOpen(false)}>
                            <div className="text-white py-2">Cocktails</div>
                        </Link>
                        <Link to="/apropos" onClick={() => setIsMenuOpen(false)}>
                            <div className="text-white py-2">A propos</div>
                        </Link>
                        <Link to={`/cocktails/${randomId}`} onClick={() => setIsMenuOpen(false)}>
                            <div className="text-white py-2">Random Cocktail</div>
                        </Link>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default NavigationBarWeb;
