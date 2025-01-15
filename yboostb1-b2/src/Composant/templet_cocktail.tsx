import React from 'react';

const Templet_cocktail =() => {
    return(
        <>
        <div className='h-48 w-36 rounded-xl'>
             <div className="text-black h-36 w-full bg-white rounded-xl bg-[url('./image/cocktail.jpg')] bg-center bg-cover"></div>
             <div className='text-white flex gap-x-14 m-1'><p className='text-lg'>Nom</p><p className='text-sm'>temps</p></div>
             <div className='text-white m-1 text-sm'>difficulté</div> 
        </div>
        </>
    );
};
export default Templet_cocktail;