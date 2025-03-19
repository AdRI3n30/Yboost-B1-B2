import React from "react";
import Details from "../Composant/details.tsx";

const TestB1 = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-sans m-0">
      <div className="w-11/12 max-w-sm bg-gradient-to-b from-black to-gray-900 rounded-lg p-5 text-center shadow-lg flex flex-col h-[90vh]">
        <div className="flex justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-500 via-yellow-400 to-teal-400 bg-clip-text text-transparent">Shake</span>
          <span className="text-sky-400 text-4xl">LAB</span>
        </div>
        <Details />
        <button className="bg-gradient-to-r from-green-400 to-sky-400 text-black text-base font-bold py-2 px-4 rounded-full mt-4 mx-auto w-32 hover:bg-gradient-to-r hover:from-sky-400 hover:to-green-400">
          Shake!
        </button>
      </div>
    </div>
    </div>
  );
};

export default TestB1;