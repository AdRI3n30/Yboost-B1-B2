import React from "react";
import cocktailimg from "../image/cocktail2.jpg";

const Items_cocktails = () => {
    return (
    <div class="flex items-end w-[350px] h-[350px] bg-cover bg-center rounded-[20px] text-end text-white bg-[0%_70%] shadow-[1px -150px 200px -4px rgba(0,0,0,0.15)]"
        style={{ backgroundImage: `url(${cocktailimg})` }}>
        
        
        <h1 class="ml-[25px] mb-[25px] text-2xl font-semibold font-poppins">Margarita</h1>
    </div>

    );
};
export default Items_cocktails;