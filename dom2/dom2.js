//-------------------------------------- Clase 74 - Flujo de Eventos (Burbuja y captura) --------------------------------------//

//UNA VEZ QUE UN EVENTO SE ORIGINA, TIENE UNA PROPAGACIÓN A LO LARGO DEL ÁRBOL DEL DOM, ES POR ESO MISMO QUE ESA PROPAGACIÓN SE DA DEL ELEMENTO MÁS INTERNO AL MÁS EXTERNO (FASE DE BURBUJA)
//DOS MANERAS DE PROPAGAR UN EVENTO

const $divsEventos = document.querySelectorAll(".eventos-flujo div")
console.log($divsEventos)

function flujoEventos(e){
    console.log(`Holi`)
}

$divsEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos)
})