const categoriesList = document.querySelectorAll('#categories .item');

// Liczba kategorii
const categoryCount = categoriesList.length;
console.log('Liczba kategorii:', categoryCount);

// Dla każdej kategorii znajdź nagłówek h2 i liczbę elementów li w jej obrębie
categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const itemCount = category.querySelectorAll('ul > li').length;
    console.log(`Kategoria: ${categoryName}, Liczba elementów: ${itemCount}`);
});