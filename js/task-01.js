// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// Znajdź wszystkie elementy li.item w ul#categories
const categoriesList = document.querySelectorAll('#categories').getElementsByTagName('li');

// Liczba kategorii
const categoryCount = categoriesList.length;
console.log('Number of categories:', categoryCount);

// Dla każdej kategorii znajdź nagłówek h2 i liczbę elementów li w jej obrębie
categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const itemCount = category.querySelectorAll('ul > li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
});