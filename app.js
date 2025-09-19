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