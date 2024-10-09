const express = require('express');
const db = require('../db'); // Importer la connexion à la base de données

const router = express.Router();

// Route pour obtenir toutes les tâches
router.get('/tasks', (req, res) => {
    db.query('SELECT id, description FROM tasks', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
            return;
        }

        const taskReferences = results.map(task => `/task/${task.id}`);
        res.json(taskReferences);
    });
});

// Route pour obtenir une tâche par ID
router.get('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    db.query('SELECT id, description FROM tasks WHERE id = ?', [taskId], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération de la tâche' });
            return;
        }

        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'Tâche non trouvée' });
        }
    });
});

// Route pour ajouter une nouvelle tâche
router.post('/tasks', (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ error: 'La description est requise' });
    }

    db.query('INSERT INTO tasks (description) VALUES (?)', [description], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de l\'ajout de la tâche' });
            return;
        }

        const newTask = { id: result.insertId, description };
        res.status(201).json({ message: 'Tâche ajoutée avec succès', task: newTask });
    });
});

// Route pour mettre à jour une tâche
router.put('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ error: 'La description est requise' });
    }

    db.query('UPDATE tasks SET description = ? WHERE id = ?', [description, taskId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la mise à jour de la tâche' });
            return;
        }

        if (result.affectedRows > 0) {
            res.json({ message: 'Tâche mise à jour avec succès' });
        } else {
            res.status(404).json({ error: 'Tâche non trouvée' });
        }
    });
});

// Route pour supprimer une tâche
router.delete('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    db.query('DELETE FROM tasks WHERE id = ?', [taskId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la suppression de la tâche' });
            return;
        }

        if (result.affectedRows > 0) {
            res.json({ message: 'Tâche supprimée avec succès' });
        } else {
            res.status(404).json({ error: 'Tâche non trouvée' });
        }
    });
});

module.exports = router;
