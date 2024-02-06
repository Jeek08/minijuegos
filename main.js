let puntosusuarios = 0;
let puntospc = 0;

let contenedordepuntosusuarios = document.querySelector("#puntos-usuario");
let contenedordepuntospc = document.querySelector("#puntos-computadora");
let intrucciones = document.querySelector("#intrucciones");

let elegituarma = document.querySelector("#elegi-tu-arma")
let reiniciar = document.querySelector("#reiniciar");

let contenedorganapunto = document.querySelector("#gana-puntos");
let mensajes = document.querySelector("#mensajes");
let contenedoreleccionusuario = document.querySelector("#eleccion-usuario")
let contenedoreleccionpc= document.querySelector("#eleccion-computadora")

let botonesarmas = document.querySelectorAll(".arma button");
botonesarmas.forEach(boton => {
    boton.addEventListener("click", iniciarturno);
});

function iniciarturno(e) {
    let armas = ["✊🏽 Piedra", "✋🏽 Papel", "✌🏽 Tijera"];
    let eleccionpc = armas[Math.floor(Math.random() * 3)];
    let eleccionusuario = e.currentTarget.id;

    if (
        (eleccionusuario === "✊🏽 Piedra" && eleccionpc === "✌🏽 Tijera") ||
        (eleccionusuario === "✌🏽 Tijera" && eleccionpc === "✋🏽 Papel") ||
        (eleccionusuario === "✋🏽 Papel" && eleccionpc === "✊🏽 Piedra")
    ) {
        ganausuario();
    } else if (
        (eleccionpc === "✊🏽 Piedra" && eleccionusuario === "✌🏽 Tijera") ||
        (eleccionpc === "✌🏽 Tijera" && eleccionusuario === "✋🏽 Papel") ||
        (eleccionpc === "✋🏽 Papel" && eleccionusuario === "✊🏽 Piedra")
    ) {
        ganapc();
    } else {
        empate();
    }

    
    mensajes.classList.remove("disabled");
    contenedoreleccionusuario.innerText = eleccionusuario;
    contenedoreleccionpc.innerText = eleccionpc;

    if (puntosusuarios === 6 || puntospc === 6){
        if (puntosusuarios === 6){
            intrucciones.innerText = "🥇 Ganaste 🏆"
        }
        if (puntospc === 6){
            intrucciones.innerText = "🤖 La Computadora Triunfó 🤖"
        }

        elegituarma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarjuego);
    }
}

function ganausuario() {
    puntosusuarios++;
    contenedordepuntosusuarios.innerText = puntosusuarios;
    contenedorganapunto.innerText = "Ganaste un punto!!";
}

function ganapc() {
    puntospc++;
    contenedordepuntospc.innerText = puntospc;
    contenedorganapunto.innerText = "La computadora ganó un punto";
}

function empate() {
    contenedorganapunto.innerText = "Empate";
}
function reiniciarjuego (){
    reiniciar.classList.add("disabled");
    elegituarma.classList.remove("disabled");
    mensajes.classList.add("disabled");

    puntospc = 0;
    puntosusuarios = 0;

    contenedordepuntospc.innerText = puntospc;
    contenedordepuntosusuarios.innerText = puntosusuarios;

    intrucciones.innerText = "El primero en llegar a 6 gana"
}

