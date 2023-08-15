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
