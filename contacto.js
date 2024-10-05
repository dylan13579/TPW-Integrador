const form = document.getElementById("datos");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const telefonoInput = document.getElementById("telefono");
const mensajeInput = document.getElementById("mensaje");
const respuestaDiv = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();
    const telefono = telefonoInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    if (validarForm(nombre, correo, telefono, mensaje)) {
        respuestaDiv.innerText = "Formulario enviado";
        respuestaDiv.style.color = "green";
        respuestaDiv.classList.add("enviado");
        nombreInput.value = "";
        correoInput.value = "";
        telefonoInput.value = "";
        mensajeInput.value = "";
    } else {
        respuestaDiv.innerText = "";
    }
});

function validarForm(nombre, correo, telefono, mensaje) {
    const errores = [];

    if (!nombre || nombre.length < 3) {
        document.getElementById("nombre-error").innerText = "Nombre y Apellido invalido";
        document.getElementById("nombre-error").style.color = "red";
        document.getElementById("nombre-error").classList.add("error");
        errores.push("nombre");
    } else {
        document.getElementById("nombre-error").innerText = "";
        document.getElementById("nombre-error").classList.remove("error");
    }

    if (!correo || !validarEmail(correo)) {
        document.getElementById("correo-error").innerText = "Correo electrónico invalido";
        document.getElementById("correo-error").style.color = "red";
        document.getElementById("correo-error").classList.add("error");
        errores.push("correo");
    } else {
        document.getElementById("correo-error").innerText = "";
        document.getElementById("correo-error").classList.remove("error");
    }

    if (!telefono || !validarTelefono(telefono)) {
        document.getElementById("telefono-error").innerText = "Teléfono invalido";
        document.getElementById("telefono-error").style.color = "red";
        document.getElementById("telefono-error").classList.add("error");
        errores.push("telefono");
    } else {
        document.getElementById("telefono-error").innerText = "";
        document.getElementById("telefono-error").classList.remove("error");
    }

    if (!mensaje || mensaje.length < 10) {
        document.getElementById("mensaje-error").innerText = "El comentario debe tener 10 caracteres";
        document.getElementById("mensaje-error").style.color = "red";
        document.getElementById("mensaje-error").classList.add("error");
        errores.push("mensaje");
    } else {
        document.getElementById("mensaje-error").innerText = "";
        document.getElementById("mensaje-error").classList.remove("error");
    }

    return errores.length === 0;
}

function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validarTelefono(telefono) {
    const telefonoRegex = /^\d{10}$/;
    return telefonoRegex.test(telefono);
}