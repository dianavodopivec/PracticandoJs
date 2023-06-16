
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

let resultadoNumeros2 = sumaNumeros2(2, 3, 5, 5);
console.log(resultadoNumeros2)

function sumaNumeros2(numb1, numb2, numb3, numb4) {
    let resultadoSuma = numb1 + numb2;
    let resultadoResta = numb3 - numb4;
    return {resultadoSuma, resultadoResta};
  }
  
  let {resultadoSuma, resultadoResta} = sumaNumeros2(2, 3, 5, 5);
  console.log(resultadoSuma);
  console.log(resultadoResta);
  