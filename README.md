# React + Vite
Desarrollo Web - REACT

# Sobre el Autor

**Kevin Leonardo Schacker**

Soy profesor de Informática y estudiante de programación, vivo en la ciudad de Oberá, Misiones, Argentina, con un fuerte enfoque en el desarrollo web y la enseñanza de tecnología. Actualmente, soy facilitador en la Escuela de Robótica, donde enseño a estudiantes sobre robótica y programación. Además, imparto clases de Introducción a la Programación en Silicon Misiones.

Mi pasión por la tecnología y la educación me ha llevado a explorar y desarrollar habilidades en diversas áreas del desarrollo web, como HTML, CSS, JavaScript y ahora React.

## Descripción del Proyecto
PC Service es una tienda en línea especializada en productos de tecnología, incluyendo celulares, computadoras y equipos de seguridad. Este proyecto fue desarrollado utilizando React y Vite, implementando las mejores prácticas de desarrollo web moderno.

## Características Principales

### Navegación y Categorías
- Barra de navegación fija con logo de la tienda
- Categorías principales: Celulares, Computadoras, Seguridad
- Sistema de navegación responsive para dispositivos móviles

### Búsqueda de Productos
- Barra de búsqueda integrada en la navegación
- Búsqueda en tiempo real de productos
- Página de resultados de búsqueda con filtrado
- Redirección a NotFound cuando no se encuentran resultados

### Catálogo de Productos
- Vista de lista de productos con diseño en grid
- Filtrado por categorías
- Ordenamiento por:
  - Precio (menor a mayor)
  - Precio (mayor a menor)
  - Destacados

### Detalles de Producto
- Vista detallada de cada producto
- Galería de imágenes con thumbnail
- Información completa del producto
- Sistema de contador para agregar al carrito
- Integración con el carrito de compras

### Carrito de Compras
- Indicador de cantidad de productos en el ícono del carrito
- Actualización en tiempo real del contador

### Componentes Adicionales
- Footer con información de contacto
- Página 404 personalizada para rutas no existentes
- Diseño responsive para todos los componentes

## Tecnologías utilizadas

- [React 18](https://reactjs.org/docs/getting-started.html)
- [React Router 6](https://reactrouter.com/en/main)
- [Firebase 9](https://firebase.google.com/docs)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Dependencias principales

- react
- react-dom
- react-router-dom
- firebase
- lucide-react (para íconos)

## Estructura del proyecto

```
src/
|-- components/
|   |-- Cart/
|   |-- Checkout/
|   |-- Footer/
|   |-- ItemDetail/
|   |-- ItemList/
|   |-- ItemListContainer/
|   |-- NavBar/
|   |-- NotFound/
|   |-- SearchBar/
|   |-- SearchResults/
|-- context/
|   |-- CartContext.jsx
|-- firebase/
|   |-- config.js
|   |-- db.js
|-- App.jsx
|-- index.js
```

## Configuración del proyecto

1. Clona el repositorio:
   ```
   git clone https://github.com/KevinSchacker/React-Schacker-Kevin.git
   
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un proyecto en Firebase y obtén las credenciales de configuración.

4. Crea un archivo `.env` en la raíz del proyecto y agrega tus credenciales de Firebase:
   ```
   REACT_APP_FIREBASE_API_KEY=tu_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=tu_app_id
   ```

5. Inicia la aplicación en modo de desarrollo:
   ```
   npm start
   ```

## Scripts disponibles

- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm build`: Construye la aplicación para producción.
- `npm test`: Ejecuta las pruebas.
- `npm eject`: Expone las configuraciones de Create React App.

## Despliegue

Para desplegar la aplicación, puedes utilizar servicios como Vercel, Netlify o Firebase Hosting. Asegúrate de configurar las variables de entorno en tu plataforma de despliegue.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un pull request.

**Estado del Proyecto**
En desarrollo activo - Versión 1.2.0