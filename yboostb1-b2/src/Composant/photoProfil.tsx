import React from 'react';

const UserPhoto: React.FC = () => {
  return (
    <div className="mb-4">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="w-36 h-36 rounded-full border-4 border-gray-300 object-cover"
      />
    </div>
  );
};

export default UserPhoto;
