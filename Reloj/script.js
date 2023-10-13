//>--------Reloj--------<\\
const $contenedorReloj = document.getElementById("contenedor-reloj")
const $btnIniciarReloj = document.getElementById("iniciar-reloj")
const $btnDetenerReloj = document.getElementById("detener-reloj")
const $btnIniciarAlarma = document.getElementById("iniciar-alarma")
const $btnDetenerAlarma = document.getElementById("detener-alarma")
let clockStart 
let sonidoAlarma = null

const iniciarReloj = () => {
    const fecha = new Date()
    const hora = String(fecha.getHours()).padStart(2,"0")
    const minutos = String(fecha.getMinutes()).padStart(2,"0")
    const segundos = String(fecha.getSeconds()).padStart(2,"0")
    $contenedorReloj.innerHTML = `${hora}:${minutos}:${segundos}`
    clockStart = setInterval(() => {
        const fecha = new Date()
        const hora = String(fecha.getHours()).padStart(2,"0")
        const minutos = String(fecha.getMinutes()).padStart(2,"0")
        const segundos = String(fecha.getSeconds()).padStart(2,"0")
        $contenedorReloj.innerHTML = `${hora}:${minutos}:${segundos}`
    }, 1000)
    $btnDetenerReloj.classList.remove("buttonDisabled")
    $btnIniciarReloj.classList.add("buttonDisabled")
    $btnIniciarReloj.removeEventListener("click", iniciarReloj)
    $btnDetenerReloj.addEventListener("click", detenerReloj)
    console.log("iniciar")
}

const detenerReloj = () => {
    clearInterval(clockStart) 
    $contenedorReloj.innerHTML = ""
    $btnDetenerReloj.classList.add("buttonDisabled")
    $btnIniciarReloj.classList.remove("buttonDisabled")
    $btnIniciarReloj.addEventListener("click", iniciarReloj)
    $btnDetenerReloj.removeEventListener("click", detenerReloj)
    console.log("detener")
}

$btnIniciarReloj.addEventListener("click", iniciarReloj)

//>--------Alarma--------<\\
const iniciarCancion = archivo => {
    if (sonidoAlarma !== null && !sonidoAlarma.paused) {
        sonidoAlarma.pause()
    } else {
        sonidoAlarma = new Audio(archivo)
        sonidoAlarma.play()
    }
}

const iniciarAlarma = () => {
    iniciarCancion("canción/deep-space.mp3")
    $btnIniciarAlarma.classList.add("buttonDisabled")
    $btnDetenerAlarma.classList.remove("buttonDisabled")
    $btnIniciarAlarma.removeEventListener("click", iniciarAlarma)
    $btnDetenerAlarma.addEventListener("click", detenerAlarma)
    console.log("aqui la canchion")
}

const detenerAlarma = () => {
    iniciarCancion("canción/deep-space.mp3")
    $btnDetenerAlarma.classList.add("buttonDisabled")
    $btnIniciarAlarma.classList.remove("buttonDisabled")
    $btnDetenerAlarma.removeEventListener("click", detenerAlarma)
    $btnIniciarAlarma.addEventListener("click", iniciarAlarma)
    console.log("adioch canchion")
}

$btnIniciarAlarma.addEventListener("click", iniciarAlarma)