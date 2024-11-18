import React from 'react'
import { Link } from 'react-router-dom'
import './ItemList.css'

export default function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.length === 0 ? (
        <p>No se encontraron productos en esta categoría.</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="price">Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`} className="view-detail-btn">Ver detalle</Link>
          </div>
        ))
      )}
    </div>
  )
}