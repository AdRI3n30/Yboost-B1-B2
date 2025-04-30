import React from 'react';

interface UserNameProps {
  firstName: string;
  lastName: string;
}

const UserName: React.FC<UserNameProps> = ({ firstName, lastName }) => {
  return (
    <h1 className="text-2xl font-bold font-poppins">
      <span className="text-green-500">{firstName}</span>{' '}
      <span className="text-blue-500">{lastName}</span>
    </h1>
  );
};

export default UserName;
