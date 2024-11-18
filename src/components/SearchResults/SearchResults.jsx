import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import NotFound from '../NotFound/NotFound'
import './SearchResults.css'

const searchProducts = async (query) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
  const data = await response.json()
  return data.products
}

export default function SearchResults() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { searchTerm } = useParams()

  useEffect(() => {
    setLoading(true)
    searchProducts(searchTerm)
      .then(searchResults => {
        setProducts(searchResults)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error searching products:', error)
        setLoading(false)
      })
  }, [searchTerm])

  if (loading) {
    return <p className="loading-message">Buscando productos...</p>
  }

  if (products.length === 0) {
    return <NotFound message={`No se encontraron productos para "${searchTerm}"`} />
  }

  return (
    <div className="search-results">
      <h2>Resultados de búsqueda para: {searchTerm}</h2>
      <ItemList products={products} />
    </div>
  )
}