var resultInput = document.getElementById('resultado');

function upperConverter() {
    var x = document.getElementById("resultado").classList.item(0);

    if(x) {
        resultInput.classList.remove(x)
        resultInput.classList.add("uppercase")
    } else {
        resultInput.classList.add("uppercase")
    }
    var result = campo.value;
    document.querySelector('[name="resultado"]').value = result;

    event.preventDefault();
}

function lowerConverter() {
    var x = document.getElementById("resultado").classList.item(0);
    
    if(x) {
        resultInput.classList.remove(x)
        resultInput.classList.add("lowercase")
    } else {
        resultInput.classList.add("lowercase")
    }

    var result = campo.value;
    document.querySelector('[name="resultado"]').value = result;

    event.preventDefault();
}

function CapitalizeConverter() {
    var x = document.getElementById("resultado").classList.item(0);
    
    if(x) {
        resultInput.classList.remove(x)
        resultInput.classList.add("captalize")
    } else {
        resultInput.classList.add("captalize")
    }

    var result = campo.value;
    document.querySelector('[name="resultado"]').value = result;

    event.preventDefault();
}

// BOTÃO COPIAR
let btn = document.querySelector('#copiar');

btn.addEventListener('click', function(e) {

  let textArea = document.querySelector('#resultado');
  textArea.select();
  document.execCommand('copy');
});



























// form.addEventListener('submit', function(e) {
//     var result = campo.value;
//     const input = document.querySelector("input");
//     const tiny = document.querySelector("input.tiny");

//     resultInput.classList.add("uppercase")

//     document.querySelector('[name="resultado"]').value = result;

//     // impede o envio do form
//     e.preventDefault();
// });