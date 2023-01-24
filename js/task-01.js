
const categories = document.getElementById("categories");
const categoriesCounter = categories.childElementCount;
const headers = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesCounter}`);

for (const header of headers) {

  console.log(`Category: ${header.firstElementChild.textContent}`);

    const childLiElem = header.querySelectorAll("ul");
    
  for (const liElem of childLiElem) {
    console.log(`Elements: ${liElem.childElementCount}`);
  }
}