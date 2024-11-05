const categories = document.querySelectorAll(".item");

const amountOfCateg = categories.length; 
console.log(`Number of categories: ${amountOfCateg}`);

categories.forEach((categorie) => {
    const nameOfCateg = categorie.firstElementChild.textContent;
    const amountOfLi = categorie.querySelectorAll("li").length;
    console.log(`Category: ${nameOfCateg}`);
    console.log(`Elements: ${amountOfLi}`);   
} )