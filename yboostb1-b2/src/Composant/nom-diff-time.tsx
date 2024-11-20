import React from 'react';

const ndf = () => {
  return (
    <div>
        <div className="flex flex-column w-screen h-auto justify-center">
            <div className="bg-white w-auto h-8 flex mt-6">
                <h1 className="text-2xl font-bold text-black">
                    Nom Cocktail
                </h1>
            </div>
        </div>
        <div className="flex flex-row w-screen h-auto justify-center space-x-24">
            <div className="bg-white w-28 h-8 flex mt-4">
                <h1 className="text-2xl font-bold text-black">
                    Difficulté
                </h1>
            </div>
            <div className="bg-white w-28 h-8 flex mt-4 justify-end">
                <h1 className="text-2xl font-bold text-black">
                    Temps
                </h1>
            </div>
        </div>
    </div>
  );
};

export default ndf;
