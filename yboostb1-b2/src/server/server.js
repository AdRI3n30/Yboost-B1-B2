const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

async function fetchCocktailDB(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`CocktailDB error ${res.status} for ${path}`);
  return res.json();
}

function computeDifficulte(count) {
  if (count <= 4) return 'Facile';
  if (count <= 7) return 'Moyenne';
  return 'Difficile';
}

function extractIngredients(drink) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const name = drink[`strIngredient${i}`];
    if (!name || name.trim() === '') break;
    ingredients.push({
      Id: i,
      Name: name.trim(),
      Quantity: (drink[`strMeasure${i}`] || '').trim() || 'Q.S.',
    });
  }
  return ingredients;
}

function mapDrinkToList(drink) {
  const ingredients = extractIngredients(drink);
  return {
    Id: parseInt(drink.idDrink, 10),
    Name: drink.strDrink,
    Descri: (drink.strInstructionsFR || drink.strInstructions || '').substring(0, 200),
    Id_difficulte: computeDifficulte(ingredients.length),
    Image: drink.strDrinkThumb || null,
    Temps: null,
  };
}

function mapDrinkToDetail(drink) {
  const ingredients = extractIngredients(drink);
  return {
    Id: parseInt(drink.idDrink, 10),
    Name: drink.strDrink,
    Description: drink.strInstructionsFR || drink.strInstructions || '',
    Difficulte: computeDifficulte(ingredients.length),
    Image: drink.strDrinkThumb || null,
    Temps: null,
    Ingredients: ingredients,
  };
}

const CACHE_TTL_MS = 60 * 60 * 1000;
let cocktailsCache = null;
let cacheTimestamp = 0;

async function fetchAllCocktails() {
  if (cocktailsCache && (Date.now() - cacheTimestamp) < CACHE_TTL_MS) return cocktailsCache;

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const results = await Promise.all(
    letters.map(l =>
      fetchCocktailDB(`/search.php?f=${l}`)
        .then(d => d.drinks || [])
        .catch(() => [])
    )
  );

  const seen = new Set();
  const all = [];
  for (const batch of results) {
    for (const drink of batch) {
      if (!seen.has(drink.idDrink)) {
        seen.add(drink.idDrink);
        all.push(mapDrinkToList(drink));
      }
    }
  }

  all.sort((a, b) => a.Name.localeCompare(b.Name));
  cocktailsCache = all;
  cacheTimestamp = Date.now();
  return all;
}

app.get('/cocktails', async (req, res) => {
  try {
    const cocktails = await fetchAllCocktails();
    res.json(cocktails);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des cocktails' });
  }
});

// /random AVANT /:id pour éviter que "random" soit interprété comme un ID
app.get('/cocktails/random', async (req, res) => {
  try {
    const data = await fetchCocktailDB('/random.php');
    if (!data.drinks || data.drinks.length === 0) {
      return res.status(404).json({ error: 'Aucun cocktail trouvé' });
    }
    res.json(mapDrinkToDetail(data.drinks[0]));
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération du cocktail aléatoire' });
  }
});

app.get('/cocktails/:id', async (req, res) => {
  const cocktailId = req.params.id;
  if (!/^\d+$/.test(cocktailId)) {
    return res.status(400).json({ error: 'ID invalide' });
  }
  try {
    const data = await fetchCocktailDB(`/lookup.php?i=${cocktailId}`);
    if (!data.drinks || data.drinks.length === 0) {
      return res.status(404).json({ error: 'Cocktail non trouvé' });
    }
    res.json(mapDrinkToDetail(data.drinks[0]));
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération du cocktail' });
  }
});

app.get('/', (req, res) => {
  res.send('Serveur en cours d\'exécution');
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
