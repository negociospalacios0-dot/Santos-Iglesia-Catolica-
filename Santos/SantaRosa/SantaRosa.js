document.getElementById("Inicio").addEventListener("click", () => {
    window.location.href = "../index.html"
})

const abrirProfecion = document.getElementById("abrirProfecion")
const cerrarProfecion = document.getElementById("cerrarProfecion")
const fondoProfecion = document.getElementById("contenedorProfecion")

const toggleProfecion = (mostrar) => {
  fondoProfecion.classList.toggle("vacioProfecion", !mostrar)
}

abrirProfecion.addEventListener("click", () => toggleProfecion(true))
cerrarProfecion.addEventListener("click", () => toggleProfecion(false))



let abrirMilagro = document.getElementById("abrirMilagros")
let cerrarMilagro = document.getElementById("cerrarMilagro")
let fondoMilagro = document.getElementById("contenedorMilagros")

abrirMilagro.addEventListener("click", () => {
    fondoMilagro.classList.remove("vacioMilagro")
})

cerrarMilagro.addEventListener("click", () => {
    fondoMilagro.classList.add("vacioMilagro")
})

let abrirFamilia = document.getElementById("abrirFamilia")
let cerrarFamilia = document.getElementById("cerrarFamilia")
let fonfoFamilia = document.getElementById("contenedorFamilia")

abrirFamilia.addEventListener("click", () => {
    fonfoFamilia.classList.remove("vacio")
})

cerrarFamilia.addEventListener("click", () => {
    fonfoFamilia.classList.add("vacio")
})