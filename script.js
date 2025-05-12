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

function ejercicio3() {
    let cantidad = parseInt(prompt("Cuantas repeticiones de ´*+_´"));

    let resultado = "";

    for (let i = 0; i < cantidad; i++) {
        resultado = resultado + "*+_";
    }
    alert(resultado);
}

function ejercicio4() {
    let filas = parseInt(prompt("Cuantas filas quieres en el triangulo?"));

    let resultado = "";

    for (let i = 1; i <= filas; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea = linea + "*";
        }
        resultado = resultado + linea + "\n";
    }
    alert(resultado);
}


function ejercicio5() {
    let dia1 = parseInt(prompt("Inserta el primer dia:"));
    let mes1 = parseInt(prompt("Inserta el primer mes:"));

    let dia2 = parseInt(prompt("Inserta el segundo dia:"));
    let mes2 = parseInt(prompt("Inserta el segundo mes:"));

    let fecha1 = new Date(2024, mes1, dia1);
    let fecha2 = new Date(2024, mes2, dia2);

    let diferenciaMes = fecha2 - fecha1;
    let diferenciaDias = diferenciaMes / (1000 * 60 * 60 * 24);

    alert("La diferencia entre las fechas es de" + diferenciaDias + "dias");
}