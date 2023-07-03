//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 34//

// (1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

  function contadorDePalabras(texto) {
    if (typeof texto === "string") {
        console.log(`La palabra ${texto.length} SI es un STRING`)
    } else {
        console.warn("La palabra que ingresaste NO es un STRING.")
    }
  }

contadorDePalabras("Galletita")
contadorDePalabras(null)


// (2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function reductorDePalabras(palabra, numero1, numero2) {
  if (
    typeof palabra === "string" &&
    typeof numero1 === "number" &&
    typeof numero2 === "number"
  ) {
    console.log(palabra.slice(numero1, numero2));
  } else { 
    console.warn("Tu palabra NO es un STRING o tu valor no es un NÚMERO.");
  }
}
reductorDePalabras("Enojado Oso Atacando", 7, 11);
reductorDePalabras("Gordo Quejoso Judio", 0, 5);
reductorDePalabras("Gorda Asquerosa", 0, 6);
reductorDePalabras(null)

// (3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function separadorDePalabras(oracion) {
    if(typeof oracion === "string") {
        console.log(`La siguiente oración "${oracion.split(" ")}" se considera un STRING, buen trabajo`)
    } else {
        console.warn("Lo sentimos, pero el carácter ingresado no es un STRING.")
    }
}

separadorDePalabras("Estoy estudiando para programar")
separadorDePalabras(1)

// (4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirPalabras(palabrotas) {
    if(typeof palabrotas === "string") {
        console.log(palabrotas.repeat(10))
    } else {
        console.warn("INCORRECTO, recuerda que para utilizar este método debes ingresar una cadena de texto.")
    }
}

repetirPalabras("HOLA, SOY UNA PALABROTA PORQUE ESTOY EN MAYÚSCULA")
repetirPalabras(1)


//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 35//

// (5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertirPalabras(invertir) {
    if (typeof invertir === "string") {
      const palabras = invertir.split(" ");
      const palabrasInvertidas = palabras.reverse();
      const textoInvertido = palabrasInvertidas.join(" ");
      console.log(`Así es, tu texto al revés se vería de la siguiente forma: "${textoInvertido}"`);
    }
  }
  
  invertirPalabras("Funciona pero LAS PALABRAS NO SALEN INVERTIDAS");
  

// (6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// (7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// (8)  Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.