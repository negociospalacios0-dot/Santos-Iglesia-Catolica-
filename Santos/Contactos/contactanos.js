let formulario = document.getElementById("form-contacto")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    emailjs.sendForm(
        "service_7ms0p8v",
        "template_nxrm2yf",
        "#form-contacto"
    )
    .then(() => {
        alert("Mensaje enviado correctamente")
        formulario.reset()
    })
    .catch((error) => {
        console.error("Error:", error)
        alert("Error al enviar el mensaje")
    })
})
