import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LogoC from '../image/cocktails_icon.png';
import back from '../Public/Fond3.png';

const NavigationBarWeb: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`absolute top-[1.5rem] w-[96.7vw] h-20 p-2 flex items-center justify-center z-50 rounded-[25px] bg-cover ${(isActive("/home") || isActive("/apropos")) ? "bg-transparent" : ""}`}
            style={!(isActive("/home") || isActive("/apropos")) ? { backgroundImage: `url(${back})` } : {}}
        >
            <motion.div
                className="w-full h-full rounded-full border border-white bg-transparent flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
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

                    <Link to="/preparation">
                        <motion.button
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-[65px] h-full rounded-full border border-white flex items-center justify-center group transition-all duration-300 ${
                                isActive("/preparation") 
                                    ? "bg-white text-black" 
                                    : "bg-transparent text-white hover:bg-white hover:text-black"
                            }`}
                        >
                            <motion.img
                                src={LogoC}
                                alt="Cocktails Icon"
                                className={`w-6 ml-[2px] h-6 transition-all duration-300 ${
                                    isActive("/preparation") ? "invert" : "group-hover:invert"
                                }`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NavigationBarWeb;
