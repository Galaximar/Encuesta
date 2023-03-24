# Encuesta

Para levantar el proyecto, se debe tener instalado NodeJS.
Instalar dependencias con el comando npm install.
Se necesitas las variables de entorno para conectarse a Firebase:

- VITE_API_KEY
- VITE_AUTH_DOMAIN
- VITE_PROJECT_ID
- VITE_STORAGE_BUCKET
- VITE_MESSAGING_SENDER_ID
- VITE_APP_ID: 1
- VITE_MEASUREMENT_ID

El proyecto consta del home en donde se puede crear una encuesta con un json modificable cargado src/db.
La encuesta posee validaciones de tamaño de caracteres mínimos, máximos, fecha correcta (así como un mask) y correo válido, además del requerimiento o no de los elementos del formulario.
Cuando la encuesta es creada, un modal será mostrado en caso de fallar se notificará al usuario con un modal similar mostrando el error.
En /encuestas se pueden encontrar todas las encuestas creadas con el identificador del nombre del usuario que la creó.
Estilos creados manualmente, así como una lógica del formulario, creando un hook para una fácil utilización de este a largo plazo.
También se creo un hook para detectar si se clickeo fuera de una referencia dada.
Se uso PropTypes en algunos componentes para facilitar su documentación.

[DEPLOY: encuesta-form.vercel.app](https://encuesta-form.vercel.app/)
