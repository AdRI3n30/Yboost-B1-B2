export interface Cocktail {
  Id: number;
  Name: string;
  Descri: string;
  Id_difficulte: string;
  Image: string | null;
  Temps: string | null;
}

export interface Ingredient {
  Id: number;
  Name: string;
  Quantity: string;
}

export interface CocktailDetail {
  Id: number;
  Name: string;
  Description: string;
  Difficulte: string;
  Image: string | null;
  Temps: number | null;
  Ingredients: Ingredient[];
}
