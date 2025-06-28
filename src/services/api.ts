import type { RecipeResponse, ApiError } from "../types/recipe";

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export class RecipeService {
  static async generateRecipes(
    ingredients: string,
    dietaryRestrictions: string = "",
  ): Promise<RecipeResponse> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/analyze`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ingredients: ingredients,
            dietary_restrictions: dietaryRestrictions,
          }),
        },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.message ||
            `HTTP error! status: ${response.status}`,
        );
      }

      const data = await response.json();
      // If the API returns the data in a different format, transform it here
      // For now, assuming it returns { recipes: [...] }
      return data as RecipeResponse;
    } catch (error) {
      if (error instanceof Error) {
        throw {
          message: error.message,
          code: "NETWORK_ERROR",
        } as ApiError;
      }
      throw {
        message: "An unexpected error occurred",
        code: "UNKNOWN_ERROR",
      } as ApiError;
    }
  }
}
