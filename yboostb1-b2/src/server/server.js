
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json()); 
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yboostb2'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à MySQL:', err);
        return;
    }
    console.log('Connecté à MySQL');
});


app.get('/cocktails', (req, res) => {
    db.query('SELECT Id, Name FROM cocktail', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des tâches ' });
        }
        res.json(results);
    });
});

app.get('/cocktails/:id', (req, res) => {
    const cocktailId = parseInt(req.params.id);

    db.query('SELECT Id, Name, Descri, Id_difficulte, Image, Ingredients, Temps FROM cocktail WHERE id = ?', [cocktailId], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération de la tâche ici1' });
            return;
        }

        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'Tâche non trouvée' });
        }
    });
});


app.post('/cocktails', (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ error: 'La description est requise' });
    }

    db.query('INSERT INTO cocktail ( Name, Descri, Id_difficulte, Image, Ingredients, Temps) VALUES (?)', [description], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de l\'ajout de la tâche' });
            return;
        }

        const newCocktail = { id: result.insertId, Name, Descri, Id_difficulte, Image, Ingredients, Temps };
        res.status(201).json({ message: 'Tâche ajoutée avec succès', cocktail: newCocktail });
    });
});


app.put('/cocktail/:id', (req, res) => {
    const cocktailId = parseInt(req.params.id);
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ error: 'La description est requise' });
    }

    db.query('UPDATE cocktail SET description = ? WHERE id = ?', [description, cocktailId], (err, result) => {
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


app.delete('/cocktail/:id', (req, res) => {
    const cocktailId = parseInt(req.params.id);

    db.query('DELETE FROM cocktail WHERE id = ?', [cocktailId], (err, result) => {
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



app.get('/', (req, res) => {
    res.send('Serveur en cours d\'exécution et connecté à la base de données !');
});


app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
