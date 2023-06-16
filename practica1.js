
function sumarNumeros(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
  }
  
  console.log(sumarNumeros(1, 2))
  console.log(sumarNumeros(2, 3))
  console.log(sumarNumeros(3, 4))
  console.log(sumarNumeros(4, 5))

function sumarNumeros(numero1, numero2, numero3, numero4, fruta1, fruta2) {
    let resultado1 = numero1 + numero2;
    let resultado2 = numero3 - numero4;
    let canasta = fruta1 + fruta2;
    return { resultado1, resultado2, canasta };
}

let miResultado1 = sumarNumeros(20, 2, 8, 12, "frutilla", "banana").canasta;
console.log(miResultado1)


/*
let humano = {
    nombre: ["Diana", "Matias"],
    edad: 22,
};

let miNombre = humano.nombre[1]
console.log(miNombre)

/*Propiedades de un objeto se accede con un . y a las posiciones de un array con [] y número de la posición 
Sumar números retorna objetos
*/