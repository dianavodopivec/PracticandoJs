//-------------------------------------- Clase 74 - Flujo de Eventos (Burbuja y captura) --------------------------------------//

//UNA VEZ QUE UN EVENTO SE ORIGINA, TIENE UNA PROPAGACIÓN A LO LARGO DEL ÁRBOL DEL DOM, ES POR ESO MISMO QUE ESA PROPAGACIÓN SE DA DEL ELEMENTO MÁS INTERNO AL MÁS EXTERNO (FASE DE BURBUJA)
//DOS MANERAS DE PROPAGAR UN EVENTO

const $divsEventos = document.querySelectorAll(".eventos-flujo div")
console.log($divsEventos)

function flujoEventos(e){
    console.log(`Holi te saluda ${this.className}, el click lo originó ${e.target.className}`)//Target para saber que div originó el evento.
}

$divsEventos.forEach((div) => {
    //Fase de burbuja (interno al más externo)
    div.addEventListener("click", flujoEventos, false)
    //Fase de captura (externo al más interno)
    div.addEventListener("click", flujoEventos, true)
    //También se puede pasar un objeto - CAPTURE (hace referencia a si es fase de burbuja o captura)
    div.addEventListener("click", flujoEventos, {
      capture: false,//Activará el comportamiento interno al más externo
      capture: true,//Activará el comportamiento externo al más interno
      once: true//Para que el evento se ejecute una sola vez
    })
})

//-------------------------------------- Clase 75 - StopPropagation & preventDefault --------------------------------------//

