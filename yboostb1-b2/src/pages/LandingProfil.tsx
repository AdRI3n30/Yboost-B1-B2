import React from 'react';
import UserPhoto from '../Composant/photoProfil.tsx';
import UserName from '../Composant/NomProfil.tsx';
import UserLikes from '../Composant/LikesProfil.tsx';

const LandingProfil: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-gradient-radial from-purple-500 via-pink-700 to-red-500 h-screen p-4">
        {/* Photo de profil */}
        <UserPhoto />
  
        {/* Nom et Prénom */}
        <UserName firstName="John" lastName="Doe" />
  
        {/* Nombre de likes avec cœur */}
        <UserLikes likes={42} />
      </div>
    );
  };

export default LandingProfil;
