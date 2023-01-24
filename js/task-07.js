
 const sizeInput = document.getElementById('font-size-control');
 const textSpan = document.getElementById('text');

  textSpan.style.fontSize = `${sizeInput.value}px`;
sizeInput.addEventListener('input', () => {
    textSpan.style.fontSize =  `${sizeInput.value}px`;
});
   
console.log(textSpan.textContent);
 
