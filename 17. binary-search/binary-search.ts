export function find(haystack: number[], needle: number) {
  let startIndex = 0
  let endIndex = haystack.length - 1

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2)

    if (needle === haystack[middleIndex]) return middleIndex

    if (needle < haystack[middleIndex]) endIndex = middleIndex - 1

    if (needle > haystack[middleIndex]) startIndex = middleIndex + 1
  }

  throw new Error('Value not in array')
}
