
function sumaNumeros(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}

//console.log(sumaNumeros(2, 3))
//console.log(sumaNumeros(5, 5))

function sumaNumeros2(numb1, numb2, numb3, numb4) {
    let resultadoSuma = numb1 + numb2;
    let resultadoResta = numb3 - numb4; 
    return {resultadoSuma, resultadoResta};
}

let resultadoNumeros2 = sumaNumeros2(2, 3, 5, 5).resultadoResta;
//console.log(resultadoNumeros2)

function sumaNumeros2(numb1, numb2, numb3, numb4) {
    let resultadoSuma = numb1 + numb2;
    let resultadoResta = numb3 - numb4;
    return {resultadoSuma, resultadoResta};
  }
  
  let {resultadoSuma, resultadoResta} = sumaNumeros2(2, 3, 5, 5);
  //console.log(resultadoSuma);
  //console.log(resultadoResta);


const diana = {
    nombre: "Diana",
    apellido: "Vodopivec",
    edad: 22,
    pasatiempos: ["Estudiar", "Jugar juegos", "Cocinar postrecitos"],
    comidasfavoritas: ["Pizza", "Sushi", "Fideos", "Arroz"],
    soltero: true, 
    description: function () {
        //console.log(this.comidasfavoritas);
    },
};

//diana.description()

//console.log(diana);
//console.log(diana["nombre"]);
//console.log(diana["apellido"]);
//console.log(diana["edad"]);


let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;

//console.log(a);
//console.log(modulo);
//console.log(8 > 9);
//console.log(8 < 9);
//console.log(8 >= 9);
//console.log(8 <= 9);
//console.log(7 == 7);
//console.log("7" == 7);
//console.log(0 == false);
//console.log(0 === false)

let i = 1;

i = i + 2;
i += 3;
i -= 3;
i /= 3;
i *= 3;
//console.log(i);
i ++;
i --;
++ i;
-- i;
//console.log(i);

/*
console.log(!true);
console.log(4 > 5 || 7 > 1);
console.log(4 > 5 && 7 > 1);
console.log(9 === "9") || ("9" === 9);
console.log(9 === 9) && ("9" === "9");



//CLASE 22 - PROTOTIPOS//

POO (Programación Orientada a Objetos) => 
Conceptos: 
 Clases: Modelo a seguir.
 Objetos: Instancia de una clase.
  Atributos: Es una característica o propiedad del objeto (son variables dentro de un objeto). 
  Métodos: Acciones que un objeto puede realizar (funciones dentro de un objeto).

Prototipo en JavaScript: "Mecanismo por el cual un objeto puede heredar de un objeto padre, atributos y métodos"
 */

//OBJETOS LITERALES y su PROTOTIPO es OBJECT//
/*
const animal = {
  nombre: "vex",
  sonar() {
    console.log("Hago soniditos de animalitos");
  },
};

const animal2 = {
  nombre: "cocho",
  sonar() {
    console.log("Hago soniditos de animalitos");
  },
};

console.log(animal);
console.log(animal2);

//Función constructora: Se construye una sola vez y a partir de ella, se generan nuevos objetos o instancias de este tipo de función; Construye un prototipo vacío; Los atributos y métodos de este tipo de funciones tienen que "colgar" del this/

/*function Animal1 (nombre, genero, tipo) {
  //ATRIBUTOS
  this.nombre = nombre;
  this.genero = genero;
  this.tipo = tipo;

  //MÉTODOS
  this.sonar = function () {
    console.log("Hago soniditos de animalitos");
  }
  this.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} y soy muy sucio`);

  }
}

//NEW -> Nos permite crear un nuevo objeto del tipo que especificamos.

const vex = new Animal1("Vex", "Hembra","Perro"), 
cocho = new Animal1("Cocho", "Macho", "Gato");

console.log (vex);
console.log (cocho);

vex.saludar(); 
cocho.saludar(); 

//SEPARAMOS LOS MÉTODOS DE LA FUNCIÓN PARA ASIGNAR LOS PROTOTIPOS//

function Animal1 (nombre, genero, tipo) {
  //ATRIBUTOS
  this.nombre = nombre;
  this.genero = genero;
  this.tipo = tipo;
}

//MÉTODOS AGREGADOS AL PROTOTIPO DE LA FUNCIÓN CONSTRUCTURA, ASIGNANDO POR FUERA AL PROTOTIPO, EVITANDO QUE LAS INSTANCIAS DUPLIQUEN LOS MÉTODOS INTERNAMENTE, MEJORANDO ASÍ EL RENDIMIENDO Y ESPACIO MEMORIA//

  Animal1.prototype.sonar = function () {
    console.log("Hago soniditos de animalitos");
  }
  Animal1.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} y soy muy sucio`);

  }

const vex = new Animal1("Vex", "Hembra","Perro"), 
cocho = new Animal1("Cocho", "Macho", "Gato");

console.log (vex);
console.log (cocho);

vex.sonar(); 
cocho.saludar();

//CLASE 23 - HERENCIA PROTOTÍPICA//

function Animal1 (nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

Animal1.prototype.sonar = function () {
  console.log("Hago soniditos de animalitos");
};
Animal1.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} y soy muy sucio`);
};

//HERENCIA PROTOTIPICA
function Perro(nombre, genero, tamaño) {
//MÉTODO "SUPER" -> Manda a llamar al constructor de la clase padre.
  this.super = Animal1
  this.super(nombre, genero)
  this.tamaño = tamaño
}

//Perro está heredando de Animal
Perro.prototype = new Animal1 ();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido")
}

Perro.prototype.ladrar = function () {
  console.log("Hago Guau Guau")
}

const vex = new Perro("Vex", "Hembra", "Mediano"),
  cocho = new Animal1("Cocho", "Macho" );

console.log(vex);
console.log(cocho);

vex.saludar();
vex.sonar();
vex.ladrar();

cocho.sonar();
cocho.saludar(); 

//CLASE 24 - CLASES Y HERENCIA DE CLASES//
//Las clases NO reciben parámetros, para eso deben tener el método especial constructor (recibe las propiedades),

class Celula {
  constructor(nombre, organismo) {
    this.nombre = nombre;
    this.organismo = organismo;
  }
  vivir() {
    console.log(`Mi nombre ${this.nombre} y soy un/a ${this.organismo}`);
  }

}

const vida1 = new Celula("Epitelial", "Celula");
console.log(vida1);
vida1.vivir();



//CREANDO UN PRIMATE A PARTIR DE CÉLULA//

class Primate extends Celula {
  constructor(nombre, organismo, accion0) {
    super(nombre, organismo);
    this.accion0 = accion0;
  }
  realizandoAccion0() {
    console.log(`Evolucioné, ahora puedo ${this.accion0}`);
  }
}

const primateMonito = new Primate("Monito", "Primate", "pelar bananas");
console.log(primateMonito);
primateMonito.vivir();
primateMonito.realizandoAccion0();

//CREANDO UN HUMANO A PARTIR DE PRIMATE//

class Humano extends Primate {
  constructor(nombre, organismo, accion0, accion1) {
    super(nombre, organismo, accion0);
    this.accion1 = accion1;
  }
  realizandoAccion1() {
    console.log(`Mi nuevo nombre es ${this.nombre}, soy un ${this.organismo} y me dedico a ${this.accion1}`);
  }
}

const HumanoCarlitos = new Humano ("Carlitos", "Humano", "Pelar bananas", "vender comida en la calle")
console.log(HumanoCarlitos);
HumanoCarlitos.realizandoAccion1()

//CREANDO UN CYBORG A PARTIR DE HUMANO//

class Robot extends Humano {
  constructor(nombre, organismo, accion0, accion1, accion2) {
    super(nombre, organismo, accion0, accion1);
    this.accion2 = accion2;
  }
  realizandoAccion2() {
    console.log(`Soy un ${this.organismo}, me cambiaron el nombre a ${this.nombre}, y debo ${this.accion0}, ${this.accion1} y ${this.accion2} :(`)
  }
  static info() {
    console.log(`Este es un método estático, no tengo propiedades: ${this.nombre}`)
  }

  //GET -> Obtiene el valor de la propiedad.
  get getEdad() {
    return this.edad;
  }

  //SET ->  Permiten realizar acciones adicionales.
  set setEdad(edad){
    this.edad = edad;
  }
}

const RobotMarkus = new Robot("Markus", "Robot", "obedecer", "ayudar", "acompañar");
console.log(RobotMarkus);
RobotMarkus.realizandoAccion2();
console.log(RobotMarkus.getEdad)
RobotMarkus.setEdad = 54;
console.log(RobotMarkus.getEdad)
RobotMarkus.setEdad = 60;
console.log(RobotMarkus.getEdad)*/

//CLASE 25 - METODOS ESTATICOS, GETTERS Y SETTERS//

//FUNCIÓN -> Permiten acceder y manipular los valores de propiedades de manera controlada.
//REALIZANDO EJERCCIO EN 230
//SETTERS Y GETTERS -> Métodos que nos permiten establecer y obtener ls valores de atributos de nuestras clases.

//ESTÁTICO -> Se puede ejecutar sin la necesidad de tener una instancia.
/*Robot.info()*/



//CLASE 26 - OBJETO CONSOLE//

//FUNCIÓN ->  Proporciona métodos para imprimir mensajes y datos en la consola del navegador.

//LOG -> Se utiliza para registros generales del programa.
console.log("Un registro de lo que ha pasado en nuestra aplicación");
//ERROR -> Se utiliza para indicar ERRORES.
console.error("Esto es un error");
//WARN -> Se utiliza para indicar ADVERTENCIAS.
console.warn("Esto es una advertencia");
//INFO -> Se utiliza para indicar mensajes INFORMATIVOS.
console.info("Esto es un mensaje informativo");
//CLEAR -> Se utiliza para limpiar todo lo que está en la consola.
console.clear();

let nombre = "Diana";
apellido = "Vodopivec";
edad = 22;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)

//COMODÍN %S (d -> representa números) -> Significa que lo que va a recibir es una cadena de texto.
console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad)
//WINDOW -> Se utiliza para representar la ventana del navegador y proporciona acceso a varias funcionalidades y propiedades relacionadas con la ventana y el entorno del navegador.
console.log(window);
//DOCUMENT -> Se utiliza para mostrar una representación del documento HTML a través de Javascript.
console.log(document);
//DIR -> Se utiliza para mostrar una representación en formato de árbol de un objeto en la consola.
console.dir(window);
console.dir(document);
console.clear();
//GROUP -> Se utiliza para agrupar mensajes en la consola, lo que permite organizar y estructurar la información de una manera más clara.
console.group("Materias de la facultad");
console.log("Enfermería en Médica 2");
console.log("Enfermería en Salud Pública 2");
console.log("Enfermería en Salud mental");
//GROUPCOLLAPSED -> Se utiliza para crear grupos de mensajes en la consola con la diferencia de que estos grupos están inicialmente colapsados en la consola.
console.groupCollapsed();
//GROUPEND -> Se utiliza para indicar que el grupo ha terminado.
console.groupEnd();
console.clear();
//TABLE -> Se utiliza para mostrar datos en forma de tabla en la consola.
console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5],
vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
  nombre: "Toto",
  raza: "Labrador",
  color: "Arena",
  edad: 14,
}
console.table(perro);
console.clear();

//TIME -> Se utiliza para mostrar el tiempo transcurrido en la consola.
console.time("Cuánto tiempo tarda mi código")

const arreglo = Array(10);

for (let i = 0; i < arreglo.length; i ++) {
  arreglo[i] = i;
}
//TIMEEND -> Se utiliza para detener el temporizador iniciado.
console.timeEnd("Cuánto tiempo tarda mi código");
console.log(arreglo);
console.clear();

//COUNT -> Se utiliza para contar el número de veces que se ha llamado a una etiqueta específica.

for (let i = 0; i <= 100; i ++) {
  console.count("Código for")
  console.log(i);
}
console.clear();

//ASSERT -> Se utiliza para realizar una afirmación y mostrar un mensaje de error en la consola si la afirmación es falsa. 

let x = 1,
y = 2,
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, {x, y, pruebaXY});
console.clear();



//CLASE 27 - OBJETO DATE//

//FUNCIÓN -> Se utiliza para trabajar con fechas y horas.
//CONSTRUCTOR "DATE" 

console.log(Date());

let fecha = new Date();
console.log(fecha);
//Método GETDATE -> Se utiliza para obtener el día del mes en formato número.
console.log(fecha.getDate());
//Método GETDAY -> Se utiliza para obtener el día de la semana en formato número. 
//([DOM 0, LUN 1, MART 2, MIER 3, JUEV 4, VIERN, 5, SAB 6])
console.log(fecha.getDay());
//Método GETMONTH -> Se utiliza para obtener el mes en formato número. 
console.log(fecha.getMonth());
//Método GETFULLYEAR -> Se utiliza para obtener el año en formato número. 
console.log(fecha.getFullYear());
//Método GETHOUR -> Se utiliza para obtener la hora en formato número. 
console.log(fecha.getHours());
//Método GETMINUTES -> Se utiliza para obtener los minutos en formato número. 
console.log(fecha.getMinutes());
//Método GETSECONDS -> Se utiliza para obtener los segundos en formato número. 
console.log(fecha.getSeconds());
//Método GETMILISECONDS -> Se utiliza para obtener los milisegundos en formato número. 
console.log(fecha.getMilliseconds());
//Método TOSTRING -> Se utiliza para mostrar una representación en forma de cadena de texto de un objeto de tipo fecha (Date) en la consola.
console.log(fecha.toString());
//Método TODATESTRING -> Se utiliza para obtener una representación en forma de cadena de texto de un objeto de tipo fecha (Date) solo que devuelve una cadena de texto que representa la fecha en un formato simplificado y específico.
console.log(fecha.toDateString());
//Método TOLOCALESTRING -> Se utiliza para obtener el horario local.
console.log(fecha.toLocaleString());
//Método TOLOCALEDATESTRING -> Se utiliza para obtener la fecha.
console.log(fecha.toLocaleDateString());
//Método TOLOCALETIMESTRING -> Se utiliza para obtener parte de la hora.
console.log(fecha.toLocaleTimeString());
//MÉTODO GETTIMEZONEOFFSET -> Se utiliza para obtener la diferencia en minutos entre la hora local y la hora GMT en un objeto Date.
console.log(fecha.getTimezoneOffset());
//MÉTODO GETUTCHOURS, DATE, ETC 
console.log(fecha.getUTCHours());
//MÉTODO NOW -> Se utiliza para obtener el número de milisegundos transcurridos desde el 1 de enero de 1970.
console.log(Date.now());

let cumpleañosDiana = new Date(2000,10,17);
console.log(cumpleañosDiana);
console.clear()



//CLASE 28 - OBJETO MATH//

//FUNCIÓN -> Nos proporciona propiedades y métodos para realizar operaciones matemáticas.
//Es un objeto ESTÁTICO, esto quiere decir que cada vez que vamos a utilizarlo, hay que invocar directamente al objeto (prototipo)

console.log(Math);
console.log(Math.PI);
//MÉTODO ABS -> Se utiliza para obtener el valor absoluto de un número (cantidad tal del número sin considerar que es + o -)
console.log(Math.abs(9.8));
console.log(Math.abs(-9.8));
//MÉTODO CEIL -> Se utiliza para obtener el valor de un número pero redondeado, esto quiere decir que obtendremos el número entero mayor.
console.log(Math.ceil(10.8));
//MÉTODO FLOOR -> Lo contrario al método ceil.
console.log(Math.floor(10.8));
//MÉTODO ROUND -> Se utiliza para obtener el valor de un número pero redondea siempre al más cercano.
console.log(Math.round(7.2));
//MÉTODO SQRT -> Se utiliza para obtener la raíz cuadrada de un número.
console.log(Math.sqrt(4));
//MÉTODO POW -> Se utiliza para obtener potencias.
console.log(Math.pow(2,5));
//MÉTODO SIGN -> Se utiliza para indicar si un número es positivo, negativo o 0.
console.log(Math.sign(-7.5));
//MÉTODO RANDOM -> Se utiliza para obtener un valor aleatorio comprendido entre 0 y 1.
console.log(Math.random());
//OTRO EJEMPLO:
console.log(Math.round(Math.random()* 1000));
console.clear()



//CLASE 29 - OPERADORES DE CORTOCIRCUITO//

//FUNCIÓN -> Se utilizan para evaluar expresiones lógicas de manera eficiente.
//Estos operadores funcionan poniendo dos condiciones, ya sean utilizando el operador lógico OR o AND//

//CORTOCIRCUITO OR (||) -> Se utiliza cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto.

function persona (nombre) {
  nombre = nombre || "Elizabeth";
  console.log(`Hola, mi nombre es ${nombre}`)
}

persona("Diana");
persona();

//Se pueden aplicar en ...
console.log("IZQUIERDA" || "DERECHA");//STRING
console.log(20 || "DERECHA");//NÚMEROS
console.log(true || "DERECHA");//BOOLEANO
console.log([] || "DERECHA");//ARREGLO
console.log({} || "DERECHA");//OBJETO VACÍO
console.log(false || "DERECHA");//EN CASO DE FALSE, SIEMPRE SE APLICA AL DERECHO
console.log(null || "DERECHA");//EN CASO DE FALSE, SIEMPRE SE APLICA AL DERECHO
console.log(undefined || "DERECHA");//EN CASO DE FALSE, SIEMPRE SE APLICA AL DERECHO
console.log("" || "DERECHA");//EN CASO DE FALSE, SIEMPRE SE APLICA AL DERECHO
console.log(-2 || "DERECHA");//NÚMEROS
console.log(0 || "DERECHA");//EN CASO DE FALSE, SIEMPRE SE APLICA AL DERECHO

//CORTOCIRCUITO AND (&&) -> Se utiliza cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto.

//Se pueden aplicar en ...
console.log("IZQUIERDA" && "IZQUIERDA");//STRING
console.log("IZQUIERDA" && 20);//NÚMEROS
console.log("IZQUIERDA" && true);//BOOLEANO
console.log("IZQUIERDA" && []);//ARREGLO
console.log("IZQUIERDA" && {});//OBJETO VACÍO
console.log("IZQUIERDA" && false);
console.log("IZQUIERDA" && null);
console.log("IZQUIERDA" && undefined);
console.log("IZQUIERDA" && "");
console.log("IZQUIERDA" && -2);
console.log("IZQUIERDA" && 0);
console.clear()



//CLASE 30 - ALERT, CONFIRM Y PROMPT//

//ALERT -> Se utiliza para mostrar una ventana emergente en el navegador con un mensaje de texto. (No almacena nada)

//CONFIRM -> Se utiliza para mostrar una ventana emergente con un mensaje y opciones de confirmación. (Almacena true/false, según lo que el usuario escriba)

//PROMPT -> Se utiliza para mostrar una ventana emergente con un mensaje y un campo de entrada de texto. (Almacena lo que el usuario escribió, en caso de que no escriba nada se almacena como "null")

console.clear()



//CLASE 31 - EXPRESIONES REGULARES//
//FUNCIÓN -> Secuencia de carácteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de carácteres.

//UTILIZANADO FUNCIÓN CONSTRUCTURA O DE FORMA DIRECTA

let saludar = "Hola, le tengo miedo a las tormentas eléctricas así que me esconderé en mi refugio"

let expReg = new RegExp("Hola","ig");
let expReg2 = /Hola/ig;
let expReg3 = /Hola(1,2, 3)/ig;

//DEVUELVE UN BOOLEANO
//console.log(expReg.test(saludar));
//console.log(expReg.exec(saludar));

//DEVUELVE UN ARREGLO
console.log(expReg2.test(saludar));
console.log(expReg2.exec(saludar)); 

console.log(expReg3.test(saludar));
console.log(expReg3.exec(saludar)); 



//CLASE 32 - FUNCIONES ANÓNIMAS AUTOEJECUTABLES//
//FUNCIÓN -> No se almacena en un archivo de programa, pero se asocia con una variable.
//ES IMPORTANTE USAR ; PARA SEPARAR O EL CÓDIGO FIGURA COMO ERROR.

(function (){
  console.log("Primera vez haciendo esto")
})();

(function (d, w, c){
  console.log("Segunda vez haciendo esto")
  console.log(d);
  console.log(c);
})(document, window, console);

console.clear()


//CLASE 33 - MÓDULOS (IMPORT/EXPORT)//
//FUNCIÓN -> Nos permiten la organización y reutilización de código en diferentes archivos.
//ARCHIVO.HTML -> <SCRIPT SRC="x.js" type = "module"></script>
//EN CASO DE QUE EL NAVEGADOR NO SEA COMPATIBLE -> ARCHIVO.HTML -> <SCRIPT SRC="x.js" nomodule></script>


//EXPORT -> Se utiliza para exportar funciones, objetos, clases o variables de un archivo JavaScript para que estén disponibles para otros archivos (funciones, clases o variables).
// EXPORT function sum ...

function sum(a, b) {
  return a + b;
}

console.log(sum(1,2))

//EXPORT DEFAULT -> Permite exportar un valor predeterminado desde un archivo, permitiendo que el archivo se exporte sin llaves en el archivo que lo utiliza y solo se permite una exportación predeterminada por archivo.

//IMPORT -> Se utiliza para acceder a las exportaciones realizadas desde otro archivo, se pueden realizar varias exportaciones e incluso renombrar en el proceso.

//EN EL ARCHIVO AL QUE QUIERO EXPORTAR PONEMOS:
//IMPORT {sum} from "./nombredearchivo.js" 
//console.log(sum)

console.clear()


//----------------------- Clase 44 - Temporizadores (setTimeout & setInterval) ----------------------- //

//Ejecutar función UNA sola vez.
setTimeout(() => { //Recibe una función que ejecutará y un tiempo expresado en milisegundos  
  /*console.log("Ejecutando un setTimeOut")*/}, 3000) //Tiempo en milisegundos

//Ejecutar función indefinidamente en cada cierto intervalo de tiempo.
setInterval(() => { //Recibe una función que ejecutará y un intervalo de tiempo.    
  /*console.log("Ejecutando un setInterval")*/}, 1000)

//Ejecutar función indefinidamente en cada cierto intervalo de tiempo con DATE.
let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString())}, 1000)
clearInterval(temporizador) // Cancelar el setInterval (No olvidar convertirlo en una variable)
let temporizador2 = setTimeout (() => {
  console.log(new Date().toLocaleTimeString())}, 1000)
clearTimeout(temporizador2) // Cancelar el setTimeOut (No olvidar convertirlo en una variable)

//------------------------------ Clase 45 - Asincronía y el Event Loop ------------------------------//

//Procesamiento "Single thread" () y "Multi thread" () -> 

//-------------------------------------- Clase 46 - Callbacks --------------------------------------//

//Callbacks --> Función que se ejecuta después de que otra lo haga y es un mecanismo que controla la sincronía

function cuadradoCallback (valor, callback) {
  setTimeout(() => {callback(valor, valor*valor) //Callback que se resolvería.    
}, 0 | Math.random() * 1000) //Para recibir centesimas de segundo.
}
cuadradoCallback(0, (valor, resultado) => { //Recordar: SIEMPRE recibe una función (En este caso anónima)    
  //console.log("Inicia callback")    
  //console.log(`Callback: ${valor}, ${resultado}`) 
  cuadradoCallback(1, (valor, resultado) => {
    //console.log(`Callback: ${valor}, ${resultado}`)   
  })
  cuadradoCallback(2, (valor, resultado) => { 
      //console.log(`Callback: ${valor}, ${resultado}`)     
    })
    cuadradoCallback(3, (valor, resultado) => {
        //console.log(`Callback: ${valor}, ${resultado}`)       
      })
      cuadradoCallback(4, (valor, resultado) => {
          //console.log(`Callback: ${valor}, ${resultado}`)       
         })
         cuadradoCallback(5, (valor, resultado) => {
            //console.log(`Callback: ${valor}, ${resultado}`)           
          })})

//-------------------------------------- Clase 47 - Promesas --------------------------------------// 
//Promesas --> Se utilizan cuando existe una concatenación de varios procesos asíncronos.

function cuadradoPromesa(valor) { 
  if(typeof valor !== "number") return Promise.reject(`Error, el valor "${valor}" ingresado no es un numero`)
 return new Promise((resuelve,rechaza) => { //Dos partes resuelve y rechaza la promesa, son métodos estáticos (no se necesita crear instancia para utilizarlos)      
  setTimeout(() => {
    resuelve({ //Se considera un "return positivo" de la promesa en caso de que se cumpla.            
      valor, //Se puede simplificar eliminando el valor:            
      resultado: valor * valor })}, 0 | (Math.random() * 1000))})
    }

//Método then() --> Se ejecutará una vez que se cumpla la función inicial y se puede utilizar las veces que se necesite.
//Método catch() --> Captura el error resultante del reject.

cuadradoPromesa(0)
.then((obj) => { //Recibe la parte positiva de la promesa    
  //console.log(`Promesa: ${obj.valor}, ${obj.resultado}`)   
  return cuadradoPromesa(1)}).then((obj) => {
    //console.log(`Promesa: ${obj.valor}, ${obj.resultado}`)    
    return cuadradoPromesa(2)}).then((obj) => {
      //console.log(`Promesa: ${obj.valor}, ${obj.resultado}`)    
      return cuadradoPromesa(3)}).then((obj) => {
        //console.log(`Promesa: ${obj.valor}, ${obj.resultado}`)
        return cuadradoPromesa(4)}).then((obj) => {
          //console.log(`Promesa: ${obj.valor}, ${obj.resultado}`)
          return cuadradoPromesa(5)})

.catch(error => console.error(error))

//-------------------------------------- Clase 48 - Async/Await --------------------------------------//

//Función asíncrona --> 

//////////////////////////////////Nuevos tipos de datos Javascript////////////////////////////////////


//-------------------------------------- Clase 49 - Symbols --------------------------------------//

// Symbol --> Tipo de dato primitivo, su valor se mantendrá privado y es único (No se usa operador NEW). Crean referencias únicas y siempre debe ser declarado.

let id = Symbol("id")
let id2 = Symbol("id2")

console.log(id === id2)
console.log(id, id2)
console.log(typeof id, typeof id2)

const NOMBRE = Symbol()
const SALUDAR = Symbol()

const personita = {
  [NOMBRE]: "Diana",
  edad: 22
}

console.log(personita)

personita.NOMBRE = "Diana Vodopivec"
console.log(personita) //Console.log del objeto.
console.log(personita.NOMBRE) //Console.log solo de la propiedad NOMBRE dentro del OBJETO persona.
console.log(personita[NOMBRE]) //Console.log para acceder al SYMBOL() que es un valor privado.

personita[SALUDAR] = function () {
  console.log("Hola")
}

console.log(personita)
personita[SALUDAR]()

for (let propiedad in personita) {
  console.log(propiedad)
  console.log(personita[propiedad])
}

console.log(Object.getOwnPropertySymbols(personita))//Busca SYMBOLS dentro del objeto.

//-------------------------------------- Clase 50 - Sets --------------------------------------//

//Sets --> Similar a un ARRAY pero de DATOS ÚNICOS e iterable.

const set = new Set([1,2,3,3,4,5,true,false,false,{}, "hola", "HoLa"])
console.log(set)
console.log(set.size)

//MÉTODO ADD --> Agrega un elemento (Si agrego un dato primitivo que este repetido, no lo toma).
//PROPIEDAD .SIZE --> Cuenta la cantidad de elementos que tiene el SET.
//MÉTODO DELETE --> Borra un elemento específico.

set.delete("HoLa")

//MÉTODO FROM --> Vuelve un objeto en iterable, haciendo que se comporte como un arreglo.

let arr = Array.from(set)
console.log(arr)

//MÉTODO .HAS --> Comprueba si x valor existe entre los datos, entre comillas pasamos si tiene x cosa que buscamos. 

console.log(set.has("Hola"))

//MÉTODO .CLEAR --> Limpia lo que se encuentra dentro del SET.

//set2.clear()

const set2 = new Set()
set2.add(1)
set2.add(2)
set2.add(3)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add({})

console.log(set2)
console.log(set2.size)

console.log("Recorriendo set")

for (item of set) {
  console.log(item)
}

console.log("Recorriendo set2")

set2.forEach(item => console.log((item)))
console.log(set[0])

//-------------------------------------- Clase 51 - Maps --------------------------------------//

//Maps --> (Tipos de datos complejos) Objetos que sirven para almacenar un conjunto de valores a manera de objeto e iterables.
//Objetos que nos permite tener una llave y valor y sus propiedades de cadena de texto pero también se pueden crear las que no son cadena de texto.

const mapa = new Map()
mapa.set("nombre", "Diana")
mapa.set("apellido", "Vodopivec")
mapa.set("edad", 22)

console.log(mapa)
console.log(mapa.size)//Numero de objetos.
console.log(mapa.has("correo"))//Devuelve un boleano dependiendo si tiene o no el valor.
console.log(mapa.has("edad"))
console.log(mapa.get("nombre"))//Obtener el valor de la propiedad.

mapa.set("nombre", "Diana Elizabeth Vodopivec")
console.log(mapa.get("nombre"))
mapa.delete("apellido")//Eliminar elemento que deseamos.

/*mapa.set(20, "veinte")
mapa.set(false, "falso")
mapa.set({}, {})
console.log(mapa)*/

console.log(mapa)

//¿COMO RECORRER UN MAPS?

for (let [llave, valor] of mapa) {
  console.log(`Llave: ${llave}, Valor: ${valor}`)
}

const mapa2 = new Map([
  ["nombre", "Vex"],
  ["edad", 1],
  ["animal", "perro"],
  [null, "nulo"]
])

console.log(mapa2)

//const llavesMapa2 = [...mapa2.llave()]
//const valoresMapa2 = [...mapa2.valor()]

//console.log(llavesMapa2)
//console.log(valoresMapa2)

//-------------------------------------- Clase 52 - WeakSets & WeakMaps --------------------------------------//

//Solo pueden almacenar referencias "débiles", las llaves deben de ser de tipo OBJETO, NO se pueden recorrer claves o valores (No se puede usar for off, for each, etc), NO se puede utilizar el método "clear" o verificar su tamaño a través del método "size".

// FORMA INCORRECTA WEAKSETS -> const ws = new WeakSet ([1,2,3,3,4,5,true,false,false,{}, "hola", "HoLa"])
// FORMA CORRECTA:

const ws = new WeakSet()

let valor1 = {"valor": 1}
let valor2 = {"valor": 2}
let valor3 = {"valor": 3}

ws.add(valor1)
ws.add(valor2)
console.log(ws)

console.log(ws.has(valor1))
console.log(ws.has(valor3))

ws.delete(valor2)
console.log(ws)

ws.add(valor2)
ws.add(valor3)
console.log(ws)

/*setInterval(() => console.log(ws), 1000);*/

setTimeout(() => {
  valor1 = null
  valor2 = null
  valor3 = null
}, 5000)

// FORMA INCORRECTA WEAKMAPS -> const ws = new WeakMap ([["nombre", "Vex"], ["edad", 1], ["animal", "perro"], [null, "nulo"]])

// FORMA CORRECTA:

const wm = new WeakMap()
let llave1 = {}
let llave2 = {}
let llave3 = {}

wm.set(llave1, 1)
wm.set(llave2, 2)
console.log(wm)

console.log(wm.has(llave1))
console.log(wm.has(llave3))

console.log(wm.get(llave1))
console.log(wm.get(llave2))
console.log(wm.get(llave3))

wm.delete(llave2)
console.log(wm)

wm.set(llave1, 2)
wm.set(llave2, 3)
console.log(wm)

/*setInterval(() => console.log(wm), 1000);*/

setTimeout(() => {
  llave1 = null
  llave2 = null
  llave3 = null
}, 5000)

//-------------------------------------- Clase 53 - Iterables & Iterators --------------------------------------//

//Estructura de datos lineal que hace que sus elementos sean públicos y que se puedan recorrer. (Strings, cadenas de texto, sets, maps, elementos del DOM, etc)

//ITERABLE --> El contenido de su elemento SE PUEDE RECORRER (Funciona para elementos que se pueden recorrer).
//ITERADOR --> Mecanismo que está recorriendo los elementos.

const iterable = [1, 2, 3, 4, 5]
//¿Cómo acceder al iterador del iterable?
const iterador = iterable[Symbol.iterator]()

console.log(iterable)
console.log(iterador)
console.log(iterador.next())//Devuelve un objeto

let next = iterador.next()

while(!next.done) {
  console.log(next.value)
  next = iterador.next()
}

//-------------------------------------- Clase 54 - Generators --------------------------------------//
//GENERATORS --> 

/*function* iterable() { //Para que javascript identifique a una función de tipo generador se agrega un "*".
  yield "hola" //Return que le indica a la función pausar o reanudar una función generadora.
  console.log("Hola consola")
  yield "hola 2"
  console.log("Seguimos con más introducciones de nuestro código")
  yield "hola 3"
  yield "hola 4"
}

let iteradoor = iterable()
/*console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())*/

for (let y of iterador) {
  console.log(y)
}

/*const arra = [...iterable()]
console.log(arra)

function cuadrado(valor) {
setTimeout(() => {
  console.log({valor, resultado: valor * valor})
},Math.random()*1000)

return {
  valor, 
  resultado: valor * valor
}
}*/

function* generador() {
console.log("Inicia generator")
/*yield cuadrado(0)
yield cuadrado(1)
yield cuadrado(2)
yield cuadrado(3)
yield cuadrado(4)
yield cuadrado(5)
console.log("Finaliza generator")*/
}

let gen = generador() 

for (let y of gen) {
//console.log(y)
}

//-------------------------------------- Clase 55 - Proxies --------------------------------------//
//PROXIES --> Mecanismo que permite crear un objeto basado en un objeto literal inicial, generando una copia y permitiendo realizar diversas operaciones (validación de propiedades de tipo de dato) dentro de la copia que se crea, dentro del objeto literal.

const personaa = {
nombre: "",
apellido: "",
edad: 0
}

const manejador = {
set(obj,prop,valor) { //Podremos establecer todo tipo de validaciones.
  if (Object.keys(obj).indexOf(prop) === -1) {
    return console.error(`La propiedad "${prop}" no existe en el objeto persona.`)
  } 

  if (
    (prop === "nombre" || prop === "apellido") && 
    !(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/g.test(valor))
    ){
      return console.error(`La propiedad "${prop}" sólo acepta letras y espacios en blanco`)
    }
  obj[prop] = valor
}
}

const dianaa = new Proxy(persona, manejador) 
dianaa.nombre = "Diana"
dianaa.apellido = "Vodopivec"
dianaa.edad = 22
dianaa.instagram = "@dianaelizabethhv"

console.log(dianaa)

//-------------------------------- Clase 56 - Prop. dinámicas de los Objetos ---------------------//

let aleatorio = Math.round(Math.random() *100 + 5)
const objUsuarios = {
[`id_${aleatorio}`]: "Valor aleatorio"
}

console.log(objUsuarios)

const usuarios = ["Diana", "Matias", "Vex", "Cocho"]
usuarios.forEach((usuario, index) => 
objUsuarios[`id_${index}`] = usuario)//Los "[]" nos permitirán crear de manera dinámica los nombres de las propiedades dinámicas.

console.log(objUsuarios)

//-------------------------------------- Clase 57 - This . --------------------------------------//
//THIS --> Hace referencia al objeto global (window) y es similar al mismo objeto global --> console.log (this === window) - consola (true)

this.nombree = "Contexto Global"
console.log(this.nombree)

function imprimir () {
console.log(this.nombree)
}

imprimir()

const obj = {
nombree: "Contexto Objeto",
imprimir: function () {
  console.log(this.nombree)
}
}

obj.imprimir()

const obj2 = {
nombree: "Contexto Objeto 2",
imprimir //Hace referencia a la función de la línea 600.
}

obj2.imprimir()

const obj3 = {
nombree: "Contexto Objeto 3",
imprimir: () => { //Arrow function, mantiene un enlace del contexto del que ha sido creado el objeto que aparece.
  console.log(this.nombree)
}
}

obj3.imprimir()   

function Persona(nombree) {
const that = this //Guardar el contexto de la función constructora para cuando se retorne una función anónima, se pueda recuperar el "this".
//this.nombre = nombre
that.nombree = nombree

//return console.log(this.nombre)
return function() {
  //console.log(this.nombre)
  console.log(that.nombre, 77)
}
}

let matias = new Persona("Matias")

matias()

//-------------------------------------- Clase 58 - This . --------------------------------------//

//DESAPARECIÓ LA CLASE XD

//-------------------------------------- Clase 59 - JSON --------------------------------------//
//JSON --> Javascript Object Notation, formato ligero de intercambio de datos.
//SIEMPRE LLEVA COMILLAS

const json = {
  cadena: "Diana",
  numero: 35,
  booleano: true,
  arreglo: [],
  objeto: "{}",
  nulo: null
}

//JSON parse() --> Transforma una cadena de texto (string) a su forma "real" de javascript.

console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("false"))
console.log(JSON.parse("19"))
//console.log(JSON.parse("Hola a todos, yo soy el León"))//LOS STRINGS SE DEBEN MARCAR DE OTRA FORMA FORMA PARA QUE SE ENTIENDA QUE ES UN STRING.
console.log(JSON.parse("null"))
//console.log(JSON.parse("undefined"))//NO VÁLIDO PARA JAVASCRIPT.

console.log(JSON.parse(`{
  "cadena": "Diana",
  "numero": "35",
  "booleano": "true",
  "arreglo": "[]",
  "objeto": "{}",
  "nulo": "null"
}`))


//JSON stringfly() --> Convierte un objeto o un valor válido de javascript a una cadena de texto.

console.log(JSON.stringify({}))
console.log(JSON.stringify([1,2,3]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify(19))
console.log(JSON.stringify("Hola a todos, yo soy el León"))
console.log(JSON.stringify(null))
console.log(JSON.stringify({x: 2, y: 3}))

console.log(JSON.stringify(json))

//-------------------------------------- Clase 60 - WEB APIs --------------------------------------//
//DOM --> Document Object Model (Cómo los navegadores representan el código de HTML y XML)
//B0M --> Browser Object Model (Refiere a todos los objetos expuestos por el navegador web)
//CSSOM --> CSS Object Model (Parte pequeña del DOM pero para manipular el CSS. Por ejemplo: animaciones, mediaqueries, etc)
//WEB APIs --> Eventos, forms, AJAX - Fetch, history, web storage, geolocation, canvas, matchmedia, etc.

let texto = "Hola, soy Diana"

const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto))

//hablar(texto)
