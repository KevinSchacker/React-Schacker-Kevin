import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { id: 'smartphones', name: 'Celulares' },
    { id: 'laptops', name: 'Computadoras' },
    { id: 'security', name: 'Seguridad' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/img/logo.png" alt="Logo de la tienda" />
        </Link>
        <SearchBar />
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Inicio</Link>
          {categories.map(category => (
            <Link key={category.id} to={`/category/${category.id}`}>{category.name}</Link>
          ))}
        </div>
        <div className="navbar-right">
          <CartWidget />
          <button 
            className="navbar-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}