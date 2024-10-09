// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(bodyParser.json()); // Middleware pour traiter le JSON

// Connexion à la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yboostb2'
});

// Vérification de la connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à MySQL:', err);
        return;
    }
    console.log('Connecté à MySQL');
});

// Endpoint pour obtenir toutes les tâches
app.get('/tasks', (req, res) => {
    db.query('SELECT id, description FROM tasks', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
        }
        res.json(results);
    });
});

app.get('/task/:id', (req, res) => {
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


app.post('/tasks', (req, res) => {
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


app.put('/task/:id', (req, res) => {
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


app.delete('/task/:id', (req, res) => {
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


// Endpoint de test
app.get('/', (req, res) => {
    res.send('Serveur en cours d\'exécution et connecté à la base de données !');
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
