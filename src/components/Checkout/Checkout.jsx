import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './Checkout.css'

export default function Checkout() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el pago
    alert('¡Gracias por tu compra!')
    clearCart() // Limpiamos el carrito después de la compra
    navigate('/') // Redirigimos al inicio
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No hay items para procesar</h2>
        <button onClick={() => navigate('/')} className="return-button">
          Volver al inicio
        </button>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="total">
          <strong>Total:</strong> ${getTotalPrice()}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <h3>Información de pago</h3>
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="card">Número de tarjeta</label>
          <input type="text" id="card" required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Fecha de expiración</label>
            <input type="text" id="expiry" placeholder="MM/YY" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" required />
          </div>
        </div>
        <button type="submit" className="pay-button">
          Pagar ${getTotalPrice()}
        </button>
      </form>
    </div>
  )
}