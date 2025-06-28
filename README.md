# 🍳 Smart Recipe Analyzer - Frontend

A modern, responsive web application that transforms your available ingredients into delicious AI-generated recipes with detailed nutritional information. Built with Svelte, TypeScript, and Vite for a fast, type-safe development experience.

![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Project Structure](#project-structure)
- [Components](#components)
- [API Integration](#api-integration)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## ✨ Features

### Core Functionality
- **🥗 Ingredient Input**: Enter available ingredients in a comma-separated format
- **🎯 Dietary Restrictions**: Specify dietary preferences (vegetarian, vegan, gluten-free, etc.)
- **🤖 AI-Powered Recipes**: Get 2-3 intelligently generated recipe suggestions
- **📊 Nutritional Analysis**: View calories, protein, and carbohydrate information
- **⏱️ Cooking Details**: See estimated cooking time and difficulty level
- **📝 Step-by-Step Instructions**: Clear, easy-to-follow cooking instructions

### User Experience
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Real-time Loading States**: Visual feedback during API calls
- **❌ Error Handling**: User-friendly error messages with retry functionality
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **⌨️ Keyboard Shortcuts**: Ctrl+Enter to submit ingredients

## 🚀 Demo

The application consists of:
1. **Input Section**: Where users enter ingredients and dietary restrictions
2. **Loading State**: Animated spinner while recipes are being generated
3. **Results Display**: Recipe cards showing all details in an organized layout

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16.0.0 or higher
- **npm**: Version 7.0.0 or higher (comes with Node.js)
- **Git**: For version control
- **Backend API**: The recipe generation API service running at `http://localhost:8000`

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Huvinesh-Rajendran-12/recipe-analyzer-frontend.git
cd recipe-analyzer-frontend
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

> **Note**: We use `--legacy-peer-deps` due to peer dependency requirements between Vite and Svelte plugins.

### 3. Environment Setup

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and set your API URL (default: http://localhost:8000)
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:8000

# Optional: Add more configuration as needed
# VITE_API_TIMEOUT=30000
# VITE_MAX_RECIPES=3
```

### TypeScript Configuration

The project uses a strict TypeScript configuration. Key settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 💻 Development

### Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Other Development Commands

```bash
# Run type checking
npm run check

# Preview production build
npm run preview

# Format code (if configured)
npm run format

# Lint code (if configured)
npm run lint
```

## 📁 Project Structure

```
svelte-frontend/
├── public/                 # Static assets
│   └── vite.svg           # Default Vite logo
├── src/
│   ├── assets/            # Images and static files
│   │   └── svelte.svg
│   ├── components/        # Reusable UI components
│   │   ├── ErrorMessage.svelte       # Error display component
│   │   ├── IngredientInput.svelte    # Input form component
│   │   ├── LoadingSpinner.svelte     # Loading animation
│   │   ├── RecipeCard.svelte         # Individual recipe display
│   │   └── RecipeList.svelte         # Recipe container
│   ├── services/          # API and external services
│   │   └── api.ts         # Recipe API service
│   ├── types/             # TypeScript type definitions
│   │   └── recipe.ts      # Recipe data interfaces
│   ├── App.svelte         # Main application component
│   ├── app.css            # Global styles
│   ├── main.ts            # Application entry point
│   └── vite-env.d.ts      # Vite type definitions
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore patterns
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── README.md              # This file
├── svelte.config.js       # Svelte configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🧩 Components

### IngredientInput.svelte
Handles user input for ingredients and dietary restrictions.

**Props:**
- `ingredients: string` - Bound value for ingredients textarea
- `dietaryRestrictions: string` - Bound value for dietary input
- `onSubmit: () => void` - Callback function for form submission
- `disabled: boolean` - Disable form inputs during loading

### RecipeCard.svelte
Displays individual recipe information in a card format.

**Props:**
- `recipe: Recipe` - Recipe object containing all recipe data

### RecipeList.svelte
Container component for displaying multiple recipes.

**Props:**
- `recipes: Recipe[]` - Array of recipe objects

### LoadingSpinner.svelte
Animated loading indicator shown during API calls.

### ErrorMessage.svelte
Displays error messages with optional retry functionality.

**Props:**
- `message: string` - Error message to display
- `onRetry?: () => void` - Optional retry callback function

## 🔌 API Integration

### Endpoint Details

The frontend communicates with the backend API using the following specification:

**Endpoint:** `POST /api/analyze`

**Request:**
```typescript
{
  ingredients: string;        // Comma-separated ingredients
  dietary_restrictions: string; // Optional dietary restrictions
}
```

**Response:**
```typescript
{
  recipes: Recipe[];
}
```

### Recipe Data Structure

```typescript
interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
  };
}
```

### Error Handling

The API service handles various error scenarios:
- Network errors
- Invalid responses
- Server errors
- Timeout errors

## 📦 Building for Production

### Build the Application

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Build Output

```
dist/
├── assets/         # Bundled JS and CSS files
├── index.html      # Entry HTML file
└── vite.svg        # Static assets
```

### Deployment

The built files can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drop `dist` folder to Netlify
- **GitHub Pages**: Use GitHub Actions
- **Traditional Server**: Serve the `dist` directory

### Production Environment Variables

For production deployments, ensure your hosting platform has the correct environment variables set:

```bash
VITE_API_URL=https://your-production-api.com
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Enter ingredients and verify recipe generation
- [ ] Test with various dietary restrictions
- [ ] Verify error handling with invalid inputs
- [ ] Test responsive design on different devices
- [ ] Check loading states and animations
- [ ] Verify keyboard shortcuts (Ctrl+Enter)

### API Testing

You can test the API integration using curl:

```bash
curl -X POST http://localhost:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "ingredients": "chicken, rice, vegetables",
    "dietary_restrictions": "gluten-free"
  }'
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Coding Standards

- Use TypeScript for all new code
- Follow the existing component structure
- Add proper type definitions
- Write descriptive commit messages
- Update documentation as needed

## 🐛 Troubleshooting

### Common Issues

**1. Dependency Installation Fails**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**2. API Connection Error**
- Verify backend is running at `http://localhost:8000`
- Check `.env` file has correct `VITE_API_URL`
- Ensure no CORS issues (backend should allow frontend origin)

**3. TypeScript Errors**
```bash
# Run type checking
npm run check

# If issues persist, restart TS server in your IDE
```

**4. Build Failures**
```bash
# Clean and rebuild
rm -rf dist
npm run build
```

### Getting Help

- Check existing [GitHub Issues](https://github.com/yourusername/smart-recipe-analyzer-frontend/issues)
- Review the [Svelte Documentation](https://svelte.dev/docs)
- Consult the [Vite Guide](https://vitejs.dev/guide/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ using Svelte and TypeScript
</div>
