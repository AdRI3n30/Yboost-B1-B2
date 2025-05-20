
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
    db.query('SELECT * FROM cocktail', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des cocktails' });
        }
        res.json(results);
    });
});

app.get('/cocktails/:id', (req, res) => {
    const cocktailId = parseInt(req.params.id);

    const query = `
        SELECT c.Id, c.Name, c.Descri, c.Id_difficulte, d.Difficulte, c.Image, c.Temps, 
               i.Ingredient_Id, i.Name AS Ingredient, r.Quantity
        FROM cocktail c
        LEFT JOIN difficulte d ON c.Id_difficulte = d.Id_difficulte
        LEFT JOIN recette r ON c.Id = r.Cocktail_Id
        LEFT JOIN ingredient i ON r.Ingredient_Id = i.Ingredient_Id
        WHERE c.Id = ?
    `;

    db.query(query, [cocktailId], (err, results) => {
        if (err) {
            console.error('SQL Error:', err);
            return res.status(500).json({ error: 'Erreur lors de la récupération du cocktail' });
        }
    

        if (results.length === 0) {
            return res.status(404).json({ error: 'Cocktail non trouvé' });
        }
        const cocktail = {
            Id: results[0].Id,
            Name: results[0].Name,
            Description: results[0].Descri,
            Difficulte: results[0].Difficulte,
            Image: results[0].Image,
            Temps: results[0].Temps,
            Ingredients: results.map(row => ({
                Id: row.Ingredient_Id,
                Name: row.Ingredient,
                Quantity: row.Quantity
            }))
        };

        res.json(cocktail);
    });
});


app.post('/cocktails', (req, res) => {
    const { name, description, difficulte, image, ingredients, temps } = req.body;

    if (!name || !description || !difficulte || !ingredients) {
        return res.status(400).json({ error: 'Le nom, la description, la difficulté, et les ingrédients sont requis' });
    }

    const ingredientsString = JSON.stringify(ingredients);

    db.query(
        'INSERT INTO cocktail (Name, Description, Id_difficulte, Image, Ingredients, Temps) VALUES (?, ?, ?, ?, ?, ?)', 
        [name, description, difficulte, image || null, ingredientsString, temps || null], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erreur lors de l\'ajout du cocktail' });
                return;
            }

            const newCocktail = {
                Id: result.insertId,
                Name: name,
                Description: description,
                Difficulte: difficulte,
                Image: image,
                Ingredients: ingredients,
                Temps: temps
            };

            res.status(201).json({ message: 'Cocktail ajouté avec succès', cocktail: newCocktail });
        }
    );
});



app.put('/cocktail/:id', (req, res) => {
    const cocktailId = parseInt(req.params.id);
    const { name, description, difficulte, image, ingredients, temps } = req.body;

    if (!name || !description || !difficulte || !ingredients) {
        return res.status(400).json({ error: 'Le nom, la description, la difficulté, et les ingrédients sont requis' });
    }

    const ingredientsString = JSON.stringify(ingredients);

    db.query(
        'UPDATE cocktail SET Name = ?, Description = ?, Id_difficulte = ?, Image = ?, Ingredients = ?, Temps = ? WHERE Id = ?', 
        [name, description, difficulte, image || null, ingredientsString, temps || null, cocktailId], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erreur lors de la mise à jour du cocktail' });
                return;
            }

            if (result.affectedRows > 0) {
                res.json({ message: 'Cocktail mis à jour avec succès' });
            } else {
                res.status(404).json({ error: 'Cocktail non trouvé' });
            }
        }
    );
});



app.delete('/cocktail/:id', (req, res) => {
    const cocktailId = parseInt(req.params.id);

    db.query('DELETE FROM cocktail WHERE Id = ?', [cocktailId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la suppression du cocktail' });
            return;
        }

        if (result.affectedRows > 0) {
            res.json({ message: 'Cocktail supprimé avec succès' });
        } else {
            res.status(404).json({ error: 'Cocktail non trouvé' });
        }
    });
});




app.get('/', (req, res) => {
    res.send('Serveur en cours d\'exécution et connecté à la base de données !');
});


app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
