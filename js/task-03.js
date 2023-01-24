const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для створення галереї зображень на підставі масиву даних. 
// HTML містить список ul.gallery.
// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

// Є список ul  з класом gallery
// Є масив даних(об'єктів) images
//  створити <li>, вставити його в список ul
// створення елементів <img>(перебрати масив), вкладених в <li>.
//створити розмітку використовуючи шаблонні рядки і метод insertAdjacentHTML()

const pictures = document.querySelector('.gallery');
const listGallery = document.createElement('li');
listGallery.classList.add('gallery-item');
const imageEl = document.createElement('img');
const markup = images
.map((img) => {
  return `<li class ="gallery-item"><img class = "pictures" src = ${img.url} alt = ${img.alt} width = 100% ></img></li>`})
.join("");

console.log(markup);

pictures.insertAdjacentHTML('beforeend', markup);
console.log(pictures);


pictures.style.listStyle = "list";
pictures.style.display = "flex";
pictures.style.justifyContent = "space-between";
pictures.style.columnGap = "25px";
pictures.style.alignItems = "center";
