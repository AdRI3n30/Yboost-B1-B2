import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import LogoC from '../image/cocktails_icon.png';
import back from '../Public/Fond3.png';

const NavigationBarWeb: React.FC = () => {
    const location = useLocation();

    const randomId = useMemo(() => {
        const minId = 1;
        const maxId = 20; // adapte selon ta base
        return Math.floor(Math.random() * (maxId - minId + 1)) + minId;
      }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <div 
            className={`absolute top-[1.5rem] w-[96.7vw] h-20 p-2 flex items-center justify-center z-50 rounded-[25px] bg-cover ${(isActive("/home") || isActive("/apropos")) ? "bg-transparent" : ""}`} 
            style={!(isActive("/home") || isActive("/apropos")) ? { backgroundImage: `url(${back})` } : {}}
        >
            <div className="w-full h-full rounded-full border border-white bg-transparent flex items-center justify-between">
                <div className="flex space-x-1 h-full">
                    <Link to="/home">
                        <button
                            className={`w-[160px] h-full rounded-full font-poppins border border-white transition-all duration-300 ${
                                isActive("/home") 
                                    ? "bg-white text-black w-[250px]" 
                                    : "bg-transparent text-white hover:bg-white hover:text-black hover:w-[250px]"
                            }`}
                        >
                            Home
                        </button>
                    </Link>

                    <Link to="/list">
                        <button
                            className={`w-[160px] h-full rounded-full font-poppins border border-white transition-all duration-300 ${
                                isActive("/list") 
                                    ? "bg-white text-black w-[250px]" 
                                    : "bg-transparent text-white hover:bg-white hover:text-black hover:w-[250px]"
                            }`}
                        >
                            Cocktails
                        </button>
                    </Link>
                </div>

                <div className="flex space-x-1 h-full">
                    <Link to="/apropos">
                        <button
                            className={`w-[160px] h-full rounded-full font-poppins border border-white ml-5 transition-all duration-300 ${
                                isActive("/apropos") 
                                    ? "bg-white text-black w-[250px]" 
                                    : "bg-transparent text-white hover:bg-white hover:text-black hover:w-[250px]"
                            }`}
                        >
                            A propos
                        </button>
                    </Link>

                    <Link to={`/cocktails/${randomId}`}>
                        <button
                            className={`w-[65px] h-full rounded-full border border-white flex items-center justify-center group transition-all duration-300 ${
                            isActive("/cocktail") 
                                ? "bg-white text-black" 
                                : "bg-transparent text-white hover:bg-white hover:text-black"
                            }`}
                        >
                            <img
                            src={LogoC}
                            alt="Cocktails Icon"
                            className={`w-6 ml-[2px] h-6 transition-all duration-300 ${
                                isActive("/cocktail") ? "invert" : "group-hover:invert"
                            }`}
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationBarWeb;
