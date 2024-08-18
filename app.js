let numeroSecreto = 0;
let intentos = 0;  
// variable para no repetir el numero secreto
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento ("p",`Acertaste el numero en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }     else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","Numero secreto es menor");
        } else {
             asignarTextoElemento("p","Numero secreto es mayor");
        }
        intentos++;
        
        limpiarCaja();
             
             return;
             
        }
}
function generarNumeroSecreto () {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        // si ya sorteamos todos los numeros
        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento("p","Ya sorteaste todos los numeros posibles");
        }else {

        // si el numero generado esta incluido en la lista de numeros sorteados
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            } else {
         listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
            }
    }
}

// funcion para limpiar caja
function limpiarCaja() {
   document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
    asignarTextoElemento ("h1","Juego del Numero Secreto");
    asignarTextoElemento ("p",`Indicame un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

// funcion para reiniciar juego
function reinciarJuego() {
    // limpiar caja
    limpiarCaja(); 
    //Indicar mensaje de intervalo de numeros
    //Generar nuevo numero secreto
     //Inicializar el numero de intentos
    condicionesIniciales();   
    //Deshabilitar boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();