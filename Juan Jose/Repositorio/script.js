let abrirDezlizante = document.getElementById("abrirDezlizante")
let fondoDeslizante = document.getElementById("fondoDeslizante")
let cerrarDeslizante = document.getElementById("cerrarDeslizante")

abrirDezlizante.addEventListener("click", () => {
    fondoDeslizante.classList.remove("nada")
})

cerrarDeslizante.addEventListener("click", () => {
    fondoDeslizante.classList.add("nada")
})