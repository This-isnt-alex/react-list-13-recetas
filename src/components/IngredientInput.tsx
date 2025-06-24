import type React from 'react';
import { useState } from 'react';

interface IngredientInputProps {
  selectedIngredients: string[];
  onAddIngredient: (ingredient: string) => void;
  onRemoveIngredient: (ingredient: string) => void;
  onClearAll: () => void;
}

// Common ingredients for autocomplete suggestions
const commonIngredients = [
  'eggs', 'milk', 'butter', 'salt', 'pepper', 'garlic', 'onion', 'tomatoes',
  'cheese', 'chicken breast', 'ground beef', 'rice', 'pasta', 'spaghetti',
  'olive oil', 'flour', 'sugar', 'bread', 'lettuce', 'carrots', 'broccoli',
  'bell peppers', 'potatoes', 'avocado', 'lemon juice', 'basil', 'parsley',
  'mozzarella cheese', 'parmesan cheese', 'feta cheese', 'sour cream',
  'baking powder', 'vanilla', 'chocolate chips', 'bananas', 'cucumbers',
  'red onion', 'olives', 'oregano', 'balsamic vinegar', 'vegetable broth',
  'green beans', 'corn', 'celery', 'soy sauce', 'ginger', 'cumin',
  'chili powder', 'taco shells', 'brown sugar', 'baking soda'
];

export function IngredientInput({
  selectedIngredients,
  onAddIngredient,
  onRemoveIngredient,
  onClearAll
}: IngredientInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter suggestions based on input
  const filteredSuggestions = commonIngredients.filter(ingredient =>
    ingredient.toLowerCase().includes(inputValue.toLowerCase()) &&
    !selectedIngredients.includes(ingredient.toLowerCase()) &&
    inputValue.length > 0
  ).slice(0, 8); // Limit to 8 suggestions

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowSuggestions(value.length > 0);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      addIngredient(inputValue.trim());
    }
  };

  const addIngredient = (ingredient: string) => {
    if (ingredient && !selectedIngredients.includes(ingredient.toLowerCase())) {
      onAddIngredient(ingredient);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (ingredient: string) => {
    addIngredient(ingredient);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onFocus={() => setShowSuggestions(inputValue.length > 0)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Type an ingredient (e.g., eggs, chicken, tomatoes)..."
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {filteredSuggestions.map((ingredient) => (
                <button
                  key={ingredient}
                  onClick={() => handleSuggestionClick(ingredient)}
                  className="w-full px-4 py-2 text-left hover:bg-orange-50 focus:bg-orange-50 focus:outline-none first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  <span className="text-gray-800">{ingredient}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => inputValue.trim() && addIngredient(inputValue.trim())}
          disabled={!inputValue.trim()}
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Add Ingredient
        </button>
      </div>

      {/* Selected Ingredients Tags */}
      {selectedIngredients.length > 0 && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Your Ingredients ({selectedIngredients.length})
            </h3>
            <button
              onClick={onClearAll}
              className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
            >
              Clear All
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedIngredients.map((ingredient) => (
              <div
                key={ingredient}
                className="inline-flex items-center gap-2 px-3 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
              >
                <span>{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</span>
                <button
                  onClick={() => onRemoveIngredient(ingredient)}
                  className="text-orange-600 hover:text-orange-800 focus:outline-none transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Add Common Ingredients */}
      {selectedIngredients.length === 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">Popular Ingredients</h3>
          <div className="flex flex-wrap gap-2">
            {['eggs', 'chicken breast', 'garlic', 'onion', 'tomatoes', 'cheese', 'rice', 'pasta'].map((ingredient) => (
              <button
                key={ingredient}
                onClick={() => addIngredient(ingredient)}
                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors"
              >
                {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
