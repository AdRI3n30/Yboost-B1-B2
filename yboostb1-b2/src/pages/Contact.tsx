import React from 'react';
import Formulaire from '../Composant/formulaire.tsx';
import Template_logo from '../Composant/template_logo.tsx';
import Logo from '../Composant/Logo.tsx';

const Contact = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
    <Logo />
    <Formulaire />
    </div>
  );
};

export default Contact;
