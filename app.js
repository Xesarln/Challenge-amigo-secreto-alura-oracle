let amigos = [];
//Variables con objetos HTML 
let listaHTML = document.querySelector('#listaAmigos');
let ingresarAmigos = document.querySelector('#amigo');
let resultado = document.querySelector('#resultado');
//agregar amigos
function agregarAmigo() {
    let nombre = ingresarAmigos.value.trim(); //trim() lo usamos para borrar espacios en blanco al comienzo y al final

    if(nombre === ''){
        alert('Por favor, ingresa un nombre de un amigo');
        return;
    }

    if(amigoRepetido(nombre) === 'agregar'){
        amigos.push(nombre); //agregar nombre
        ingresarAmigos.value = ""; //Vaciar input
        listarAmigos(); //Actualizar
    }

    return;
}
//buscarrepetido
function amigoRepetido(amigo) { //verificar
    let agregarRepetido;
    let veces = 0;

    for (let i = 0; i < amigos.length; i++) {
        if(amigos[i]===amigo){
            veces++;
        }
    }

     if(veces === 0){
        return 'agregar';
    } else { 
        agregarRepetido = confirm(`Ya ingregó ese nombre ${veces} ${veces > 1 ? 'veces' : 'vez'} ¿Quieres continuar?`); 
        return agregarRepetido === true ? 'agregar' : 'ignorar';
    }
}
//listar
function listarAmigos() {
    let contenidoDeLista = '';

    for(let i = 0; i<amigos.length; i++){
        contenidoDeLista+= `<li> ${amigos[i]} </li>`;
    }
    listaHTML.innerHTML=contenidoDeLista; //No hace falta vaciar el elemento. Con esta variable reemplazamos el contenido.
    return;
}
//sortear
function sortearAmigo() {
    let indexGanador = Math.floor(Math.random()*amigos.length); 
    if(amigos.length > 0) {
        resultado.innerHTML=`Tu amigo secreto es ${amigos[indexGanador]}`;
    }else {
        resultado.innerHTML='Ingrese los Nombres a sortear';
    }

}
