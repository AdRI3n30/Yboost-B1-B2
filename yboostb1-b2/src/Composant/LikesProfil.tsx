import React, { useState } from 'react';

interface UserLikesProps {
  likes: number;
}

const UserLikes: React.FC<UserLikesProps> = ({ likes }) => {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div 
      className="relative w-10 h-40 cursor-pointer flex items-center justify-center"
      onClick={handleLike}
    >
      {/* Cœur */}
      <div className="text-red-500 text-[2.5rem] leading-none select-none">❤️</div>

      {/* Nombre de likes (positionné à l'intérieur du cœur) */}
      <span className="absolute text-white text-lg font-bold">{likeCount}</span>
    
    </div>
  );
};

export default UserLikes;
