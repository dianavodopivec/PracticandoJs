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

//-------------------------------------- Clase 64 - Estilos y Variables CSS --------------------------------------//

