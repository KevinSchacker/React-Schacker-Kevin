import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import NotFound from '../NotFound/NotFound'
import './ItemListContainer.css'

const getProducts = async (categoryId) => {
  let url = 'https://dummyjson.com/products'
  if (categoryId) {
    url += `/category/${categoryId}`
  }
  const response = await fetch(url)
  const data = await response.json()
  return data.products
}

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState('default')
  const [notFound, setNotFound] = useState(false)
  const { categoryId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    setNotFound(false)
    getProducts(categoryId)
      .then(fetchedProducts => {
        if (fetchedProducts.length === 0 && categoryId) {
          setNotFound(true)
        } else {
          setProducts(fetchedProducts)
        }
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
        setLoading(false)
        setNotFound(true)
      })
  }, [categoryId])

  const sortProducts = (order) => {
    let sortedProducts = [...products]
    switch (order) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating)
        break
      default:
        // No sorting needed for default case
        break
    }
    setProducts(sortedProducts)
  }

  const handleSortChange = (e) => {
    const newSortOrder = e.target.value
    setSortOrder(newSortOrder)
    sortProducts(newSortOrder)
  }

  if (notFound) {
    return <NotFound />
  }

  return (
    <div className="item-list-container">
      {greeting && <h2>{greeting}</h2>}
      <h3>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h3>
      
      {!loading && products.length > 0 && (
        <div className="sort-container">
          <label htmlFor="sort-select">Ordenar por:</label>
          <select id="sort-select" value={sortOrder} onChange={handleSortChange}>
            <option value="default">Predeterminado</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
            <option value="rating">Destacados</option>
          </select>
        </div>
      )}

      {loading ? (
        <p className="loading-message">Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  )
}