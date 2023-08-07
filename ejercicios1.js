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

//FALTA!!

//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 37//

// (12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true).

//FALTA!!


// (13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.)

//FALTA!!

// (14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F)

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

//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 38//

// (15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.).

//FALTA!!

// (16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

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

// (17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//FALTA!!

//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 39//

// (18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contadorVocalesConsonantes = (texto) => {
  if (typeof texto === "string") {
    const consonantes = "bcdfghjklmnpqrstvwxyz"
    const vocales = ["a", "e", "i", "o", "u"]
    let contadorConsonantes = 0;
    let contadorVocales = 0
    for (let i = 0; i < texto.length; i++) {
      if (vocales.includes(texto[i].toLowerCase())) {
        contadorVocales++
      } 
      else if (consonantes.includes(texto[i].toLowerCase())) {
        contadorConsonantes++
      }
    }
    console.log(
      `El siguiente texto: "${texto}" tiene ${contadorConsonantes} consonantes y ${contadorVocales} vocales`
    )
  } else {
    console.warn("Por favor, ingresa una cadena de texto")
  }
}

contadorVocalesConsonantes("Hola, soy diana")
contadorVocalesConsonantes(1)

// (19) rograma una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = undefined) => {
  const letrasTest = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+\s[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/
  if (nombre === undefined) {
    console.warn("Por favor, ingresá un nombre")
    return
  } 
  if (letrasTest.test(nombre) === false) {
    console.error("Por favor, ingresá un nombre válido")
    return
  } console.log(`El nombre que ingresaste "${nombre}" es válido`)
}

validarNombre("Diana Vodopivec")
validarNombre(1)

// (20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = undefined) => {
  const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if(email === undefined) {
    console.warn("Por favor, ingresá una dirección de email")
    return 
  } 
  if (emailTest.test(email) === false) {
    console.error("Por favor, ingresá un email válido. Por ejemplo: direccionemail@gmail.com")
    return
  } 
  console.log(`Tu email "${email}" es válido.`)
}

validarEmail("dianavodopivec16@gmail.com")
validarEmail(1)

//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 40//

// (21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayNumeros = [2, 5, 9, 12, 15];

const numerosElevados = (array = "", potencia) => {
  if (array === "") {
    console.warn("Por favor, ingrese un ARRAY")
  } else if (typeof array !== "object" || typeof potencia !== "number") {
    console.warn("Se espera un array y un número")
  } else {
    const elevados = []
    array.map((x) => {
      elevados.push(Math.pow(x, potencia))
    })
    return elevados
  }
}

const arrayElevados = numerosElevados(arrayNumeros, 2)
console.log(arrayElevados)

// (22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayAltoBajo = [1, 4, 5, 99, -60]

const numeroAltoBajo = (array) => {
  if (!(array instanceof Array)) {
    return console.warn("Por favor, ingrese un ARRAY")
  } else { 
    const numeroBajo = Math.min(...array)
    const numeroAlto = Math.max(...array)
    return [numeroAlto,numeroBajo]
  }
 }

numeroAltoBajo("oda")
console.log(numeroAltoBajo(arrayAltoBajo))

// (23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const arrayParesImpares = [1, 2, 3, 4, 5, 6, 7, 8]

const arrayParImpar = (array) => {
  if (!(array instanceof Array)) {
    return console.warn("Por favor, ingrese un ARRAY DE NÚMEROS")
  } 

}

arrayParImpar("Hola")

// (24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5].

const arrayAscDesc = [2, 6, 9, 3, 1, 0, 5, 8, 4, 7]

const arregloAscDesc = (array) => {
  if(!(array instanceof Array)) {
    console.warn("Únicamente se aceptan ARRAYS, ingrese uno")
  } else {
    const ascendente = array.sort((a, b) => b - a)
    const descendente = array.sort((a, b) => b - a)
    return {ascendente, descendente}
  }
}

console.log(arregloAscDesc(arrayAscDesc))

//EJERCICIOS JAVASCRIPT "LÓGICA DE PROGRAMACIÓN" CLASE 41//

// (25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const arrayDuplicado = ["x", 10, "x", 2, "10", 10, true, true]

const eliminarDuplicados = (array) => {
    if(!(array instanceof Array)) {
        console.error("Únicamente se acepta un ARRAY, ingrese uno")
        return
    } 
    const arraySinDuplicados = new Set([...array])
    return arraySinDuplicados
}

console.log(eliminarDuplicados(arrayDuplicado))

// (26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const arrayPromedio = [9,8,7,6,5,4,3,2,1,0,8.3,45,8.8]

const obtenerPromedio = (array) => {
    if(!(array instanceof Array)) {
        console.error("Por favor, ingresá un array de números")
        return
    } 
    if (array.some((x) => typeof x !== "number")) {
        console.error("Tu ARRAY contiene elementos que NO son números")
        return
    } 
    const numerosAcumulados = array.reduce((acumulador, x) => {
       return acumulador + x
    }, 0) 
    const promedio = (numerosAcumulados / array.length).toFixed(1)
    console.log(promedio)
}

obtenerPromedio(arrayPromedio)

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados.
//   - Crea un método estático que devuelva los géneros aceptados. 
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película. 
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica🤓
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
class Peliculas {
  constructor(
    id = undefined,
    titulo = undefined,
    director = undefined,
    añoDeEstreno = undefined,
    pais = undefined,
    generos = undefined,
    calificacion = undefined
  ) {
    const idTest = /^[A-Za-z]{2}\d{7}$/;
    const calificacionTest = /^[0-9](\.[0-9])?$/;
    const añoTest = /^\d{4}$/;
    const generosAceptados = [
      "Acción",
      "Adulto",
      "Aventura",
      "Animación",
      "Biografía",
      "Comedia",
      "Crimen",
      "Documental",
      "Drama",
      "Familia",
      "Fantasía",
      "Cine negro",
      "Programa de juegos",
      "Historia",
      "Horror",
      "Musical",
      "Música",
      "Misterio",
      "Noticias",
      "Reality-TV",
      "Romance",
      "Ciencia ficción",
      "Corto",
      "Deporte",
      "Talk-Show",
      "Thriller",
      "Bélico",
      "Western",
    ];

    if (
      id === undefined ||
      titulo === undefined ||
      director === undefined ||
      añoDeEstreno === undefined ||
      pais === undefined ||
      generos === undefined ||
      calificacion === undefined
    ) {
      console.error("Es obligatorio ingresar TODOS los parámetros");
      return;
    }

    if (idTest.test(id) === false) {
      console.error(`El ID "${id}" NO es válido`);
      return;
    }
    if (titulo.length > 100 || titulo.length < 1) {
      console.error(`El título "${titulo}" NO es válido`);
      return;
    }
    if (director.length > 50 || titulo.length < 1) {
      console.error(`El nombre del director "${director}" NO es válido`);
      return;
    }
    if (calificacionTest.test(calificacion) === false) {
      console.error(`La calificación "${calificacion}" NO es válida`);
      return;
    }
    if (añoTest.test(añoDeEstreno) === false) {
      console.error(`El año de estreno "${añoDeEstreno}" NO es válido`);
      return;
    }
    if (!(pais instanceof Array)) {
      console.error(
        `Los paises "${pais}" tienen que ser ingresados en forma de ARRAY.`
      );
      return;
    }
    if (!(generos instanceof Array)) {
      console.error(
        `Los generos "${generos}" tienen que ser ingresados en forma de ARRAY`
      );
      return;
    }

    let aceptado 
    generos.filter((x) => {
      if(!(generosAceptados.includes(x))){
        return aceptado = false
      }
    });

    if(aceptado === false){
      console.error("Generos no aceptados")
      return
    }

    (this.id = id),
      (this.titulo = titulo),
      (this.director = director),
      (this.añoDeEstreno = añoDeEstreno),
      (this.pais = pais),
      (this.generos = generos),
      (this.calificacion = calificacion);
  }
 static generosAceptados() {
    console.log("Acción",
    "Adulto",
    "Aventura",
    "Animación",
    "Biografía",
    "Comedia",
    "Crimen",
    "Documental",
    "Drama",
    "Familia",
    "Fantasía",
    "Cine negro",
    "Programa de juegos",
    "Historia",
    "Horror",
    "Musical",
    "Música",
    "Misterio",
    "Noticias",
    "Reality-TV",
    "Romance",
    "Ciencia ficción",
    "Corto",
    "Deporte",
    "Talk-Show",
    "Thriller",
    "Bélico",
    "Western",);
  }
  infoPelicula(){
    console.log(
      this.id, this.titulo, this.director, this.añoDeEstreno, this.pais, this.generos, this.calificacion
    )
  }
}

const peliculita = new Peliculas(
  "CB0329124",
  "popeitor200",
  "popo johnes",
  2022,
  ["popoland"],
  ["Horror", "Drama"],
  9
);
console.log(peliculita);

peliculita.infoPelicula()
Peliculas.generosAceptados()

const lasPeliculas = [{
  id: "IR0482069",
  titulo: "Interestelar",
  director: "Christopher Nolan",
  añoDeEstreno: 2014, 
  pais: ["Estados Unidos", "Canadá", "Reino Unido"],
  generos: ["Ciencia ficción", "Drama", "Aventura", "Misterio"],
  calificacion: 8.8,
},{
  id: "BR2077049",
  titulo: "Blade Runner 2049",
  director: "Denis Villeneuve",
  añoDeEstreno: 2017,
  pais: ["Estados Unidos"],
  generos: ["Ciencia ficción","Misterio","Thriller","Acción","Fantasía"],
  calificacion: 8.2,
},{
  id: "HP2739270",
  titulo: "Harry Potter y la piedra filosofal",
  director: "Chris Columbus",
  añoDeEstreno: 2001,
  pais: ["Reino Unido", "Inglaterra", "Escocia"],
  generos: ["Fantasía", "Aventura", "Ciencia ficción"],
  calificacion: 9.2,
}]

lasPeliculas.forEach((x) => {
    const infoPeliculas = new Peliculas(
      x.id,
      x.titulo,
      x.director,
      x.añoDeEstreno,
      x.pais,
      x.generos,
      x.calificacion
    )
    infoPeliculas.infoPelicula()
  })
  
  