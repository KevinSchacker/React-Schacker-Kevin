import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import './Cart.css'

export default function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext)
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>¿Por qué no agregas algunos productos?</p>
        <Link to="/" className="continue-shopping">Continuar comprando</Link>
      </div>
    )
  }

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button 
              onClick={() => removeItem(item.id)} 
              className="remove-item"
              aria-label="Eliminar item"
            >
              <Trash2 className="trash-icon" />
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p className="total-price">Total: ${getTotalPrice()}</p>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-cart-button">
            Vaciar carrito
          </button>
          <button onClick={handleCheckout} className="checkout-button">
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  )
}