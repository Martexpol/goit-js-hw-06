const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul");

for (ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.innerText = `${ingredient}`;
  listItem.className = "item";
  ingredients.apend(listItem);
}