import React from 'react'
import { useCart } from '../../context/CartContext'
import './CartWidget.css'

export default function CartWidget() {
  const { cartItemsCount } = useCart()

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      {cartItemsCount > 0 && <span className="cart-items">{cartItemsCount}</span>}
    </div>
  )
}