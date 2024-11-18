import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const getProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await response.json()
  return data
}

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    getProductById(itemId)
      .then(product => {
        setProduct(product)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching product details:', error)
        setLoading(false)
      })
  }, [itemId])

  return (
    <div className="item-detail-container">
      {loading ? (
        <p>Cargando detalle del producto...</p>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  )
}