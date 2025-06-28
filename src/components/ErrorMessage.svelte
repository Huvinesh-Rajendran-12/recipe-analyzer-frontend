<script lang="ts">
  export let message: string = 'An error occurred';
  export let onRetry: (() => void) | undefined = undefined;
</script>

<div class="error-container">
  <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
  <p class="error-message">{message}</p>
  {#if onRetry}
    <button on:click={onRetry} class="retry-button">
      Try Again
    </button>
  {/if}
</div>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #fee;
    border: 1px solid #fcc;
    border-radius: 8px;
    margin: 1rem 0;
  }

  .error-icon {
    color: #f44336;
    margin-bottom: 1rem;
  }

  .error-message {
    color: #d32f2f;
    text-align: center;
    margin: 0;
    font-size: 1rem;
  }

  .retry-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .retry-button:hover {
    background-color: #d32f2f;
  }
</style>