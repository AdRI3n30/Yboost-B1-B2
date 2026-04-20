import React from 'react';
import { Link } from 'react-router-dom';
import LogoC from '../assets/cocktails_icon.png';

const Footer: React.FC = () => (
  <footer className="bg-zinc-900 border-t border-zinc-800/60 py-10 px-6 sm:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Brand */}
      <div className="flex items-center gap-2">
        <img src={LogoC} alt="ShakeLabs" className="w-6 h-6 opacity-70" />
        <span className="font-poppins font-semibold text-zinc-400 text-sm">ShakeLabs</span>
      </div>

      {/* Links */}
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {[
          { to: '/home', label: 'Accueil' },
          { to: '/list', label: 'Cocktails' },
          { to: '/apropos', label: 'À propos' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="font-poppins text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Copyright */}
      <p className="font-poppins text-zinc-600 text-xs">
        © {new Date().getFullYear()} ShakeLabs
      </p>
    </div>
  </footer>
);

export default Footer;
