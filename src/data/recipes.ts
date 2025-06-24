import type { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Classic Scrambled Eggs',
    description: 'Fluffy and creamy scrambled eggs perfect for breakfast',
    ingredients: ['eggs', 'butter', 'milk', 'salt', 'pepper'],
    instructions: [
      'Crack eggs into a bowl and whisk with milk, salt, and pepper',
      'Heat butter in a non-stick pan over medium-low heat',
      'Pour in egg mixture and gently stir with a spatula',
      'Continue stirring until eggs are set but still creamy',
      'Serve immediately'
    ],
    prepTime: 5,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'American',
    tags: ['breakfast', 'quick', 'protein'],
    image: 'https://ugc.same-assets.com/FZs_qbQMFIz5PXLM4F7ql4YyHfrylTLW.jpeg'
  },
  {
    id: '2',
    name: 'Spaghetti Aglio e Olio',
    description: 'Simple Italian pasta with garlic and olive oil',
    ingredients: ['spaghetti', 'garlic', 'olive oil', 'red pepper flakes', 'parsley', 'parmesan cheese'],
    instructions: [
      'Cook spaghetti according to package directions until al dente',
      'While pasta cooks, heat olive oil in a large pan',
      'Add sliced garlic and red pepper flakes, cook until fragrant',
      'Drain pasta and add to the pan with garlic oil',
      'Toss with parsley and parmesan cheese',
      'Serve immediately'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    tags: ['pasta', 'vegetarian', 'quick'],
    image: 'https://ugc.same-assets.com/pSsvJHWhS1O8ozJ2DK322AQThekmsJeQ.jpeg'
  },
  {
    id: '3',
    name: 'Chicken Stir Fry',
    description: 'Quick and healthy chicken stir fry with vegetables',
    ingredients: ['chicken breast', 'broccoli', 'carrots', 'bell peppers', 'soy sauce', 'garlic', 'ginger', 'rice'],
    instructions: [
      'Cut chicken into bite-sized pieces and season',
      'Heat oil in a wok or large pan over high heat',
      'Cook chicken until golden, then remove from pan',
      'Stir-fry vegetables until tender-crisp',
      'Return chicken to pan, add soy sauce and seasonings',
      'Serve over cooked rice'
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Asian',
    tags: ['healthy', 'protein', 'vegetables'],
    image: 'https://ugc.same-assets.com/c6lMetI1pl75xivH5XmSjm1RK0O570n7.jpeg'
  },
  {
    id: '4',
    name: 'Avocado Toast',
    description: 'Trendy and nutritious avocado toast with toppings',
    ingredients: ['bread', 'avocado', 'lemon juice', 'salt', 'pepper', 'tomatoes', 'red onion'],
    instructions: [
      'Toast bread slices until golden brown',
      'Mash avocado with lemon juice, salt, and pepper',
      'Spread avocado mixture on toast',
      'Top with sliced tomatoes and red onion',
      'Season with additional salt and pepper if desired'
    ],
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'Modern',
    tags: ['breakfast', 'healthy', 'vegetarian', 'quick'],
    image: 'https://ugc.same-assets.com/v4oMrW1-RfOqbGk8x_rSFjvSEMYQGUkg.jpeg'
  },
  {
    id: '5',
    name: 'Beef Tacos',
    description: 'Delicious ground beef tacos with fresh toppings',
    ingredients: ['ground beef', 'taco shells', 'onion', 'garlic', 'cumin', 'chili powder', 'lettuce', 'tomatoes', 'cheese', 'sour cream'],
    instructions: [
      'Brown ground beef in a large pan',
      'Add diced onion and garlic, cook until soft',
      'Season with cumin, chili powder, salt, and pepper',
      'Warm taco shells according to package directions',
      'Fill shells with beef mixture',
      'Top with lettuce, tomatoes, cheese, and sour cream'
    ],
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Mexican',
    tags: ['dinner', 'meat', 'family-friendly'],
    image: 'https://ugc.same-assets.com/l0q2JsF1ODU99r2teaTQ40FqMKsUnK7X.jpeg'
  },
  {
    id: '6',
    name: 'Caprese Salad',
    description: 'Fresh Italian salad with tomatoes, mozzarella, and basil',
    ingredients: ['tomatoes', 'mozzarella cheese', 'basil', 'olive oil', 'balsamic vinegar', 'salt', 'pepper'],
    instructions: [
      'Slice tomatoes and mozzarella into thick rounds',
      'Arrange alternating slices on a platter',
      'Tuck fresh basil leaves between slices',
      'Drizzle with olive oil and balsamic vinegar',
      'Season with salt and pepper to taste'
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    tags: ['salad', 'vegetarian', 'fresh', 'no-cook'],
    image: 'https://ugc.same-assets.com/W_pXvfMhWDukyMsToPANXJ7Tkv4UB3sW.jpeg'
  },
  {
    id: '7',
    name: 'Banana Pancakes',
    description: 'Fluffy pancakes with mashed banana for extra flavor',
    ingredients: ['flour', 'baking powder', 'sugar', 'salt', 'milk', 'eggs', 'butter', 'bananas'],
    instructions: [
      'Mix dry ingredients in a large bowl',
      'In another bowl, whisk together milk, eggs, and melted butter',
      'Mash one banana and add to wet ingredients',
      'Combine wet and dry ingredients until just mixed',
      'Cook pancakes on a hot griddle until bubbles form',
      'Flip and cook until golden brown',
      'Serve with sliced banana and syrup'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'American',
    tags: ['breakfast', 'sweet', 'family-friendly'],
    image: 'https://ugc.same-assets.com/L9XwjZNR-5bC0k_L1thd-8C4VWpisgo4.jpeg'
  },
  {
    id: '8',
    name: 'Greek Salad',
    description: 'Traditional Greek salad with feta cheese and olives',
    ingredients: ['cucumbers', 'tomatoes', 'red onion', 'feta cheese', 'olives', 'olive oil', 'lemon juice', 'oregano'],
    instructions: [
      'Chop cucumbers, tomatoes, and red onion',
      'Combine vegetables in a large bowl',
      'Add crumbled feta cheese and olives',
      'Whisk together olive oil, lemon juice, and oregano',
      'Pour dressing over salad and toss gently',
      'Let sit for 10 minutes before serving'
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Greek',
    tags: ['salad', 'vegetarian', 'healthy', 'no-cook'],
    image: 'https://ugc.same-assets.com/2VvSJjRh5xtZeKr-ZTU0LpA3A98qGaOb.jpeg'
  },
  {
    id: '9',
    name: 'Chocolate Chip Cookies',
    description: 'Classic homemade chocolate chip cookies',
    ingredients: ['flour', 'baking soda', 'salt', 'butter', 'brown sugar', 'sugar', 'eggs', 'vanilla', 'chocolate chips'],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Mix flour, baking soda, and salt in a bowl',
      'Cream butter with both sugars until fluffy',
      'Beat in eggs and vanilla',
      'Gradually add flour mixture',
      'Stir in chocolate chips',
      'Drop rounded tablespoons on baking sheet',
      'Bake 9-11 minutes until golden brown'
    ],
    prepTime: 20,
    cookTime: 25,
    servings: 24,
    difficulty: 'Easy',
    cuisine: 'American',
    tags: ['dessert', 'baking', 'sweet', 'family-friendly'],
    image: 'https://ugc.same-assets.com/BcLeutQn8SXGzjVyRnP9LrjBC0ecnHw_.jpeg'
  },
  {
    id: '10',
    name: 'Vegetable Soup',
    description: 'Hearty and healthy vegetable soup',
    ingredients: ['carrots', 'celery', 'onion', 'garlic', 'potatoes', 'tomatoes', 'vegetable broth', 'green beans', 'corn'],
    instructions: [
      'Dice all vegetables into uniform pieces',
      'Heat oil in a large pot over medium heat',
      'Sauté onion, carrots, and celery until soft',
      'Add garlic and cook for 1 minute',
      'Add potatoes, tomatoes, and broth',
      'Bring to a boil, then simmer 15 minutes',
      'Add green beans and corn, cook 10 more minutes',
      'Season with salt and pepper to taste'
    ],
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    difficulty: 'Easy',
    cuisine: 'American',
    tags: ['soup', 'vegetarian', 'healthy', 'comfort-food'],
    image: 'https://ugc.same-assets.com/wHIHZ8g05ys53vECujavf44fkLde7Zk2.jpeg'
  }
];
