import { useCallback, useState } from 'react'

export const useComponentSize = () => {
  const [size, setSize] = useState<{ width: number; height: number } | null>(null)

  const onLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout
    setSize({ width, height })
  }, [])

  return [size, onLayout]
}
