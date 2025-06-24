import React from 'react';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  matchingIngredients: string[];
  matchPercentage: number;
  missingIngredients: string[];
  onViewRecipe: () => void;
}

export function RecipeCard({
  recipe,
  matchingIngredients,
  matchPercentage,
  missingIngredients,
  onViewRecipe
}: RecipeCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    if (percentage >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getMatchBgColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    if (percentage >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1">
      <div onClick={onViewRecipe}>
        {/* Recipe Image */}
        <div className="relative h-48 bg-gradient-to-br from-orange-200 to-red-200 overflow-hidden">
          {recipe.image ? (
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">
              🍽️
            </div>
          )}

          {/* Match Percentage Badge */}
          {matchPercentage > 0 && (
            <div className="absolute top-3 right-3">
              <div className={`px-3 py-1 rounded-full text-white font-bold text-sm ${getMatchBgColor(matchPercentage)}`}>
                {Math.round(matchPercentage)}% match
              </div>
            </div>
          )}

          {/* Difficulty Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="p-5">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">
              {recipe.name}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {recipe.description}
            </p>
          </div>

          {/* Recipe Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {recipe.prepTime + recipe.cookTime}m
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {recipe.servings} servings
              </span>
            </div>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {recipe.cuisine}
            </span>
          </div>

          {/* Ingredient Match Info */}
          {matchingIngredients.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  You have:
                </span>
                <span className={`text-sm font-bold ${getMatchColor(matchPercentage)}`}>
                  {matchingIngredients.length}/{recipe.ingredients.length} ingredients
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${getMatchBgColor(matchPercentage)}`}
                  style={{ width: `${matchPercentage}%` }}
                />
              </div>

              {/* Matching ingredients */}
              <div className="text-xs text-gray-600 mb-2">
                <span className="font-medium">✓ Have: </span>
                {matchingIngredients.slice(0, 3).join(', ')}
                {matchingIngredients.length > 3 && ` +${matchingIngredients.length - 3} more`}
              </div>

              {/* Missing ingredients */}
              {missingIngredients.length > 0 && (
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Need: </span>
                  {missingIngredients.slice(0, 3).join(', ')}
                  {missingIngredients.length > 3 && ` +${missingIngredients.length - 3} more`}
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {recipe.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {recipe.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">
                +{recipe.tags.length - 3}
              </span>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewRecipe();
            }}
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-colors"
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
