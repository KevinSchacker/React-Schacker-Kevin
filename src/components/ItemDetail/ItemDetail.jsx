import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import './ItemDetail.css'

export default function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(product.thumbnail)

  const handleAddToCart = (count) => {
    setQuantity(count)
    addToCart(product, count)
  }

  return (
    <div className="item-detail">
      <div className="product-images">
        <div className="main-image">
          <img src={selectedImage} alt={product.title} />
        </div>
        <div className="thumbnail-gallery">
          {[product.thumbnail, ...product.images].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} view ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={selectedImage === image ? 'selected' : ''}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <p className="brand">Marca: {product.brand}</p>
        <p className="stock">Stock: {product.stock}</p>
        <div className="add-to-cart-section">
          <ItemCount initial={1} stock={product.stock} onAdd={handleAddToCart} />
          {quantity > 0 && (
            <p className="added-to-cart">Has agregado {quantity} unidades al carrito</p>
          )}
        </div>
      </div>
    </div>
  )
}