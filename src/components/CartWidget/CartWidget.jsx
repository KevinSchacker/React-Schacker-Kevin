import React from 'react'
import { ShoppingCart } from 'lucide-react'
import './CartWidget.css'

export default function CartWidget() {
  return (
    <div className="cart-widget">
      <ShoppingCart className="cart-icon" />
    </div>
  )
}