import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        aria-label="Buscar productos"
      />
      <button type="submit" className="search-button" aria-label="Realizar búsqueda">
        <i className="fas fa-search"></i>
      </button>
    </form>
  )
}