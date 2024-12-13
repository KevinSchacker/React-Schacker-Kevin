import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { searchProducts } from '../../firebase/db'
import './SearchResults.css'

export default function SearchResults() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { searchTerm } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    searchProducts(searchTerm)
      .then(searchResults => {
        setProducts(searchResults)
        setLoading(false)
        if (searchResults.length === 0) {
          navigate('/not-found', { state: { message: `No se encontraron productos para "${searchTerm}"` } })
        }
      })
      .catch(error => {
        console.error('Error searching products:', error)
        setLoading(false)
        navigate('/not-found', { state: { message: 'Error al buscar productos' } })
      })
  }, [searchTerm, navigate])

  if (loading) {
    return <div className="loading">Buscando productos...</div>
  }

  return (
    <div className="search-results">
      <h2>Resultados de búsqueda para: {searchTerm}</h2>
      <ItemList products={products} />
    </div>
  )
}