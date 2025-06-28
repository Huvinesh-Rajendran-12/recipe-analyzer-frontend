<script lang="ts">
  export let ingredients: string = '';
  export let dietaryRestrictions: string = '';
  export let onSubmit: () => void;
  export let disabled: boolean = false;

  function handleSubmit(event: Event) {
    event.preventDefault();
    if (ingredients.trim()) {
      onSubmit();
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.ctrlKey) {
      handleSubmit(event);
    }
  }
</script>

<form on:submit={handleSubmit} class="ingredient-form">
  <label for="ingredients">
    Enter your available ingredients (comma-separated):
  </label>
  <textarea
    id="ingredients"
    bind:value={ingredients}
    placeholder="e.g., chicken, rice, tomatoes, garlic, olive oil"
    rows="4"
    {disabled}
    on:keydown={handleKeydown}
    class="ingredient-input"
  />
  
  <label for="dietary-restrictions">
    Dietary restrictions (optional):
  </label>
  <input
    id="dietary-restrictions"
    type="text"
    bind:value={dietaryRestrictions}
    placeholder="e.g., vegetarian, gluten-free, vegan"
    {disabled}
    class="dietary-input"
  />
  
  <button type="submit" {disabled} class="submit-button">
    Generate Recipes
  </button>
</form>

<style>
  .ingredient-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  label {
    font-weight: 600;
    color: #333;
  }

  .ingredient-input,
  .dietary-input {
    padding: 0.75rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.2s;
  }

  .ingredient-input {
    resize: vertical;
  }

  .ingredient-input:focus,
  .dietary-input:focus {
    outline: none;
    border-color: #ff6b6b;
  }

  .ingredient-input:disabled,
  .dietary-input:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  .submit-button {
    padding: 0.75rem 1.5rem;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .submit-button:hover:not(:disabled) {
    background-color: #ff5252;
  }

  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>