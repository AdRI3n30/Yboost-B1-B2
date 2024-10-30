import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  description: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/tasks'); 
  
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status} ${response.statusText}`);
        }
  
        const tasks = await response.json();
        setTasks(tasks);
      } catch (error: any) {
        console.error('Erreur lors de la récupération des tâches :', error.message);
        setError(`Impossible de récupérer les tâches. Détails : ${error.message}`);
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
