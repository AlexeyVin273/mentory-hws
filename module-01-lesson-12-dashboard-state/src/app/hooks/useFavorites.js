import { useState } from 'react'

export function useFavorites() {
  const [ids, setIds] = useState([])

  const toggle = id => {
    setIds(previous => previous.includes(id)
      ? previous.filter(item => item !== id)
      : [...previous, id])
  }

  const clear = () => setIds([])

  return { ids, toggle, clear }
}
