import React from "react";
import CustomButton from '../Composant/Button.tsx';
import LogoC from '../image/cocktails_icon.png';

interface NavigationBarWebProps {
    enableButtonHome?: boolean;
    enableButtonCocktails?: boolean;
    enableButtonApropos?: boolean;
    enableButtonPreparation?: boolean;
}

const NavigationBarWeb: React.FC<NavigationBarWebProps> = ({
    enableButtonHome = false,
    enableButtonCocktails = false,
    enableButtonApropos = false,
    enableButtonPreparation = false,
}) => {
    return (
        <div className="w-screen h-20 bg-black p-2 flex items-center justify-center">
            <div className="w-full h-full rounded-full border border-white bg-transparent flex items-center justify-between">
                <div className="flex space-x-1 h-full">
                    <button
                        className={`w-[160px] h-full rounded-full border border-white bg-transparent text-white transition-all duration-300 ${
                            enableButtonHome
                                ? "bg-white text-black w-[180px]"
                                : "hover:bg-white hover:text-black hover:w-[180px]"
                        }`}
                        style={
                            enableButtonHome
                                ? { width: "180px", backgroundColor: "white", color: "black" }
                                : undefined
                        }
                    >
                        Home
                    </button>
                    <button
                        className={`w-[160px] h-full rounded-full border border-white bg-transparent text-white transition-all duration-300 ${
                            enableButtonCocktails
                                ? "bg-white text-black w-[180px]"
                                : "hover:bg-white hover:text-black hover:w-[180px]"
                        }`}
                        style={
                            enableButtonCocktails
                                ? { width: "180px", backgroundColor: "white", color: "black" }
                                : undefined
                        }
                    >
                        Cocktails
                    </button>
                </div>
                <div className="flex space-x-1 h-full">
                    <button
                        className={`w-[160px] h-full rounded-full border border-white ml-5 bg-transparent text-white transition-all duration-300 ${
                            enableButtonApropos
                                ? "bg-white text-black w-[180px]"
                                : "hover:bg-white hover:text-black hover:w-[180px]"
                        }`}
                        style={
                            enableButtonApropos
                                ? { width: "180px", backgroundColor: "white", color: "black" }
                                : undefined
                        }
                    >
                        A propos
                    </button>
                    <button
                        className={`w-[65px] h-full rounded-full border border-white bg-transparent text-white flex items-center justify-center group transition-all duration-300 ${
                            enableButtonPreparation
                                ? "bg-white text-black w-[65px]"
                                : "hover:bg-white hover:text-black"
                        }`}
                        style={
                            enableButtonPreparation
                                ? { backgroundColor: "white", color: "black" }
                                : undefined
                        }
                    >
                        <img
                            src={LogoC}
                            alt="Cocktails Icon"
                            className={`w-6 ml-[2px] h-6 transition-all duration-300 ${
                                enableButtonPreparation ? "invert" : "group-hover:invert"
                            }`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBarWeb;