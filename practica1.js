
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

//Maps --> Objetos que sirven para almacenar un conjunto de valores a manera de objeto.

let mapa = new Map()
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
console.log(mapa)

//¿COMO RECORRER UN MAPS?

for (let [llave, valor] of mapa) {
  console.log(`Llave: ${llave}, Valor: ${valor}`)
}