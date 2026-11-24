import { useState } from 'react'

export function useFavorites() {
  const [ids, setIds] = useState<string[]>([])

  const toggle = (id: string) => {
    setIds((prev) => {
      const next = prev.filter(item => item !== id)

      if (next.length === prev.length)
        next.push(id)

      return next
    })
  }

  const clear = () => {
    setIds([])
  }

  return { ids, toggle, clear }
}
