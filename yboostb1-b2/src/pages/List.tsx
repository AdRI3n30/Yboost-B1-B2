import React from 'react';
import TaskList from '../Composant/tasks.tsx';

const List = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Liste des Tâches</h1>
      <p className="text-lg text-gray-600 mb-6">Voici toutes vos tâches :</p>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <TaskList />
      </div>
    </div>
  );
};

export default List;
