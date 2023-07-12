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
  
  invertirPalabras("Funciona, ESTOY AL REVÉS");

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
eliminarCaracteres("cyberponkoko1, cyberponkoko2, cyberponkoko3, cyberponkoko4 y cyberponkoko5", /ponkoko/ig, "punk")
eliminarCaracteres(1)

//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 36//


// (9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => {
  const numeroRandom = Math.round(Math.random() * 100) + 500;
  console.log(`Tu número aleatorio es ${numeroRandom}`);
} 

numeroAleatorio();

// (10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numeroCapicua = (numero) => {
    if (typeof numero !== "number") {
      console.warn("Por favor, ingresá un numero");
    } else {
      const numeroNuevo = Math.round(numero.toString().split("").reverse().join(""));
      if (numero !== numeroNuevo) {
        console.log(`Tu numero ingresado "${numero}" NO es capicúa`)
      } else {
        console.log(`Tu numero ingresado "${numero}" SI es capicúa`)
      }
    }
  }
  
numeroCapicua(222)
numeroCapicua(1224)

// (11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// (12) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F)

const conversor = (numeros, unidad) => {
  if (typeof numeros !== "number" && typeof unidad !== "string") {
    console.warn("Ingresá los grados y su unidad, por favor");
  } else if (unidad.toLowerCase() !== "c" && unidad.toLowerCase() !== "f") {
    console.error("Las unidades solo pueden ser °C o °F");
  } else {
    if (unidad.toLowerCase() === "c") {
      let resultado1 = Math.round((numeros * 9) / 5 + 32);
      console.log(`Tus °${numeros} C son °${resultado1} F.`);
    } else if (unidad.toLowerCase() === "f") {
      let resultado2 = Math.round(((numeros - 32) * 5) / 9);
      console.log(`Tus °${numeros} F son °${resultado2} C.`);
    }
  }
};

conversor(20, "c");
conversor(50, "f");

// (13) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuentito = (descuento, numero) => {
  if (typeof descuento !== "number" && typeof numero !== "number") {
    console.warn("Ingresá el precio y su respectivo descuento");
  } else if (Math.sign(descuento) === -1 || Math.sign(numero) === -1) {
    console.error("Solo se aceptan numeros naturales");
  } else {
    let descontar = (numero * descuento) / 100;
    let resultadoDescuento = Math.round(numero - descontar);
    console.log(`Tu descuento es del ${Math.round(descuento)}% y el precio final es de: $${resultadoDescuento}`);
  }
};

descuentito(23, 1000.543);
descuentito(40, 1000);