let numeroSecreto = generalNumeroSecreto()

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    console.log(numeroDeUsuario)
    return;
}

function generalNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+ 1;
    return numeroSecreto;
}
asignarTextoElemento('h1','juego del numero secreto!');
asignarTextoElemento('p','Indica un número del 1 al 100');