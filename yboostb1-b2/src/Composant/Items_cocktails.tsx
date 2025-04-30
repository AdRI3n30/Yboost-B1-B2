import React from "react";
import cocktailimg from "../image/cocktail2.jpg";

const Items_cocktails = () => {
    return (
    <div className="flex items-end w-[350px] h-[350px] bg-cover bg-center rounded-[20px] text-end text-white bg-[0%_70%] shadow-xl"
        style={{ backgroundImage: `url(${cocktailimg})` }}>
        
        
        <h1 className="ml-[25px] mb-[25px] text-2xl font-semibold font-poppins">Margarita</h1>
    </div>

    );  
};
export default Items_cocktails;