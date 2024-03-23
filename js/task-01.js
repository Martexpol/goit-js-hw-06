const categoriesList = document.querySelectorAll(".item");

const categoryCount = categoriesList.length;
console.log('Number of categories:', categoryCount);


categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const itemCount = category.querySelectorAll('ul > li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
});