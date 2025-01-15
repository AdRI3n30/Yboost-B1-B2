import React from 'react';

interface NdtProps {
  name: string;
  difficulty: string;
  time: string;
}

const Ndt: React.FC<NdtProps> = ({ name, difficulty, time }) => {
  return (
    <div>
      <div className="flex flex-column w-screen h-auto justify-center">
        <div className="bg-white w-auto h-8 flex mt-6 px-4 rounded-md">
          <h1 className="text-2xl font-bold text-black">Name : {name}</h1>
        </div>
      </div>
      <div className="flex flex-row w-screen h-auto justify-center space-x-24">
        <div className="bg-white w-28 h-8 flex mt-4 justify-center items-center rounded-md">
          <h1 className="text-xl font-bold text-black">Difficulté : {difficulty}</h1>
        </div>
        <div className="bg-white w-28 h-8 flex mt-4 justify-center items-center rounded-md">
          <h1 className="text-xl font-bold text-black">Temps de préparation : {time}</h1>
        </div>
      </div>
    </div>
  );
};

export default Ndt;
