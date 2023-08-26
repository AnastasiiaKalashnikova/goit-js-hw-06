const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);

categories.forEach((categorie, categories) => {
    console.log(`Category: ${categorie.firstElementChild.textContent}
Elements: ${categorie.lastElementChild.children.length}`);
})
