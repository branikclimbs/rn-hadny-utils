export const getHeightFromRatio = (length: number, ratio: number): number => {
  const height = length / Math.sqrt(Math.pow(ratio, 2) + 1)
  return Math.round(height)
}

export const getWidthFromRatio = (length: number, ratio: number): number => {
  const width = length / Math.sqrt(1 / (Math.pow(ratio, 2) + 1))
  return Math.round(width)
}

const gcd = (a: number, b: number): number => {
  return b ? gcd(b, a % b) : a
}

export const getAspectRatio = (width: number, height: number): { w: number; h: number } => {
  const divisor = gcd(width, height)

  return { w: width / divisor, h: height / divisor }
}

// TODO: get aspect ratio from percentage eg: 75% = 3:4 (https://www.inchcalculator.com/ratio-percentage-calculator/)
