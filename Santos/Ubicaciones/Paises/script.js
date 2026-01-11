const ubicaciones = [
    {
        nombre: "Parroquia Santa Maria Madre de la paz",
        lugar: "Cerro Blanco 360, Santiago de Surco 15803",
        link : "https://maps.app.goo.gl/Y88ZW2cG49rMFVbH6"
    },
    {
        nombre: "Santuario Archidiocesano Señor de la Divina Misericordia",
        lugar: "Av. Caminos del Inca, Santiago de Surco 15039",
        link : "https://maps.app.goo.gl/35TXP1RsE4KaijkN7"
    },
    {
        nombre: "Capilla Virgen de Loreto",
        lugar: "Jr. Juan Germán Lapeyre 306, Lima 15039",
        link : "https://maps.app.goo.gl/aoC3f3Rdq7WAgx186"
    }
]

const conten = document.getElementById("Ubicaciones") 

ubicaciones.forEach((lugar) => {
    conten.innerHTML += `
    <div class="lugar">
        <h3>${lugar.nombre}</h3>
        <p>Lugar: ${lugar.lugar}</p>
        <a href="${lugar.link}">Ver en el mapa</a>
    </div>
    `
})
