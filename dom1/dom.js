let texto = "SALVADO"

const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto))

hablar(texto)

//-------------------------------------- Clase 61 - DOM (Introducción) --------------------------------------//

console.log("ELEMENTOS DEL DOCUMENTO")
console.log(window.document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)//Obtener el HTML
console.log(document.doctype)
console.log(document.charset)//NO SE UTILIZA MÁS
console.log(document.characterSet)//NUEVO CHARSET
console.log(document.title)
console.log(document.links)//Colección de HTML
console.log(document.images)//Capturar imágenes
console.log(document.forms)//Acceder a formularios
console.log(document.styleSheets)//Muestra el estilo CSS}
console.log(document.scripts)//Scripts enlazados
console.log(document.getSelection().toString())
console.log(document.write("Oda"))

//-------------------------------------- Clase 62 - Nodos, Elementos y Selectores --------------------------------------//

//NODOS --> Cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista.

  //DE TIPO ELEMENTO --> Etiqueta HTML en particular 
  //DE TIPO TEXTO --> Texto que tiene una etiqueta adentro. (h1, h2, párrafo, etc)

//SELECTORES --> Proveen metodos que hacen mas facil y rapido devolver elementos del nodo del DOM.

//Trae los elementos que por nombre de etiqueta tengan x caracteres.
console.log(document.getElementsByTagName("li"))
//Permite capturar elementos por nombre de clase que tengan x caracteres.
console.log(document.getElementsByClassName("card"))
//Permite acceder a través de la etiqueta name que tenga x caracteres.
console.log(document.getElementsByName("nombre"))
//Devuelve una referencia al elemento por su ID.
console.log(document.getElementById("menu"))
//Reemplaza a los 3 primeros métodos y recibe como parámetro un selector válido de CSS.(id, clase,etiqueta de html que este dentro de cierta clase, etc)
console.log(document.querySelector("#menu"))
//Trae todos los selectores de x tipo. Comparte métodos como lenght, forEach,[posición] para acceder a algun elemento en particular, #menu li, etc.
console.log(document.querySelectorAll("a"))

//-------------------------------------- Clase 63 - Atributos y Data-Attributes --------------------------------------//

console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang = "en"
console.log(document.documentElement.lang)
console.log(document.documentElement.setAttribute("lang", "es-ARG"))

//const $linkDOM = document.querySelector(".link-dom") //También se puede usar LET, el $ hace referencia a elementos de HTML.

//$linkDOM.setAttribute("target", "_blank")//Establecer valores que no tengo.
//$linkDOM.setAttribute("rel", "noopener")
//$linkDOM.setAttribute("href", "https://www.google.com/")
//console.log($linkDOM.hasAttribute("rel"))//Verificar si tiene un atributo (devuelve un booleano).
//console.log($linkDOM.removeAttribute("rel"))//Remueve el atributo que quieras.

//-------------------------------------- Clase 64 - Estilos y Variables CSS --------------------------------------//


const $linkDOM = document.querySelector(".link-dom")

//ESTILO CSS
console.log($linkDOM.style)//Acceder con el "." y nos permite ver todo lo que se permite en CSS.
console.log($linkDOM.getAttribute("style"))//Utilizando este método también podemos acceder a una propiedad en particular del CSS.
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color) 
console.log(window.getComputedStyle($linkDOM))//Propiedades dinámicas
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"))//Acceder a una propiedad en particular 

//¿Cómo establecer valores?

$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")//Elemento de bloque
$linkDOM.style.width = "50%"//Acceder con el "."
$linkDOM.style.textAlign = "center"//Alinear el texto al centro
$linkDOM.style.marginLeft = "auto"//Dar margen
$linkDOM.style.marginRight = "auto"//Dar margen
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = ".5rem"//Dar borde.

//VARIABLES CSS - CUSTOM PROPERTIES CSS
const $html = document.documentElement,
$body = document.body


let varPinkColor = getComputedStyle($html).getPropertyValue("--pink-color"), //Acceder a propiedades
 varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
 
 console.log(varPinkColor, varDarkColor)

 //¿Cómo aplicarlas?

 $body.style.backgroundColor = varPinkColor 
 $body.style.color = varDarkColor 

 //¿Cómo acceder y cambiar?

 $html.style.setProperty("--dark-color", "white")
 varPinkColor = getComputedStyle($html).getPropertyValue("--dark-color")

 $body.style.setProperty("background-color", varPinkColor)

//-------------------------------------- Clase 65 - Clases CSS --------------------------------------//

//¿Cómo accedemos a las "clases"?

const $card = document.querySelector(".cards")

console.log($card)
console.log($card.className)//Acceder al valor del atributo "class" así como también devuelve la cadena de texto de class.
console.log($card.classList)//Devuelve un DOMTokenList 
console.log($card.classList.contains("rotate-20"))//Devuelve un booleano según se encuentre la propiedad o no.
$card.classList.add("rotate-20")//Este método "add" nos permite añadir lo que querramos.
console.log($card.classList.contains("rotate-20"))//Devuelve un booleano según se encuentre la propiedad o no.
$card.classList.remove("rotate-20")//Nos permite remover la clase que querramos.
$card.classList.toggle("rotate-20")//Si el elemento posee la clase, este se la quita. Pero si no tiene la clase, la agrega.
//$card.classList.replace("rotate-20")//Reemplazar una clase por otra así como también podes agregar varias clases y las separas con ",".

//-------------------------------------- Clase 66 - Texto y HTML --------------------------------------//

 //Capturar en una variable la referencia de un elemento.

 const $QueEsDOM = document.getElementById("Qué es")

 let textoVariable = `
  <p> DOM es una API para documentos HTML y XML <p/>
 `
//Cómo modificar el contenido y reemplazarlo por un texto, propiedades:

$QueEsDOM.innerText = textoVariable //Agregar contenido textual a un elemento 
$QueEsDOM.textContent = textoVariable //Agrega contenido textual (Solo insertar texto)
$QueEsDOM.innerHTML = textoVariable//Contenido se renderice como código HTML (Sólo contenido HTML)
$QueEsDOM.outerHTML = textoVariable//Reemplaza un elemento del DOM por el contenido que tengamos

//-------------------------------------- Clase 67 - Traversing: Recorriendo el DOM --------------------------------------//

//Propiedades que nos da la API del DOM para poder recorrer diferentes elementos. (Etiquetas HTML)

//const $cards = document.querySelector(".cards")

/*console.log($cards)
console.log($cards.children)//Hace referencia a "sus hijos" (cada figure)
console.log($cards.children[2])//Para acceder a una en específico
console.log($cards.parentElement)//Retorna el elemento "padre"
console.log($cards.firstChild)//Accede al primer "hijo" 
console.log($cards.firstElementChild)//Detecta el primer elemento HTML
console.log($cards.lastElementChild)//Detecta el último elemento HTML
console.log($cards.previousElementSibling)//Detecta al anteúltimo elemento HTML
console.log($cards.nextElementSibling)//Detecta a la siguiente elemento HTML
console.log($cards.closest("div"))//Método que busca el padre más cercano del tipo de selector que querramos
console.log($cards.closest("body"))
console.log($cards.children[3].closest("section"))*/

//-------------------------------------- Clase 68 - Crear Elementos y Fragmentos --------------------------------------//

const $figure = document.createElement("figure"), //Creará un elemento
  $img = document.createElement("img"), //Configurar source y alt, etc
  $figcaption = document.createElement("figcaption"), //Modificar el nodo de texto, creando otro elemento de tipo texto
  $figcaptionText = document.createTextNode(""), //Creará un nodo de texto
  //$cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure")


//Primer tarjeta dinámica
$img.setAttribute("src", "https://i.kym-cdn.com/entries/icons/facebook/000/046/026/armpG9d_700b.jpg")
$img.setAttribute("alt", "Claro que no ...")
$figure.classList.add("card")

$figure.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)  
//$cards.appendChild($figure)

//Segunda tarjeta dinámica
$figure2.innerHTML = `
<img src="https://pbs.twimg.com/media/EgS8Ft9WkAoV8lL.jpg" alt="Triste">
<figcaption>Esto me está deprimiendo</figcaption>
`
$figure2.classList.add("card")
//$cards.appendChild($figure2)


//Lista dinámica 
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
$ul = document.createElement("ul")

document.write("<h3>Días de la semana</h3>")

document.body.appendChild($ul)

dias.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el
  $ul.appendChild($li)
})

//Lista con inner.HTML

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
 $ul2 = document.createElement("ul")

 document.write("<h3>Continentes</h3>")
 document.body.appendChild($ul2)
$ul.innerHTML = ""
continentes.forEach(el => {$ul2.innerHTML += `<li>${el}<li/>`})//Inicialización del contenido innerHTML

//-------------------------------------- Clase 69 - DOM: Templates HTML --------------------------------------//

//Etiqueta que NO se visualiza en la pestaña de elements.

/*
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardcContent = [
  {
    title: "Foto1",
    img: "https://img.freepik.com/foto-gratis/atractiva-mujer-sonriente-feliz-senalando-dedo-derecha_176420-17747.jpg"
  },
  {
    title: "Foto2",
    img: "https://thumbs.dreamstime.com/b/una-programadora-frustrada-trabaja-en-computadora-retroiluminaci%C3%B3n-azul-y-rojo-mujer-trabajo-la-oficina-209232062.jpg"
  },
  {
    title: "Foto3",
    img: "https://media.istockphoto.com/id/1353629776/es/foto/primer-plano-de-una-mujer-que-tiene-un-colapso-mental.jpg?s=612x612&w=0&k=20&c=y3RtQZX1A9A--yAAtgcbZGuLfmm3r2jLBvuMzWsZWVw="
  },
  {
    title: "Foto4",
    img: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-volviendo-camara-senalando-dedo-sonrisa-satisfaccion_176420-17751.jpg"
  },
  {
    title: "Foto5",
    img: "https://i0.wp.com/www.homosensual.com/wp-content/uploads/2022/08/joder-esto-si-es-cine-meme.jpg?resize=600%2C368&ssl=1"
  },
]

//Navegar 
cardcContent.forEach(el => {
  $template.querySelector("img").setAttribute("src", el.img)
  $template.querySelector("img").setAttribute("alt", el.title)
  $template.querySelector("figcaption").textContent = el.title

  let $clone = document.importNode($template, true) //Para clonar todo el nodo de un documento, el "true" refiere a que copiaremos TODA la estructura interna.
  $fragment.appendChild($clone) //Al fragment le agregamos el $clone 
})

//Cuando termine el FOREACH, al elemento card le agregamos el $fragment.

$cards.appendChild($fragment)
*/

//-------------------------------------- Clase 70 - Modificando Elementos (Old Style) I --------------------------------------//
 
/*const $cards = document.querySelector(".cards"),
 $newCard = document.createElement("figure")

$newCard.innerHTML = `
<img src= "https://pbs.twimg.com/media/EgS8Ft9WkAoV8lL.jpg" alt="Triste">
<figcaption>Triste</figcaption>
`
$newCard.classList.add("card")
$cloneCards = $cards.cloneNode(true)//Booleano TRUE para clonar todo el contenido.*/

//MÉTODOS 

//.REPLACE CHILD// 
//$cards.replaceChild($newCard, $cards.children[2])//Reemplazar un elemento --> Primero va el elemento al que vamos a reemplazar y luego el elemento que vamos a usar para ese reemplazo.

//.INSERT BEFORE//
//$card.insertBefore($newCard, $cards.firstElementChild) //Toma como referencia el nodo hijo e inserta el nuevo nodo antes de ese --> Primero va el nuevo nodo y el nodo de referencia.

//.REMOVE//
//$cards.removeChild($cards.lastElementChild) //Método para eliminar --> Adentro va el nodo que queremos eliminar.

//.CLONE NODE//
//document.body.appendChild($cloneCards)

//-------------------------------------- Clase 71 - Modificando elementos (Cool Style) II --------------------------------------//

//MÉTODO INSERT ADJACENT --> "Inserta de manera adyacente"

/*.insertAdjacentElement(position, el)//Agrega un elemento 
.insertAdjacentHTML(position, html)//Agrega contenido HTML
.insertAdjacentText(position, text)//Agrega un textcount que recibe 2 parámetros  (posición y elemento)*/

//POSICIONES

//beforebegin(hermano anterior) -> p.ej: Si tengo un párrafo, lo pondría antes del párrafo que tomo como referencia.
//afterbegin(primer hijo) -> p.ej: El primer elemento hijo del nodo que tomo como referencia.
//beforeend(último hijo) 
//afterend(hermano siguiente) 

const $cards = document.querySelector(".cards"),
 $newCard = document.createElement("figure")

let $contentCard = `
<img src= "https://pbs.twimg.com/media/EgS8Ft9WkAoV8lL.jpg" alt="Triste">
<figcaption></figcaption>
`
$newCard.classList.add("card")

//Por ejemplo...
$cards.insertAdjacentElement("beforebegin", $newCard)

//-------------------------------------- Clase 72 - Manejadores de Eventos --------------------------------------//
// EVENTO SEMÁNTICO

//ONCLICK -> Permite ejecutar una función cuando se le da click a cierto elemento.

/*function holaMundo() {
  //alert("Hola mundo")
  console.log(event)
}

//<button onclick="alert()">Evento con atributo HTML</button>//
const $eventosemantico = document.getElementById("evento-semantico"),
$eventomultiple = document.getElementById("evento-multiple"),
$eventoRemover = document.getElementById("evento-remover")*/


//Cómo ejecutar la función como manejador semántico (una vez definido, solo podrá ejecutar UNA función) también se pueden realizar con arrow function o funciones anónimas.
/*$eventosemantico.onclick = holaMundo()
$eventosemantico.onclick = function (e) {
  alert("Hola, ahora manejo eventos semánticos jeje")
  console.log(e)//Este parámetro representa el evento
}*/

//EVENTO MÚLTIPLE

/*$eventomultiple.addEventListener("click", holaMundo)//Recibe varios parámetros 
$eventomultiple.addEventListener("click", (e) => {
  alert("Hola, ahora manejo eventos múltiples jeje")
  console.log(e)
})*/

//-------------------------------------- Clase 73 - Eventos con Parámetros y Remover Eventos --------------------------------------//

//Toda función manejadora de eventos NO puede recibir otro parámetro que sea el evento en SI.


//Si necesito que una función se ejecute en un evento pero necesito pasarle parámetros, simplemente se envuelve en una arrow function o función anónima y ya podría pasar parámetros.
/*function saludar (nombre = "Desconocide") {
  alert(`Hola ${nombre}`)
}

$eventomultiple.addEventListener("click", () => { 
  saludar()
  saludar("Dibella")
})*/

//Eliminar eventos de un elemento

/*$eventoRemover.addEventListener("dblclick", (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`)
  console.log(e)
  $eventRemover.removeEventListener("dblclick", removerDobleClick)//ES NECESARIO QUE LA FUNCIÓN ESTE PREVIAMENTE GUARDADA PARA PODER REMOVERLA (NO PUEDE SER FUNCIÓN ARROW O ANÓNIMA)
  $eventoRemover.disabled = true //Aplicar la propiedad disabled al true para que desaparezca el botón
})*/

//-------------------------------------- Clase 74 - Flujo de Eventos (Burbuja y captura) --------------------------------------//

//UNA VEZ QUE UN EVENTO SE ORIGINA, TIENE UNA PROPAGACIÓN A LO LARGO DEL ÁRBOL DEL DOM, ES POR ESO MISMO QUE ESA PROPAGACIÓN SE DA DEL ELEMENTO MÁS INTERNO AL MÁS EXTERNO (FASE DE BURBUJA)
//DOS MANERAS DE PROPAGAR UN EVENTO

const $divsEventos = document.querySelectorAll(".eventos-flujo div")
console.log($divsEventos)


/*function flujoEventos(e){
  console.log(`Holi`)
}


$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos)
})*/

//-------------------------------------- Clase 75 - StopPropagation & preventDefault --------------------------------------//
