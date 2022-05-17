function mostrar_numeros(numero) {
    document.getElementById("display").value = numero;
}

document.getElementById("display").value = 0;


var cantidad = "";
var sumatoria = 0;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
var porcientos = false;
var raizcuadrada = false;
var potenciar = false;
var contador = 0;

function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

// function suma() {
//     sumatoria = sumatoria + parseInt(cantidad);
//     document.getElementById("display").value = sumatoria;
//     cantidad = "";
//     sumar = true;
// }

// function resta() {
//     sumatoria = sumatoria + parseInt(cantidad);
//     document.getElementById("display").value = sumatoria;
//     cantidad = "";
//     restar = true;
// }

// function multiplicacion() {
//     if (contador == 0) {
//         sumatoria = sumatoria + parseInt(cantidad);
//     } else {
//         sumatoria = document.getElementById("display").value;
//     }
//     document.getElementById("display").value = sumatoria;
//     cantidad = "";
//     console.log(sumatoria);
//     multiplicar=true;
//     contador++;
// }

// function division() {
//     sumatoria = sumatoria + parseInt(cantidad);
//     document.getElementById("display").value = sumatoria;
//     cantidad = "";
//     dividir = true;
// }

// function raiz() {
//     raizc = Math.sqrt(cantidad);
//     sumatoria = sumatoria + parseInt(cantidad) * (10);
//     document.getElementById("display").value = raizc
//     cantidad = "";
// }


function suma() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
}

function resta() {
    if (contador == 0) {
        sumatoria = sumatoria + parseInt(cantidad);
    } else {
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar=true;
    contador++;
}

function multiplicacion() {
    if (contador == 0) {
        sumatoria = sumatoria + parseInt(cantidad);
    } else {
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar=true;
    contador++;
}

function division() {
    if (contador == 0) {
        sumatoria = sumatoria + parseInt(cantidad);
    } else {
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    dividir=true;
    contador++;
}

function raiz() {
    raizc = Math.sqrt(cantidad);
    if (contador == 0) {
        sumatoria = sumatoria + parseInt(cantidad);
    } else {
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = raizc;
    cantidad = "";
   raizcuadrada=true;
    contador++;
}

function porciento() {
    sumatoria = sumatoria + parseInt(cantidad) / (100);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    porcientos = true;
}

function potencia() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    potenciar = true;
}

function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);
    }
    if (restar) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad);
    }
    if (multiplicar) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }
    if (dividir) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }
    if (raizcuadrada) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad) / 100;
    }
    if (porcientos) {
        document.getElementById("display").value = sumatoria % parseInt(cantidad);
    }
    if (potenciar) {
        document.getElementById("display").value = sumatoria ** parseInt(cantidad);
    }
}

function borrar() {
    // sumatoria = 0;
    // cantidad = "";
    document.getElementById("display").value = ("0");
    (cantidad = "");
}

