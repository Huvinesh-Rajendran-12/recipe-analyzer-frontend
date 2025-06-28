<script lang="ts">
  import { RecipeService } from './services/api';
  import type { Recipe, ApiError } from './types/recipe';
  import IngredientInput from './components/IngredientInput.svelte';
  import RecipeList from './components/RecipeList.svelte';
  import LoadingSpinner from './components/LoadingSpinner.svelte';
  import ErrorMessage from './components/ErrorMessage.svelte';

  let ingredients = '';
  let dietaryRestrictions = '';
  let recipes: Recipe[] = [];
  let isLoading = false;
  let error: string | null = null;

  async function handleGenerateRecipes() {
    if (!ingredients.trim()) {
      error = 'Please enter some ingredients';
      return;
    }

    isLoading = true;
    error = null;

    try {
      const response = await RecipeService.generateRecipes(ingredients, dietaryRestrictions);
      recipes = response.recipes;
    } catch (err) {
      const apiError = err as ApiError;
      error = apiError.message || 'Failed to generate recipes. Please try again.';
      console.error('Error generating recipes:', err);
    } finally {
      isLoading = false;
    }
  }

  function handleRetry() {
    error = null;
    handleGenerateRecipes();
  }
</script>

<main>
  <div class="container">
    <header>
      <h1>🍳 Smart Recipe Analyzer</h1>
      <p class="subtitle">Turn your ingredients into delicious recipes with AI</p>
    </header>

    <IngredientInput 
      bind:ingredients
      bind:dietaryRestrictions
      onSubmit={handleGenerateRecipes}
      disabled={isLoading}
    />

    {#if isLoading}
      <LoadingSpinner />
    {:else if error}
      <ErrorMessage message={error} onRetry={handleRetry} />
    {:else}
      <RecipeList {recipes} />
    {/if}
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #f9f9f9;
  }

  main {
    min-height: 100vh;
    padding: 2rem 1rem;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h1 {
    color: #333;
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
  }

  .subtitle {
    color: #666;
    font-size: 1.1rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }
</style>
