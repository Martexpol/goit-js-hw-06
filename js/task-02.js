const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = `${ingredient}`;
  li.className = "item";
  ingredients.apend(li);
}