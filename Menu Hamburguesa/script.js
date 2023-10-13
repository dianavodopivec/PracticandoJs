const $menuDesplegable = document.getElementById("menu-desplegable")
const $botonMenu = document.getElementById("boton-menu") 

let clickeado = false

$botonMenu.addEventListener("click", (e) => {
    console.log(clickeado)
    clickeado === false 
    ? ($menuDesplegable.classList.add("colorcito", "menu-open"),
    clickeado = true)
    : ($menuDesplegable.classList.remove("colorcito", "menu-open"),
    clickeado = false)
})