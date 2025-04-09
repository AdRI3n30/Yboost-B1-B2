import React from "react";
import cocktailimg from "../image/cocktail2.jpg";
import shakerimg from "../image/shaker-a-cocktail_1.png";
import solarimg from "../image/solar_hourglass-broken.png";
import solarstarimg from "../image/solar_stars-broken.png"; 
import Items_cocktails from "../Composant/Items_cocktails.tsx";



const Preparation = () => {
    return (
        
        <div Class="flex p-10 justify-center items-center h-screen ">
            <div class="w-full flex justify-center items-center ">
                <img class="rounded-[55px] shadow-lg h-[650px] "src={cocktailimg} />
            </div>
            <div class="w-full">
                <div class="mb-10">
                    <h1 class="font-instrument italic font-meduim text-[80px]">Margarita</h1>
                    <p class="w-4/5 mt-[-15px] font-light">La Margarita est un cocktail classique à base de tequila, de liqueur d'orange (généralement Cointreau ou Triple sec) et de jus de citron vert frais. Ce cocktail est connu pour son équilibre parfait entre le sucré, l'acide et l'alcool, avec une touche de salinité parfois, grâce au sel qui borde le verre.</p>
                </div>
                <div class="mb-[50px] shadow-custom-inset-2 p-8 rounded-3xl w-[60%] ">
                    <ul class="list-disc pl-6 ">
                        <li class="font-light pb-[15px]">50 ml de tequila (blanche de préférence)</li>
                        <li class="font-light pb-[15px]">30 ml de liqueur d'orange (Cointreau ou Triple sec)</li>
                        <li class="font-light pb-[15px]">20 ml de jus de citron vert frais</li>
                        <li class="font-light pb-[15px]">Glaçons</li>
                        <li class="font-light">Sel (pour le bord du verre, optionnel)</li>
                    </ul>
                </div>
                <div class="flex justify-around items-center w-full pr-[200px]">
                    <div class="flex justify-center items-center">
                        <div class="rounded-xl shadow-custom-inset p-2 w-[60px] h-[60px]"><img src={solarimg}/></div>
                        temps
                    </div>
                    <div class="flex justify-center items-center ">
                        <div class="rounded-xl shadow-custom-inset p-2 w-[60px] h-[60px] font-poppins"><img src={solarstarimg}/></div>
                        note
                    </div>
                    <div class="flex justify-center items-center font-poppins">
                        <div class="rounded-xl shadow-custom-inset p-2 w-[60px] h-[60px] flex justify-center items-center"><img class="h-[35px]" src={shakerimg}/></div>
                        difficulte
                    </div>
                </div>
            </div>

        </div>
        

    );

};









export default Preparation;