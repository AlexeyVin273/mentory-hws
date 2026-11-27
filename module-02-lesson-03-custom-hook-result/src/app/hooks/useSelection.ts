import { useState } from 'react'

export type UseSelectionResult = {
  selectedId: string | null
  select: (id: string) => void
  reset: () => void
}

export function useSelection(): UseSelectionResult {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const select = (id: string) => {
    setSelectedId(id)
  }

  const reset = () => {
    setSelectedId(null)
  }

  return { selectedId, select, reset }
}
