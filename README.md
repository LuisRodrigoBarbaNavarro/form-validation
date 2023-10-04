# Práctica 2 I Formularios Validados Con JavaScript 🐈

### Información Básica

**Nombre:** Barba Navarro Luis Rodrigo

**Fecha (Creación):** 03/10/23

**Descripción:** Este repositorio presenta tres versiones de formularios de validación en JavaScript:

1. [Versión Básica](https://luisrodrigobarbanavarro.github.io/form-validation/form-validation/index-1.html): Implementación simple de validación de datos.
2. [Versión con Observaciones](https://luisrodrigobarbanavarro.github.io/form-validation/form-validation/index-2.html): Muestra mensajes detallados de error debajo de cada campo.
3. [Versión con Resaltado de Errores](https://luisrodrigobarbanavarro.github.io/form-validation/form-validation/index-3.html): Resalta los errores directamente en los campos de texto.

### Preguntas
1. **Parámetros de la Etiqueta `<input>`:**
   La etiqueta `<input>` se utiliza en HTML para crear campos de entrada en formularios. Puede tener varios atributos que determinan su comportamiento y apariencia, como:
   - `type`: Define el tipo de entrada (por ejemplo, texto, contraseña, número, radio, checkbox, etc.).
   - `name`: Asigna un nombre al campo que se usa para identificarlo en el formulario.
   - `value`: Establece un valor predeterminado para el campo.
   - `placeholder`: Muestra un texto de marcador de posición en el campo.
   - `required`: Hace que el campo sea obligatorio para enviar el formulario.
   - `maxlength`: Limita la longitud máxima de entrada de texto.
   - `min` y `max`: Establece valores mínimos y máximos para campos numéricos, como `number` y `range`.

2. **Parámetros de la Etiqueta `<button>`:**
   La etiqueta `<button>` se utiliza para crear botones en HTML. Puede configurarse con varios atributos y propiedades, como:
   - `type`: Define el tipo de botón (por ejemplo, `submit`, `reset`, `button`).
   - `name`: Asigna un nombre al botón para identificarlo en el formulario.
   - `value`: Define un valor para el botón que se envía al servidor si es un botón de tipo `submit`.
   - `onclick`: Permite definir una función JavaScript que se ejecutará cuando se haga clic en el botón.
   - `disabled`: Deshabilita el botón, evitando que los usuarios lo activen.

3. **Método `addEventListener` en el Proyecto:**
   En el proyecto, se emplea el método `addEventListener` para escuchar y reaccionar a eventos específicos en los elementos HTML. En este caso, se utiliza para detectar el evento `submit` del formulario. Cuando el usuario hace clic en el botón "Enviar," se ejecuta una función de validación. Si hay errores, se evita que el formulario se envíe mediante `event.preventDefault()`. Esto permite que el script realice comprobaciones antes de que los datos se envíen, mejorando la experiencia del usuario y garantizando que los datos ingresados cumplan con las reglas de validación.

4. **Validación de Entradas:**
   Cada entrada en el formulario se valida mediante expresiones regulares y lógica condicional. Las expresiones regulares actúan como patrones que definen el formato requerido para datos específicos, como ID, teléfono, correo y fecha de nacimiento. Si los datos ingresados no coinciden con estos patrones, se consideran incorrectos y se muestra un mensaje con las observaciones encontradas, o en su defecto, el error resaltado debajo de cada campo de texto.

### Explicación (Primera Versión y Segunda Versión) 🐈
En esencia, durante la implementación de las validaciones en el formulario, se adoptó un enfoque para proporcionar observaciones sobre los errores detectados. Para lograr esto, se manejó un elemento `<div>` en el documento HTML, destinado a guardar el contenido de texto que contendría los mensajes de error acumulados. Estos mensajes de error, cuando surgían durante la validación, se almacenaban en una estructura de datos, específicamente un arreglo, con el propósito de presentarlos posteriormente al usuario.

Se estableció una condición mediante la cual, si el arreglo de errores resultaba estar vacío, se activaba la presentación de un mensaje de confirmación del formulario, indicando que la validación se había completado satisfactoriamente; caso contrario, mostraba los mensajes de error encontrados.

![Primera y Segunda Versión](https://i.imgur.com/wY7lYMq.png)
