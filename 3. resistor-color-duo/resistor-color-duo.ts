// Solution 2

enum Colors {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

type Color = keyof typeof Colors

export function decodedValue([firstColor, secondColor]: Color[]): number {
  if (!secondColor) throw new Error('At least two colors must be specified')

  return parseInt(`${Colors[firstColor]}${Colors[secondColor]}`)
}
