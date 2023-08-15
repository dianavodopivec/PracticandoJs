let texto = "SALVADO"

const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto))

hablar(texto)

//-------------------------------------- Clase 61 - DOM (Introducción) --------------------------------------//

console.log("ELEMENTOS DEL DOCUMENTO")
console.log(window.document)