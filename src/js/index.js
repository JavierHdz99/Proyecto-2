/* el documento va a esperar a que pase un evento, en este caso
domcontentloaded hace que cargue el archivo html para ser ejecutado*/
document.addEventListener("DOMContentLoaded", () => {

    const user = localStorage.getItem("user")

    if (user) {
        // TODO: obtener usuario
    } else {
        window.location = "/login.html"
    }
})