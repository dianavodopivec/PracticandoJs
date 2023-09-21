//-------------------------------------- Clase 74 - Flujo de Eventos (Burbuja y captura) --------------------------------------//

//UNA VEZ QUE UN EVENTO SE ORIGINA, TIENE UNA PROPAGACIÓN A LO LARGO DEL ÁRBOL DEL DOM, ES POR ESO MISMO QUE ESA PROPAGACIÓN SE DA DEL ELEMENTO MÁS INTERNO AL MÁS EXTERNO (FASE DE BURBUJA)
//DOS MANERAS DE PROPAGAR UN EVENTO

/*const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a")

console.log($divsEventos)

function flujoEventos(e){
    console.log(`Holi te saluda ${this.className}, el click lo originó ${e.target.className}`)//Target para saber que div originó el evento.
    //e.stopPropagation()
}

$divsEventos.forEach((div) => {
    //Fase de burbuja (interno al más externo)
    div.addEventListener("click", flujoEventos)
    //div.addEventListener("click", flujoEventos, false)
    //Fase de captura (externo al más interno)
    //div.addEventListener("click", flujoEventos, true)
    //También se puede pasar un objeto - CAPTURE (hace referencia a si es fase de burbuja o captura)
    /*div.addEventListener("click", flujoEventos, {
      capture: false,//Activará el comportamiento interno al más externo
      capture: true,//Activará el comportamiento externo al más interno
      once: true//Para que el evento se ejecute una sola vez
    })
})

$linkEventos.addEventListener("click", (e) => {
    alert("Hola, soy Dibella SilverHand y vamos a quemar este país 👅👅")
    //e.preventDefault()
})*/

//-------------------------------------- Clase 75 - StopPropagation & preventDefault --------------------------------------//

//MÉTODO STOPPROPAGATION -> Podemos detener la propagación de los flujos de eventos. (e.stopPropagation())
//MÉTODO PREVENTDEFAULT -> Cancelar la acción que tenga por default el elemento (e.preventDefault())

//-------------------------------------- Clase 76 - Delegación de Eventos --------------------------------------//

//(REUTILIZANDO CÓDIGO ANTERIOR)

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e){
    console.log(`Holi te saluda ${this.className}, el click lo originó ${e.target.className}`)
}

document.addEventListener("click", (e) => {
    console.log("click en", e.target)
    if(e.target.matches(".eventos-flujo div")) {
        flujoEventos(e)
    }

//El método MATCHES busca un selector válido
    if (e.target.matches(".eventos-flujo a")) {
       alert("Hola, soy Dibella SilverHand y vamos a quemar este país 👅👅")
       e.preventDefault() 
    }
})

//-------------------------------------- Clase 77 - BOM: Propiedades y Eventos --------------------------------------//

//BOM: Serie de métodos u objetos que "cuelgan" directamente de Window.
 