const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Wersja 1 - pętla

// const ingredientsList = document.getElementById('ingredients');
// ingredients.forEach(element => {
//   const listItem = document.createElement("li");
//   listItem.innerText = `${element}`;
//   listItem.className = "item";
//   ingredientsList.insertAdjacentElement("beforeend", listItem);
// });

// Wersja 2 - wszystko naraz

const list = document.querySelector("#ingredients");
const allItems = ingredients
  .map((ingredient) => `<li class="item new">${ingredient}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", allItems);
