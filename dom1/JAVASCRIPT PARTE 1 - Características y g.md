JAVASCRIPT PARTE 1 - Características y gramática:

UPPER_CASE 

Constante UNA_CONSTANTE = "Soy una constante",
PI = 3,14

UpperCameICase -> Letra inicial SIEMPRE en Mayuscula

Class SerHumano {
     Constructor (Nombre, genero) {
       this.nombre = nombre
       this.genero = genero
}

MiNombreEs () {
   return "Mi nombre es ${this.nombre}"
 }
}

lowerCamelCase -> Variable u objeto, tiene una sola palabra, toda la oración va
en minuscula. A partir de la 2da palabra, va a ir en mayuscula.

const 

JAVASCRIPT PARTE 2 -

Var -> variables globales que afectan a todo el documento.
Let -> permite declarar variables vacías. Se utiliza cuando se necesite cambiar el contenido.
Const -> permite crear variables. Se utiliza cuando no hay que cambiar el contenido.

Por ejemplo:

let objeto = {
    nombre: "Diana",
    edad: 35
}

console.log (objeto);


Si uno quiere reasignar el valor de una constante (dato primitivo) NO se puede reasignar.
Constante que es un objeto o array, SI se pueden reasignar los valores que tienen adentro.


JAVASCRIPT PARTE 3 - Cadenas de texto (Strings):

Prototipo, longitud (Características Strings)

Propiedades: Atributos, que da info sobre el objeto. (Longitud de una cadena)
Métodos: Acciones que el objeto hace. Todos terminan con ().

*Propiedades:

Lenght -> Cuenta los caracteres de las palabras y espacios entre ellos (propiedad de los Strings). 
Por ejemplo: console.log(nombre.lenght(nombre)).

*Métodos:

Includes -> Consulta si algo contiene algo. Por ejemplo: console.log(dibellita.includes("ita")).

Concat -> Junta o pega Strings.

toUpperCase -> Pasa a mayusculas el texto. Por ejemplo: console.log(nombre.toUpperCase(nombre)).

toLowerCase -> Pasa a minusculas el texto. Por ejemplo: console.log(nombre.toLowercase(nombre)).

Slice -> Extrae una porción de un String y retornar un nuevo String pero no modifica al original. Por ejemplo:
console.log(nombre.slice(1,5));


IndexOf -> Te dice la posición del primer caracter que haya en una cadena de texto basandose en la palabra
que vos le des. Por ejemplo: console.log(nombre.indexof("string"))

EndsWith - StartsWith -> Verifica que algo empiece y termine con algo. Por ejemplo: console.log(nombre.endsWith(número o palabra)) - console.log(nombre.starWith(nombre)).

ValueOf -> ---

ToString -> ---

Replace -> Remplaza Strings por Strings . Por ejemplo: console.log(nombre.replace("algo", "muy algo")).


Trim -> Elimina espacios en blanco al principio o al final de una cadena de texto. Por ejemplo: console.log(nombre.trim()).

Split -> Separa un String en un Array de distintos Strings según el separador que uno elija para hacer el split.
Por ejemplo: console.log(nombre.split("en base a lo que haya , . x")).
