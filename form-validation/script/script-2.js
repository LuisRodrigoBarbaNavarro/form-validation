document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        resetErrorStyles();

        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;

        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
            showError("id", "El Identificador debe tener 5 dígitos exactos.");
        }

        // Validar nombre
        if (nombre.trim() === "") {
            showError("nombre", "El nombre no pueden estar vacío.");
        }

        // Validar apellido
        if (apellidos.trim() === "") {
            showError("apellidos", "El apellido no pueden estar vacío.");
        }

        // Validar teléfono (10 dígitos exactos)
        if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(telefono)) {
            showError("telefono", "El teléfono debe tener el formato (###) ###-####.");
        }

        // Validar correo electrónico (Formato válido)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            showError("correo", "El correo electrónico no es válido.");
        }

        // Validar edad (Número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            showError("edad", "La edad debe ser un número positivo.");
        }

        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            showError("fechaNacimiento", "La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
        }
    });

    // Función para mostrar errores debajo de los campos en la etiqueta <span>
    function showError(fieldName, errorMsg) {
        const field = document.getElementById(fieldName);
        const errorSpan = document.createElement("span");

        errorSpan.classList.add("text-danger");
        errorSpan.innerHTML = errorMsg;

        field.parentNode.appendChild(errorSpan);
    }

    // Función para restablecer los estilos de error
    function resetErrorStyles() {
        const errorSpans = document.querySelectorAll(".text-danger");
        errorSpans.forEach(function (errorSpan) {
            errorSpan.remove();
        });
    }
});
