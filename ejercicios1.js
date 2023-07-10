//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 34//

// (1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

  function contadorDeLetras(texto) {
    if (typeof texto === "string") {
        console.log(`La palabra ${texto.length} SI es un STRING`)
    } else {
        console.warn("La palabra que ingresaste NO es un STRING.")
    }
  }

contadorDeLetras("Galletita")
contadorDeLetras(null)

/*
const contadorDeLetras = (texto) => {
    typeof texto === "string" 
    ? console.log(`La palabra tiene ${texto.length} caracteres.`)
    : console.warn("La palabra que ingresaste NO es un STRING.")
  }

contadorDeLetras("Galletita")
contadorDeLetras(null)*/


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
reductorDePalabras("Pajarito azul cantando", 0, 5);
reductorDePalabras("Delfín saltando", 0, 6);
reductorDePalabras(null)

function reductorDePalabras(palabra, numero1, numero2) {
    typeof palabra === "string" &&
    typeof numero1 === "number" &&
    typeof numero2 === "number"
    ? console.log(palabra.slice(numero1, numero2))
    :console.warn("Tu palabra NO es un STRING o tu valor no es un NÚMERO.");
}
reductorDePalabras("Enojado Oso Atacando", 7, 11);
reductorDePalabras("Pajarito azul cantando", 0, 5);
reductorDePalabras("Delfín saltando", 0, 6);
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

function repetirPalabras(palabrotas, numero) {
    if(typeof palabrotas === "string" && typeof numero === "number") {
        for (let i = 0; i <= numero; i++) 
        console.log(`Tu numero se repitió ${i} veces.`)
        }
    else {
        console.warn("INCORRECTO, recuerda que para utilizar este método debes ingresar una cadena de texto.")
    }
}

repetirPalabras("HOLA, SOY UNA PALABROTA PORQUE ESTOY EN MAYÚSCULA ", 20)
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

  function invertirPalabras(invertir) {
    if (typeof invertir === "string") {
      const palabras = invertir.split(""); //TRANSFORMO STRING A ARRAY, PORQUE NO PUEDO USAR REVERSE EN UN STRING.
      const palabrasInvertidas = palabras.reverse();//INVIERTE EL ARRAY.
      const textoInvertido = palabrasInvertidas.join("");//LO VUELVE A TRANSFORMAR EN STRING.
      console.log(textoInvertido)
    }
  }
  
  invertirPalabras("Buen día");
  
// (6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabras = (texto, palabra) => {
  if (typeof texto === "string" && typeof palabra === "string") {
      const textoArray = texto.split(" ");
      let contador = 0;
      for (let i = 0; i < textoArray.length; i++) {
          if (textoArray[i] === palabra) {
              contador++
          }
      }
      console.log(`Tu palabra "${palabra}" se repitió ${contador} veces.`)
  } else {
      console.warn("Ingresa una cadena de texto, por favor.")
  }
}

contarPalabras("hola amigos adiós amigos amigos", "amigos")
contarPalabras(null)

// (7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const detectorDePalindromo = (palabra) => {
  if (typeof palabra !== "string") {
      console.warn("Por favor, ingrese una palabrita")
  } else {
      const palabraInicial = palabra.toLowerCase()
      const palabraComparar = palabra.split("").reverse().join("").toLowerCase()
      if (palabraInicial === palabraComparar) {
          console.info(`Tu palabra ${palabra} es un palíndromo`)
      }
      else {
          console.info(`Tu palabra ${palabra} NO es un palíndromo`)
      }
  }
}

detectorDePalindromo("oda")
detectorDePalindromo("Ada")
detectorDePalindromo(null)

// (8)  Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (caracteres, expresionRegular, reemplazo) => {
  if (typeof caracteres === "string" && typeof reemplazo !== "undefined" && typeof expresionRegular !==  "undefined") {
      const nuevosCaracteres = caracteres.replace(expresionRegular, reemplazo)
      console.log(nuevosCaracteres)
  } else {
      console.warn("Ingresa un caracter, una expresión regular y su reemplazo")
  }
}

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", /xyz/ig, "")
eliminarCaracteres(1)
eliminarCaracteres("cyberponkoko1, cyberponkoko2, cyberponkoko3, cyberponkoko4 y cyberponkoko5", /ponkoko/ig, "punk")

console.clear()

//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 36//


// (9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => {
  const numeroRandom = Math.round(Math.random() * 100) + 500;
  console.log(`Tu número aleatorio es ${numeroRandom}`);
} 

numeroAleatorio();

// (10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.



// (11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
