<script lang="ts">
  import type { Recipe } from '../types/recipe';
  import RecipeCard from './RecipeCard.svelte';

  export let recipes: Recipe[] = [];
</script>

<div class="recipe-list">
  {#if recipes.length === 0}
    <p class="no-recipes">No recipes to display. Enter ingredients and generate recipes to get started!</p>
  {:else}
    <h2>Generated Recipes</h2>
    {#each recipes as recipe}
      <RecipeCard {recipe} />
    {/each}
  {/if}
</div>

<style>
  .recipe-list {
    margin-top: 2rem;
  }

  h2 {
    color: #333;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }

  .no-recipes {
    text-align: center;
    color: #666;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
</style>