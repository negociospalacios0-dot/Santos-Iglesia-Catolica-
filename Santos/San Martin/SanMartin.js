document.getElementById("inicio").addEventListener("click", () => {
   window.location.href = "../index.html"
});

const abrirProfesion = document.getElementById("abrirProfesion")
const cerrarProfesion = document.getElementById("cerrarProfesion")
const fondoProfesion = document.getElementById("contendedorProfesion")

abrirProfesion.addEventListener("click", () => {
   fondoProfesion.classList.remove("nada")
})

cerrarProfesion.addEventListener("click", () => {
   fondoProfesion.classList.add("nada")
})


const abrirFamilia = document.getElementById("abrirFamilia")
const cerrarFamilia = document.getElementById("cerrarFamilia")
const fondoFamilia = document.getElementById("fondoFamilia")

abrirFamilia.addEventListener("click", () => {
   fondoFamilia.classList.remove("nadaFamilia")
})

cerrarFamilia.addEventListener("click", () => {
   fondoFamilia.classList.add("nadaFamilia")
})

let fondoMilagros = document.getElementById("fondoMilagros")

document.querySelectorAll(".btn-Milagros").forEach(btn => {
   btn.addEventListener("click", () => {
      fondoMilagros.classList.toggle("nadaMilagros");
   });
});