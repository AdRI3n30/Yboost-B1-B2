import React, { useState, useEffect } from 'react';

const TaskList = () => {
  // State pour stocker les tâches
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les tâches
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const apiUrl = 'http://localhost:3000/tasks';
        const response = await fetch(apiUrl);
        const taskUrls = await response.json();

        // Récupérer toutes les tâches individuellement
        const taskPromises = taskUrls.map((taskUrl) =>
          fetch(`http://localhost:3000${taskUrl}`).then((res) => res.json())
        );
        const tasks = await Promise.all(taskPromises);

        setTasks(tasks);
      } catch (error) {
        console.error('Erreur lors de la récupération des tâches :', error);
        setError('Impossible de récupérer les tâches.');
      }
    };

    fetchTasks();
  }, []); 

  return (
    <div>
      <h1>Liste des tâches</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
