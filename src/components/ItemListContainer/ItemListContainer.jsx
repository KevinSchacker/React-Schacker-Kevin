import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
  <h2>¡Bienvenido a nuestra tienda en línea!</h2>
  <h3>¡Pronto tendremos nuestros Productos!</h3>
  <div className="loading-animation">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
  );
};

export default ItemListContainer;