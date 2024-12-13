import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../firebase/db'
import './ItemListContainer.css'

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState('default')
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const fetchProducts = async () => {
      try {
        const result = categoryId 
          ? await getProductsByCategory(categoryId)
          : await getProducts()
        setProducts(result)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [categoryId])

  const sortProducts = (order) => {
    const sortedProducts = [...products]
    switch (order) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case 'rating-desc':
        sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      default:
        break
    }
    setProducts(sortedProducts)
  }

  const handleSortChange = (e) => {
    const newSortOrder = e.target.value
    setSortOrder(newSortOrder)
    sortProducts(newSortOrder)
  }

  if (loading) {
    return <div className="loading">Cargando productos...</div>
  }

  return (
    <div className="item-list-container">
      {greeting && <h1 className="greeting">{greeting}</h1>}
      <div className="filters-section">
        <h2 className="category-title">
          {categoryId ? `${categoryId}` : 'Todos los productos'}
        </h2>
        <select 
          value={sortOrder} 
          onChange={handleSortChange}
          className="sort-select"
        >
          <option value="default">Ordenar por...</option>
          <option value="price-asc">Precio: Menor a Mayor</option>
          <option value="price-desc">Precio: Mayor a Menor</option>
          <option value="rating-desc">Mejor Valorados</option>
        </select>
      </div>
      <ItemList products={products} />
    </div>
  )
}