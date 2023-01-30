const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//  const body = document.getElementById("ingredients");
// const ulElem = document.createElement('ul');
// for(const ingredient of ingredients){
//   const liElem = document.createElement('li');
//   liElem.textContent = ingredient;
//   liElem.classList.add("item");
// console.log(liElem.classList);
//   ulElem.appendChild(liElem);
//    console.log (ingredient);
// }
// body.appendChild(ulElem)
            //*map*
// const ulElem = document.createElement('ul');

// const listContent = ingredients
// .map ((ingredient) => `<li>${ingredient}</li>`)
// .join("");
// ulElem.insertAdjacentHTML('beforeend', listContent);
// console.log('~ listContent', listContent);
// body.appendChild(ulElem);

// const text = document.getElementById('text');
// console.log(text.textContent);

   //*reduce

//    const ulElem = document.createElement('ul');
//    const listContent = ingredients
// .reduce ((acc, ingredient) => (acc += `<li> ${ingredient}</li>`),
// '');
// console.log('~ listContent', listContent);
// ulElem.insertAdjacentHTML('beforeend', listContent);
// body.appendChild(ulElem);

const list = document.querySelector("#ingredients");

const liItems = [];
ingredients.map((item) => {
  const liElement = document.createElement("li");
  liElement.textContent = item;
  liElement.classList.add("item");
  liItems.push(liElement);
});

list.append(...liItems);

