import React, { useState, useMemo } from 'react';
import { recipes } from './data/recipes';
import type { Recipe } from './types/recipe';
import { RecipeCard } from './components/RecipeCard';
import { IngredientInput } from './components/IngredientInput';
import { RecipeModal } from './components/RecipeModal';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [sortBy, setSortBy] = useState<'match' | 'time' | 'difficulty'>('match');

  // Calculate recipe matches based on available ingredients
  const recipesWithMatches = useMemo(() => {
    return recipes.map(recipe => {
      const matchingIngredients = recipe.ingredients.filter(ingredient =>
        selectedIngredients.some(selected =>
          ingredient.toLowerCase().includes(selected.toLowerCase()) ||
          selected.toLowerCase().includes(ingredient.toLowerCase())
        )
      );

      const matchPercentage = selectedIngredients.length > 0
        ? (matchingIngredients.length / recipe.ingredients.length) * 100
        : 0;

      return {
        ...recipe,
        matchingIngredients,
        matchPercentage,
        missingIngredients: recipe.ingredients.filter(ingredient =>
          !matchingIngredients.includes(ingredient)
        )
      };
    });
  }, [selectedIngredients]);

  // Filter and sort recipes
  const displayedRecipes = useMemo(() => {
    let filtered = recipesWithMatches;

    // Only show recipes with at least one matching ingredient if ingredients are selected
    if (selectedIngredients.length > 0) {
      filtered = filtered.filter(recipe => recipe.matchingIngredients.length > 0);
    }

    // Sort recipes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'match':
          return b.matchPercentage - a.matchPercentage;
        case 'time':
          return (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime);
        case 'difficulty': {
          const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        }
        default:
          return 0;
      }
    });

    return filtered;
  }, [recipesWithMatches, selectedIngredients, sortBy]);

  const handleAddIngredient = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient.toLowerCase())) {
      setSelectedIngredients([...selectedIngredients, ingredient.toLowerCase()]);
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };

  const clearAllIngredients = () => {
    setSelectedIngredients([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            🍳 Recipe Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us what ingredients you have, and we'll find delicious recipes you can make right now!
          </p>
        </div>

        {/* Ingredient Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <IngredientInput
            selectedIngredients={selectedIngredients}
            onAddIngredient={handleAddIngredient}
            onRemoveIngredient={handleRemoveIngredient}
            onClearAll={clearAllIngredients}
          />
        </div>

        {/* Results Header */}
        {selectedIngredients.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-white rounded-xl p-4 shadow-sm">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800">
                Found {displayedRecipes.length} recipes
              </h2>
              <p className="text-gray-600">
                Using: {selectedIngredients.map(ing =>
                  ing.charAt(0).toUpperCase() + ing.slice(1)
                ).join(', ')}
              </p>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'match' | 'time' | 'difficulty')}
                className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="match">Best Match</option>
                <option value="time">Cooking Time</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </div>
        )}

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              matchingIngredients={recipe.matchingIngredients}
              matchPercentage={recipe.matchPercentage}
              missingIngredients={recipe.missingIngredients}
              onViewRecipe={() => setSelectedRecipe(recipe)}
            />
          ))}
        </div>

        {/* Empty State */}
        {selectedIngredients.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🥘</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Start by adding ingredients
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Type in the ingredients you have available, and we'll show you amazing recipes you can make!
            </p>
          </div>
        )}

        {/* No Results */}
        {selectedIngredients.length > 0 && displayedRecipes.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No recipes found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adding different ingredients or removing some to see more recipe options.
            </p>
          </div>
        )}

        {/* Recipe Modal */}
        {selectedRecipe && (
          <RecipeModal
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
