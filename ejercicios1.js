//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 34//

// (1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function ejercicio1 () {
    let primero = "Hola, este es mi PRIMER ejercicio y creo que va bien"
    console.log(primero.length);
  }
  
  ejercicio1()

function ejercicioprueba (diana) {
    return diana;
    let texto = "Hola, estoy probando este ejercicio"
    let probando = ejercicioprueba(texto)
    console.log(probando.length)
}

ejercicioprueba()

// (2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function ejercicio2 () {
    let segundo = "Hola, este es mi SEGUNDO ejercicio y poco a poco va bien"
    console.log(segundo.slice(0,4));
}

ejercicio2()

// (3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function ejercicio3 () {
    let tercero = "Hola, este es mi TERCER ejercicio y va mejorando"
    console.log(tercero.split(" "))
}

ejercicio3()

// (4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function ejercicio4 () {
    let cuarto = "Hola, este es mi CUARTO ejercicio y ya lo dominé (o eso creo) "
    console.log(cuarto.repeat(10))
}

ejercicio4()

//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 35//


