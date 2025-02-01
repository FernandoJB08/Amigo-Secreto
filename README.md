# 🎁 Amigo Secreto

¡Bienvenido a **Amigo Secreto**! 🎉  
Este es un proyecto interactivo que permite a los usuarios ingresar nombres de amigos y realizar un sorteo aleatorio para asignar a cada persona un amigo secreto.

## 🚀 Características

✔️ Permite ingresar nombres en una lista dinámica.  
✔️ Muestra los nombres ingresados en pantalla.  
✔️ Realiza un sorteo aleatorio y muestra el resultado.  
✔️ Diseño responsivo y fácil de usar.  
✔️ No guarda los datos entre sesiones para empezar un nuevo juego cada vez que se recarga la página.  

## 🛠️ Tecnologías utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- **HTML5** → Para la estructura de la aplicación.
- **CSS3** → Para los estilos y diseño responsivo.
- **JavaScript (ES6+)** → Para la lógica del sorteo y la manipulación del DOM.

## 📝 Descripción del código
El proyecto está compuesto por tres archivos principales:

## 📌 index.html
Este archivo define la estructura de la página, incluyendo:

Un campo de entrada (<input>) donde el usuario puede escribir nombres.
Un botón "Añadir" para agregar nombres a la lista.
Un botón "Sortear amigo" que elige un nombre aleatorio.
Una lista (<ul>) donde se muestran los nombres ingresados.
Un área donde se muestra el nombre del amigo secreto después del sorteo.

## 📌 style.css
Este archivo contiene los estilos de la página, asegurando que la interfaz sea visualmente atractiva y adaptable a distintos tamaños de pantalla.

## 📌 app.js
Aquí se encuentra la lógica principal de la aplicación:

agregarAmigo() → Obtiene el nombre ingresado y lo agrega a la lista en pantalla.
mostrarNombres() → Refresca la lista de nombres en el DOM para evitar duplicaciones.
sortearAmigo() → Toma un nombre aleatorio de la lista y lo muestra como el amigo secreto.
Borra los datos almacenados en localStorage al cargar la página, asegurando que la lista siempre empiece vacía.
