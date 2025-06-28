export interface Nutrition {
  calories: number;
  protein: string;
  carbs: string;
}

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  nutrition: Nutrition;
}

export interface RecipeResponse {
  recipes: Recipe[];
}

export interface ApiError {
  message: string;
  code?: string;
}