const refs = {
    textInput: document.getElementById('name-input'),
    textOutput: document.getElementById('name-output'),
};

 refs.textInput.addEventListener('input', onInputChange)



 function onInputChange(event){
    console.log(event.currentTarget.value);
    refs.textOutput.textContent = event.currentTarget.value;
    if (textInput.value !== '0'){
        textOutput.textContent = textnput.value;
    }
    else {
        textOutput.textContent = 'Anonimus';
    }
    
 }
