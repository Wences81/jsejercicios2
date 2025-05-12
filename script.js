/*
(function () {
    var n1 = prompt("Inserta un número");
    var n2 = prompt("Inserta un número");
    var n3 = prompt("Inserta un número");

    var menor;

    if (n1 <= n2 && n1 <= n3) {
        menor = n1;
    } else if (n2 <= n1 && n2 <= n3) {
        menor = n2;
    } else {
        menor = n3
    }

    alert("El numero menor es:" + menor);
})();
*/




const modo1 = () => {
    var frase = prompt("Inserta una frase");
    var letra = prompt("Inserta una letra");

    var contador = 0;

    for (let caracter of frase) {
        if (caracter === letra) {
            contador++;
        }
    }

    alert("La letra" + letra + "aparece" + contador + "veces");

    console.log("Ejercicio1")
}

const modo2 = function () {
    var n1 = parseFloat(prompt("Inserta el primer numero"));
    var n2 = parseFloat(prompt("Inserta el segundo numero"));
    var operacion = prompt("escribe 'sumar' o 'restar'");

    var resultado;

    if (operacion === "sumar") {
        resultado = n1 + n2;
    } else if (operacion === "restar") {
        resultado = n1 - n2;
    } else {
        alert("Operacion no valida");
    }

    if (resultado !== undefined) {
        alert("El resultado es:" + resultado);
    }
}



 function modo3 () {
    var letra = prompt("Inserta una letra");

    if (letra === "a") {
        alert(7);
    } else if (letra === "b") {
        alert(9);
    } else if (letra === "c") {
        alert(101);
    } else {
        alert("Te has equivocado");
    }
}

const ejercicio1 = function () {
    let numero = prompt("Inserta un numero entero:");

    let numeroTexto = parseInt(numero).toString();

    let cifras = numeroTexto.length;

    alert("El numero tiene" + cifras + "cifras")
}

const ejercicio2 = () => {
    let cantidad = parseInt(prompt("Cuantas * deseas mostrar?"));

    let resultado = "";

    for (let i = 0; i < cantidad; i++) {
        resultado = resultado + "*";
    }
    alert(resultado);
}

