import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  description: string;
}

const TaskList: React.FC = () => {
  // State pour stocker les tâches
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les tâches
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const apiUrl = 'http://localhost:5000/tasks';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des URLs des tâches');
        }

        const taskUrls: string[] = await response.json();

        const taskPromises = taskUrls.map((taskUrl) =>
          fetch(`http://localhost:5000${taskUrl}`).then((res) => {
            if (!res.ok) {
              throw new Error('Erreur lors de la récupération de la tâche');
            }
            return res.json();
          })
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
          {tasks.map((task) => (
            <li key={task.id}>{task.description}</li> 
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
