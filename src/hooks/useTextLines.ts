import { useCallback, useState } from 'react'

export const useTextLines = () => {
  const [lines, setLines] = useState<number | null>(null)

  const onTextLayout = useCallback((e) => {
    setLines(e.nativeEvent.lines.length)
  }, [])

  return [lines, onTextLayout]
}
