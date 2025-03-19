import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({ to, icon }) => {
  return (
    <button className="hover:text-white m-2">
      <Link className="text-white hover:text-gray-300 transition duration-200" to={to}>
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path fill="#b5b5b5" d={icon} />
          </svg>
        )}
      </Link>
    </button>
  );
};

export default CustomButton;
