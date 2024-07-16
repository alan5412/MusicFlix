# MusicFlix

MusicFlix es una Single Page Application (SPA) diseñada para mostrar una colección de canciones de algunas de mis bandas favoritas. Este proyecto se inspiró en el curso ONE de Oracle y Alura, con la intención de emular un poco la idea de Netflix, pero centrado en música.

## Inspiración
Este proyecto fue inspirado en el curso ONE de Oracle y Alura, y tiene como objetivo emular algunas funcionalidades de la interfaz de Netflix, pero aplicadas al mundo de la música. La idea es proporcionar una experiencia visualmente atractiva y funcional similar a la de Netflix, pero enfocada en la música, donde los usuarios pueden explorar y gestionar sus canciones favoritas de una manera sencilla y efectiva.

## Descripción del Proyecto

MusicFlix es una aplicación web que permite a los usuarios explorar canciones de diferentes bandas. La aplicación cuenta con las siguientes características:

- **Banner**: Muestra una canción aleatoria con su imagen y detalles.
- **Header y Footer**: Elementos de navegación y pie de página.
- **Página de Inicio**: Muestra las canciones de cada banda en tarjetas. Cada tarjeta permite:
  - Eliminar la canción.
  - Editar la información de la canción.
  - Acceder al video musical.
- **Página de Formulario**: Permite agregar nuevas canciones a la aplicación.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **Chakra UI**: Biblioteca de componentes para React que permite una rápida y accesible construcción de interfaces de usuario.
- **React Router**: Para la navegación en la SPA.
- **React Hooks**: Uso de `useState`, `useContext`, y otros hooks para manejar el estado y la lógica de la aplicación.
- **Vite**: Herramienta de construcción rápida y ligera para proyectos de frontend.

## Estructura del Proyecto

- **Banner**: Muestra información de una canción aleatoria.
- **Header**: Navegación principal de la aplicación.
- **Footer**: Pie de página con información adicional.
- **Página de Inicio**: Contiene las tarjetas de canciones, agrupadas por bandas. Permite interactuar con cada tarjeta para editar, eliminar o ver el video musical.
- **Página de Formulario**: Permite a los usuarios agregar nuevas canciones a la aplicación mediante un formulario.

## Funcionalidades

1. **Eliminar Canción**: Cada tarjeta de canción tiene un botón que permite eliminar la canción de la lista.
2. **Editar Información**: Cada tarjeta de canción tiene un botón para editar la información de la canción. Al hacer clic, se abre un modal que permite modificar los detalles de la canción.
3. **Acceder al Video Musical**: Cada tarjeta de canción tiene un botón que redirige al usuario al URL del video musical.
4. **Agregar Nueva Canción**: En la página del formulario, los usuarios pueden agregar nuevas canciones proporcionando el nombre, banda, álbum y URLs de la imagen y del video.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio.
   ```sh
   git clone https://github.com/tu_usuario/MusicFlix.git
