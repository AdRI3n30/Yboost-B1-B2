import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Task {
  id: number;
  description: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true); 
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
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="text-center">
      {loading ? (
        <p>Chargement des tâches...</p>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ul className="list-disc list-inside">
          {tasks.map((task) => (
            <li key={task.id}>
              <Link
                to={`/task/${task.id}`}
                className="text-blue-500 hover:underline"
              >
                {task.description}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
};

export default TaskList;
