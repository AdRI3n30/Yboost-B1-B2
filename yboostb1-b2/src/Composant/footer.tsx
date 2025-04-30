import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {currentYear} Cocktail Paradise. Tous droits réservés.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-sm hover:text-gray-400 transition-colors"
          >
            Mentions légales
          </a>
          <a
            href="#"
            className="text-sm hover:text-gray-400 transition-colors"
          >
            Politique de confidentialité
          </a>
          <a
            href="#"
            className="text-sm hover:text-gray-400 transition-colors"
          >
            Conditions d'utilisation
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;