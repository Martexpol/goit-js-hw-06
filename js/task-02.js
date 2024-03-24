const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsList = document.querySelector("ul");
const ingredientsList = document.getElementById('ingredients');

ingredients.forEach(element => {
  const listItem = document.createElement("li");
  listItem.innerText = `${element}`;
  listItem.className = "item";
  ingredientsList.insertAdjacentElement("beforeend", listItem);
});