import React from 'react';
import TaskList from '../Composant/tasks.tsx';
import Caroussel from '../Composant/Caroussel.tsx';
import Template_logo from '../Composant/template_logo.tsx';
import NavigationBar from '../Composant/NavigationBar.tsx';

const List = () => {
  return (
    <div >
        <Template_logo enableSearchBar={false} />
        <Caroussel />
        <NavigationBar />
    </div>
  );
};

export default List;
