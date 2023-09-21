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

/*window.addEventListener("resize", (e) => {
console.clear()
console.log("---Evento Resize---")
//Propiedad - window.innerWidht -> Hace referencia al tamaño del ancho del viewport de nuestra ventana.
console.log(window.innerWidth)
console.log(window.outerWidth)
//Propiedad - window.innerHeight -> Hace referencia a la altura del viewport de nuestra ventana.
console.log(window.innerHeight)
console.log(window.outerHeight)
//console.log(e)
})


window.addEventListener("scroll", (e) => {
console.clear()
console.log("---Evento Scroll---")
//Propiedad - window.scrollX & window.scrollY -> Hace referencia a cada una de las barras de desplazamiento. (Siempre son números positivos expresados en pixeles)
console.log(window.scrollX)
console.log(window.scrollY)
//console.log(e)
})

window.addEventListener("load", (e) => {
console.log("---Evento Load---")
//Propiedad - window.screenX & window.screenY -> Hace referencia a la distancia horizontal en pixeles.
console.log(window.screenX)
console.log(window.screenY)
//console.log(e)
})

document.addEventListener("DOMContentLoaded", (e) => {
console.log("---Evento DOMContentLoaded---")
//Propiedad - window.screenX & window.screenY -> Hace referencia a la distancia horizontal en pixeles.
console.log(window.screenX)
console.log(window.screenY)
//console.log(e)
})

console.clear()*/

//-------------------------------------- Clase 78 - BOM: Métodos --------------------------------------//

const $botonAbrir = document.getElementById("abrir-ventana"),
$botonCerrar = document.getElementById("cerrar-ventana"),
$botonImprimir = document.getElementById("imprimir-ventana")

$botonAbrir.addEventListener("click", (e) =>{
    //Método para abrir una ventana
    window.open("https://www.youtube.com/watch?v=gt943-HQzGc&ab_channel=ErnestGamingway")
})

$botonCerrar.addEventListener("click", (e) =>{
    //Método para cerrar la ventana
    window.close()
})
$botonImprimir.addEventListener("click", (e) =>{
    //Método para imprimir
    window.print()
})

//-------------------------------------- Clase 79 - BOM: Objetos: URL, Historial y Navegador --------------------------------------//

//OBJETO URL 
console.log("---Objeto URL (location)---")
console.log(location)
console.log(location.origin)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.href)
console.log(location.hash)
console.log(location.search)
console.log(location.pathname)

//OBJETO HISTORIAL
console.log("---Objeto HISTORIAL (history)---")
console.log(history)
console.log(history.length)//Guarda la longitud.
console.log(history.back)//Para navegar entre páginas. P ej: entre (2)
console.log(history.forward)//Cuántas páginas quieres ir hacia adelante. P ej: entre (1)
console.log(history.go)//Nos dirige hacia donde queremos ir. P ej: entre (-3)

//OBJETO NAVEGADOR
console.log("---Objeto NAVEGADOR (navigator)---")
console.log(navigator)
console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.mimeTypes)//No existe más.
console.log(navigator.onLine)
console.log(navigator.serviceWorker)
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent)