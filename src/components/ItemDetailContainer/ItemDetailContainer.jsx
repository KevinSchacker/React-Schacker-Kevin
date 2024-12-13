import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../firebase/db'
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    getProductById(itemId)
      .then(fetchedProduct => {
        setProduct(fetchedProduct)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching product details:', error)
        setLoading(false)
      })
  }, [itemId])

  if (loading) {
    return <div className="item-detail-container"><p className="loading-message">Cargando detalle del producto...</p></div>
  }

  if (!product) {
    return <div className="item-detail-container"><p className="error-message">Producto no encontrado</p></div>
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  )
}