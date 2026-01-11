let botonMenu = document.querySelector(".menu")
let menuLateral = document.getElementById("menu-lateral")
let botonCerrar = document.getElementById("cerrar")

// abrir menú
botonMenu.addEventListener("click", function () {
    menuLateral.classList.add("abierto")
})

// cerrar menú
botonCerrar.addEventListener("click", function () {
    menuLateral.classList.remove("abierto")
})
