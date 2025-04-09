import React from 'react';

interface NdtProps {
  name: string;
  difficulty: string;
  time: string;
}

const Ndt: React.FC<NdtProps> = ({ name, difficulty, time }) => {
  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="bg-gradient-to-r from-green-500 to-emerald-400 w-full md:w-3/4 lg:w-1/2 h-14 flex items-center justify-center rounded-md shadow-md mb-4">
        <h1 className="text-xl font-semibold text-white">{name}</h1>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-300 w-40 h-12 flex justify-center items-center rounded-md shadow-md">
          <h1 className="text-lg font-semibold text-white">Difficulté: {difficulty}</h1>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-teal-300 w-40 h-12 flex justify-center items-center rounded-md shadow-md">
          <h1 className="text-lg font-semibold text-white">Temps: {time} min</h1>
        </div>
      </div>
    </div>
  );
};

export default Ndt;
