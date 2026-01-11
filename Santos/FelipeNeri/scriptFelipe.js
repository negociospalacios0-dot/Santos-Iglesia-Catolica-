document.getElementById("inicio").addEventListener("click", () => {
   window.location.href = "../index.html"
});

//Rezo
let abrir = document.getElementById("abrir")
let cerrar = document.getElementById("cerrar")
let fondo = document.getElementById("fondoId")

abrir.addEventListener("click", () => {
    fondo.classList.remove("oculto");
})

cerrar.addEventListener("click", () => {
    fondo.classList.add("oculto");
})

 
//Profecion

let abrirProfecion = document.getElementById("oppenProfecion")
let cerrarProfecion = document.getElementById("closeProfecion")
let fondoProfecion = document.getElementById("fondoProfecion")

abrirProfecion.addEventListener("click", () => {
    fondoProfecion.classList.remove("vacio")
})

cerrarProfecion.addEventListener("click", () => {
    fondoProfecion.classList.add("vacio")
})

// Familia

let abrirFamilia = document.getElementById("abrirFamilia")
let cerrarFamilia = document.getElementById("cerrarFamilia")
let fondoFamilia = document.getElementById("fondo-familia")

abrirFamilia.addEventListener("click", () => {
    fondoFamilia.classList.remove("nada")
})

cerrarFamilia.addEventListener("click", () => {
    fondoFamilia.classList.add("nada")
})

document.addEventListener("click", (e) => {
  const modalId = e.target.dataset.modal;

  if (!modalId) return;

  const modal = document.getElementById(modalId);
  modal.classList.toggle("oculto");
});
