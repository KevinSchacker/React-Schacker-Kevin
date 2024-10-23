import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/src/img/logo.png" alt="Logo de la tienda" />
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/">Inicio</a>
          <a href="/productos">Celulares</a>
          <a href="/sobre-nosotros">Computadoras</a>
          <a href="/Accesorios">Accesorios</a>
          <a href="/contacto">Contacto</a>
        </div>
        <div className="navbar-right">
          <CartWidget />
          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}