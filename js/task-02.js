const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul");

ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.innerText = `${ingredient}`;
  listItem.className = "item";
  ingredients.apend(listItem);
});