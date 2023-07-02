/*
function sumaNumeros(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}

console.log(sumaNumeros(2, 3))
console.log(sumaNumeros(5, 5))

function sumaNumeros2(numb1, numb2, numb3, numb4) {
    let resultadoSuma = numb1 + numb2;
    let resultadoResta = numb3 - numb4; 
    return {resultadoSuma, resultadoResta};
}

let resultadoNumeros2 = sumaNumeros2(2, 3, 5, 5).resultadoResta;
console.log(resultadoNumeros2)

function sumaNumeros2(numb1, numb2, numb3, numb4) {
    let resultadoSuma = numb1 + numb2;
    let resultadoResta = numb3 - numb4;
    return {resultadoSuma, resultadoResta};
  }
  
  let {resultadoSuma, resultadoResta} = sumaNumeros2(2, 3, 5, 5);
  console.log(resultadoSuma);
  console.log(resultadoResta);
*/
/*
const diana = {
    nombre: "Diana",
    apellido: "Vodopivec",
    edad: 22,
    pasatiempos: ["Estudiar", "Jugar juegos", "Cocinar postrecitos"],
    comidasfavoritas: ["Pizza", "Sushi", "Fideos", "Arroz"],
    soltero: true, 
    description: function () {
        console.log(this.comidasfavoritas);
    },
};

diana.description()

console.log(diana);
console.log(diana["nombre"]);
console.log(diana["apellido"]);
console.log(diana["edad"]);
*/

/*
let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;

console.log(a);
console.log(modulo);
console.log(8 > 9);
console.log(8 < 9);
console.log(8 >= 9);
console.log(8 <= 9);
console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);
console.log(0 === false)

/*let i = 1;

i = i + 2;
i += 3;
i -= 3;
i /= 3;
i *= 3;
console.log(i);
i ++;
i --;
++ i;
-- i;
console.log(i);*/
/*
console.log(!true);
console.log(4 > 5 || 7 > 1);
console.log(4 > 5 && 7 > 1);
console.log(9 === "9") || ("9" === 9);
console.log(9 === 9) && ("9" === "9");



//CLASE 22 - PROTOTIPOS//
/*
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
cocho.saludar(); */

//SEPARAMOS LOS MÉTODOS DE LA FUNCIÓN PARA ASIGNAR LOS PROTOTIPOS//

/*function Animal1 (nombre, genero, tipo) {
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
cocho.saludar();*/

//CLASE 23 - HERENCIA PROTOTÍPICA//
//
/*
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
cocho.saludar(); */

//CLASE 24 - CLASES Y HERENCIA DE CLASES//
//Las clases NO reciben parámetros, para eso deben tener el método especial constructor (recibe las propiedades),

/*class Celula {
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
//REALIZANDO EJERCCIO EN 230
//SETTERS Y GETTERS -> Métodos que nos permiten establecer y obtener ls valores de atributos de nuestras clases.

//ESTÁTICO -> Se puede ejecutar sin la necesidad de tener una instancia.
/*Robot.info()*/

//CLASE 26 - OBJETO CONSOLE//

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

//CLASE 28 - OBJETO MATH//
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
