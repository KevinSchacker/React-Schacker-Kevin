import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div id="not-found-page">
      <div id="not-found-animation">
        <div id="not-found-magnifier">
          <div id="not-found-glass"></div>
        </div>
        <p id="not-found-emoji">🕵️</p>
      </div>
      <h1 id="not-found-title">Oops, no encontramos el producto que buscas...</h1>
      <p id="not-found-text">
        ¡Intenta buscar en otra categoría o contacta con nosotros si necesitas ayuda!
      </p>
      <button
        id="not-found-button"
        onClick={() => window.history.back()}
      >
        Volver a la tienda
      </button>
    </div>
  );
};

export default NotFound;
