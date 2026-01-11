const paises = [
    {
        pais: "Perú",
        link: "../Ubicaciones/Paises/Peru.html",
    },
    {
        pais: "Argentina",
    },
    {
        pais: "Chile",
    },
    {
        pais: "Mexico",
    }
]

const paisesMaps = document.getElementById("paises")

paises.forEach((country) => {
    paisesMaps.innerHTML += `
    <div class="contenedorOne">
        <h2>${country.pais}</h2>
        <button onclick="window.location.href='${country.link}'">
        Ver Ubicaciones
        </button>
    </div>
    `
})