import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './ItemDetail.css'

export default function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useContext(CartContext)

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      addItem(product, quantity)
      alert(`${quantity} ${product.name}(s) agregado(s) al carrito`)
    }
  }

  if (!product) {
    return <div className="loading">Cargando producto...</div>
  }

  return (
    <div className="item-detail">
      <div className="item-detail-image-container">
        <img 
          src={product.img} 
          alt={product.name} 
          className="item-detail-image"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/placeholder.svg?height=500&width=500'
          }}
        />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-title">{product.name}</h2>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">Precio: ${product.price}</p>
        <p className="item-detail-stock">Stock disponible: {product.stock}</p>
        {product.rating && (
          <p className="item-detail-rating">Calificación: {product.rating}/5</p>
        )}
        <div className="quantity-selector">
          <button 
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            className="quantity-button"
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= product.stock}
            className="quantity-button"
          >
            +
          </button>
        </div>
        <button 
          onClick={handleAddToCart} 
          className="add-to-cart-button"
          disabled={product.stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}