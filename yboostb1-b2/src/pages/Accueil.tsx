import React from 'react';

const Accueil = () => {
  return (
    <div className='bg-gradient-to-r from-[#232020] from-10% via-[#000000] via-30% to-[#2C2A2A] to-90% h-screen'> 
    <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
        Shake <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-500 to-cyan-500 text-transparent bg-clip-text">LAB</span>
      </h1>

      <img src="../image/cocktail-6839073_960_720.webp"className="w-full h-32 object-cover" />

    <p className='text-3xl font-bold bg-gradient-to-r from-[#4FB579] to-[#4DB8AF] bg-clip-text text-transparent'>Éveillez</p>
    <p className='absolute bottom-0text-2xl font-bold text-white'>vos sens avec des cocktails créatifs, concoctés à partir d'ingrédients authentiques.</p>

    <button className=" absolute  translate-x-1/2 bottom-7 h-16 py-3 px-16 bg-gradient-to-r from-emerald-500 from-10% via-emerald-400 via-30% to-emerald-500 to-90% text-white text-xl text-center font-semibold rounded-full shadow-md  ">
  Déguster
</button>
    </div>
  );
};

export default Accueil;
