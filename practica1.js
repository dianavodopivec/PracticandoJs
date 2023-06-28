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

