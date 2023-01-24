
// 1.створити змінну counterValue

let  counterValue = 0;

//Додай слухачів кліків до кнопок,
//Для того, щоб елемент реагував на дії користувача, 
//до нього необхідно додати слухача (обробника) події.
 //Тобто функцію, яка буде викликана, щойно подія відбулася.
 //кнопка +1 додає слухача, а -1 теж додає

 const addListenerBtn = document.querySelector('[data-action="increment"]');
 const removeListenerBtn = document.querySelector('[data-action="decrement"]');
 const value = document.getElementById("value");

 removeListenerBtn.addEventListener("click", onDecrementClick);
 addListenerBtn.addEventListener("click", onIncrementClick);
 
 function onIncrementClick (){
    counterValue += 1;
    value.textContent = counterValue;
 }
   function onDecrementClick(){
    counterValue -= 1;
    value.textContent = counterValue;
   }

 console.log(counterValue);
