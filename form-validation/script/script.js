document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");
    const errores = [];

    mensajeError.style.display = "none";

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        errores.length = 0;

        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;

        // Validar ID.
        if (!/^\d{5}$/.test(id)) {
            errores.push("El Identificador debe tener 5 dígitos exactos.");
        }

        // Validar nombre y apellido.
        if (nombre.trim() === "" || apellidos.trim() === "") {
            errores.push("El nombre y los apellidos no pueden estar vacíos.");
        }

        // Validar teléfono (10 dígitos exactos)
        if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(telefono)) {
            errores.push("El teléfono debe tener el formato (###) ###-####.");
        }

        // Validar correo electrónico (formato válido)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            errores.push("El correo electrónico no es válido.");
        }

        // Validar edad (Número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            errores.push("La edad debe ser un número positivo.");
        }

        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            errores.push("La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
        }

        // Mostrar los errores o mensaje de éxito
        if (errores.length > 0) {
            mensajeError.innerHTML = "<strong> Errores encontrados: </strong> <ul>";
            for (let i = 0; i < errores.length; i++) {
                mensajeError.innerHTML += "<li>" + errores[i] + "</li>";
            }
            mensajeError.innerHTML += "</ul>";
            mensajeError.style.display = "block";
        } else {
            mensajeError.innerHTML =
                "<strong> Formulario enviado con éxito. </strong>";
            mensajeError.style.display = "block";
        }
    });
});
