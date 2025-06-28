<script lang="ts">
  import type { Recipe } from '../types/recipe';

  export let recipe: Recipe;
</script>

<article class="recipe-card">
  <h2>{recipe.name}</h2>
  
  <div class="recipe-meta">
    <span class="meta-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      {recipe.cookingTime}
    </span>
    <span class="meta-item difficulty-{recipe.difficulty.toLowerCase()}">
      {recipe.difficulty}
    </span>
  </div>

  <section class="ingredients">
    <h3>Ingredients</h3>
    <ul>
      {#each recipe.ingredients as ingredient}
        <li>{ingredient}</li>
      {/each}
    </ul>
  </section>

  <section class="instructions">
    <h3>Instructions</h3>
    <ol>
      {#each recipe.instructions as instruction, index}
        <li>{instruction}</li>
      {/each}
    </ol>
  </section>

  <section class="nutrition">
    <h3>Nutrition Information</h3>
    <div class="nutrition-grid">
      <div class="nutrition-item">
        <span class="nutrition-label">Calories</span>
        <span class="nutrition-value">{recipe.nutrition.calories}</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-label">Protein</span>
        <span class="nutrition-value">{recipe.nutrition.protein}</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-label">Carbs</span>
        <span class="nutrition-value">{recipe.nutrition.carbs}</span>
      </div>
    </div>
  </section>
</article>

<style>
  .recipe-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
  }

  h2 {
    color: #333;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  h3 {
    color: #555;
    font-size: 1.1rem;
    margin: 1rem 0 0.5rem 0;
  }

  .recipe-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.9rem;
    color: #666;
  }

  .difficulty-easy {
    color: #4caf50;
  }

  .difficulty-medium {
    color: #ff9800;
  }

  .difficulty-hard {
    color: #f44336;
  }

  .ingredients ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .ingredients li {
    padding: 0.25rem 0;
    padding-left: 1.2rem;
    position: relative;
  }

  .ingredients li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #ff6b6b;
  }

  .instructions ol {
    padding-left: 1.5rem;
    margin: 0;
  }

  .instructions li {
    padding: 0.5rem 0;
  }

  .nutrition {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #eee;
  }

  .nutrition-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .nutrition-item {
    text-align: center;
  }

  .nutrition-label {
    display: block;
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 0.25rem;
  }

  .nutrition-value {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }

  @media (max-width: 768px) {
    .recipe-card {
      padding: 1rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    .nutrition-grid {
      grid-template-columns: 1fr;
    }
  }
</style>