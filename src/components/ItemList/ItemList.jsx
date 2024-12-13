import React from 'react'
import { Link } from 'react-router-dom'
import './ItemList.css'

export default function ItemList({ products }) {
  return (
    <div className="items-grid">
      {products.map(product => (
        <div key={product.id} className="item-card">
          <Link to={`/item/${product.id}`} className="item-link">
            <div className="item-image-container">
              <img 
                src={product.img} 
                alt={product.name} 
                className="item-image"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/placeholder.svg?height=300&width=300'
                }}
              />
            </div>
            <div className="item-info">
              <h3 className="item-name">{product.name}</h3>
              <p className="item-description">{product.description}</p>
              <p className="item-price">${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}