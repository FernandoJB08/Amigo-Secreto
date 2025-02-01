// Espera a que todo el contenido de la página (DOM) esté cargado antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", function () {
    // Eliminamos los nombres almacenados en localStorage para que cada vez que se recargue la página, la lista esté vacía.
    localStorage.removeItem("nombres");

    // Creamos un array vacío donde se almacenarán los nombres de los jugadores temporalmente.
    let nombres = [];

    // Obtenemos referencias a los elementos del DOM para poder interactuar con ellos.
    const input = document.getElementById("amigo"); // Campo de texto donde el usuario ingresa un nombre.
    const buttonAdd = document.querySelector(".button-add"); // Botón para añadir nombres a la lista.
    const buttonSort = document.querySelector(".button-draw"); // Botón para sortear un amigo secreto.
    const lista = document.getElementById("listaAmigos"); // Lista donde se mostrarán los nombres ingresados.
    const resultado = document.getElementById("resultado"); // Contenedor donde se mostrará el amigo secreto seleccionado.

    // Función para actualizar la lista en la pantalla con los nombres ingresados.
    function mostrarNombres() {
        lista.innerHTML = ""; // Limpiamos la lista antes de agregar los nombres para evitar duplicados.

        // Recorremos el array `nombres` y agregamos cada nombre como un nuevo elemento de lista (`<li>`).
        nombres.forEach(nombre => {
            const li = document.createElement("li"); // Creamos un nuevo elemento de lista.
            li.textContent = nombre; // Le asignamos el texto del nombre ingresado.
            lista.appendChild(li); // Agregamos el `<li>` a la lista `<ul id="listaAmigos">`.
        });
    }

    // Función para agregar un nuevo nombre a la lista.
    function agregarAmigo() {
        const nombre = input.value.trim(); // Obtenemos el valor ingresado en el input y eliminamos espacios en blanco.

        if (nombre !== "") { // Verificamos que el usuario haya ingresado un nombre válido.
            nombres.push(nombre); // Agregamos el nombre al array `nombres`.
            mostrarNombres(); // Llamamos a la función para actualizar la lista en pantalla.
            input.value = ""; // Limpiamos el campo de entrada después de agregar un nombre.
        } else {
            alert("Por favor, ingresa un nombre válido."); // Si el usuario no ingresó un nombre, mostramos una alerta.
        }
    }

    // Función para seleccionar un amigo secreto de la lista.
    function sortearAmigo() {
        if (nombres.length === 0) { // Verificamos si hay nombres en la lista antes de sortear.
            alert("No hay nombres en la lista para sortear."); // Si no hay nombres, mostramos una alerta.
            return; // Salimos de la función para evitar errores.
        }

        // Generamos un índice aleatorio dentro del rango del array `nombres`.
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombreSorteado = nombres[indiceAleatorio]; // Seleccionamos el nombre correspondiente al índice aleatorio.

        // Mostramos el resultado en el elemento `resultado` como un subtítulo con el nombre seleccionado.
        resultado.innerHTML = `<h2>El amigo secreto es: <span>${nombreSorteado}</span></h2>`;
    }

    // Asignamos eventos a los botones para que ejecuten las funciones cuando el usuario haga clic.
    buttonAdd.addEventListener("click", agregarAmigo); // Cuando se haga clic en "Añadir", ejecutamos `agregarAmigo()`.
    buttonSort.addEventListener("click", sortearAmigo); // Cuando se haga clic en "Sortear amigo", ejecutamos `sortearAmigo()`.

});