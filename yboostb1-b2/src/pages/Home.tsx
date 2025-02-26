import React from 'react';
import Landing from '../Composant/Landing.tsx';
import { Link } from 'react-router-dom';
import CustomButton from '../Composant/Button.tsx';
import Templet_cocktail from '../Composant/templet_cocktail.tsx';
import Template_logo from '../Composant/template_logo.tsx';
import NavigationBar from '../Composant/NavigationBar.tsx';

const Home = () => {
  return (
    <div className='bg-black'>
    <Template_logo />

    <div className='absolute w-full h-auto bg-black mt-24 pb-20 pl-[2.20rem]'>
    <div id='contenue' className='relative flex flex-wrap gap-8 justify-start mt-8 ' >
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
    </div>
    </div>
          <NavigationBar />
      </div>
  );
};

export default Home;

