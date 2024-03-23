const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (ingredient of ingredients) {
  const ingredient = document.createElement("li");
  ingredient.textContent = `${ingredient}`;
  ingredient.className = "item";
  ingredients.apend(ingredient);
}