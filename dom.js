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