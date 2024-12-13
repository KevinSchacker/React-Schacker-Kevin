import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import './ItemCount.css'

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAdd = () => {
    onAdd(count)
  }

  return (
    <div className="item-count">
      <div className="flex items-center justify-between mb-2">
        <Button onClick={decrement} disabled={count === 1}>-</Button>
        <span className="mx-4 text-xl">{count}</span>
        <Button onClick={increment} disabled={count === stock}>+</Button>
      </div>
      <Button onClick={handleAdd} className="w-full" disabled={stock === 0}>
        Seleccionar cantidad
      </Button>
    </div>
  )
}