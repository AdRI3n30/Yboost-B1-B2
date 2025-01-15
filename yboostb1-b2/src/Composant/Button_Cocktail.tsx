import React from 'react';

const Button_Cocktail = () => {
    return (
<div className="flex flex-col justify-center h-auto  bg-white mt-8">
        <button className='flex flex-row bg-black h-20 rounded-xl w-10/12'>
            <div className='flex ml-2 mr-2 w-auto h-full items-center justify-center rounded-full bg-black'>
                <div className='rounded-full self-center justify-center bg-white src="" w-16 h-16'></div>
            </div>
            <div className='w-full h-full text-center flex flex-col justify-center'>
                <text className=' w-full mb-2p text-white font-bold align-center'>Tequila Sunrise</text>
                <div className='flex justify-center gap-x-4 items-center'>
                    <div className='text-white '><p className="text-sm align-center">difficulter</p></div>
                    <div className='text-white text-sm align-center'>temps</div>
                </div>
            </div>
            <div className=' flex w-10/12 h-full text-white items-center'></div>

            
        </button>
    </div>
);
};
  
export default Button_Cocktail;