# Smart Recipe Analyzer - Svelte Frontend

A Svelte TypeScript frontend application that allows users to input ingredients and receive AI-generated recipe suggestions with nutritional information.

## Features

- 🍳 Input ingredients via text box (comma-separated)
- 🤖 Get AI-generated recipe suggestions
- 📊 View nutritional information (calories, protein, carbs)
- ⏱️ See cooking time and difficulty level
- 📱 Responsive design for mobile and desktop
- ⚡ Loading states and error handling

## Prerequisites

- Node.js (v16 or higher)
- npm
- A running backend service that provides the recipe generation API

## Setup

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Configure the API endpoint:
   - Copy `.env.example` to `.env`
   - Update `VITE_API_URL` with your backend API URL

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # UI components
│   ├── IngredientInput.svelte
│   ├── RecipeCard.svelte
│   ├── RecipeList.svelte
│   ├── LoadingSpinner.svelte
│   └── ErrorMessage.svelte
├── services/           # API integration
│   └── api.ts
├── types/             # TypeScript interfaces
│   └── recipe.ts
└── App.svelte         # Main application component
```

## API Integration

The frontend calls the backend API at:
- **Endpoint**: `POST /api/analyze`
- **Request payload**: 
  ```json
  {
    "ingredients": "pasta, garlic, butter, parmesan",
    "dietary_restrictions": "vegetarian"
  }
  ```
- **Response**: JSON matching the `RecipeResponse` interface

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Technologies Used

- Svelte
- TypeScript
- Vite
- CSS3 (with responsive design)
