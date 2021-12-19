// Solution 1

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

export function decodedValue(colors: (keyof typeof Colors)[]): number {
  const [firstColor, secondColor] = colors
  return Colors[firstColor] * 10 + Colors[secondColor]
}
