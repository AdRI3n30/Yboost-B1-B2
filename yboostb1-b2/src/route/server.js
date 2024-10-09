const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks'); // Importation des routes liées aux tâches

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Middleware pour gérer les requêtes avec du JSON

// Utilisation des routes définies dans routes/tasks.js
app.use(taskRoutes);

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});