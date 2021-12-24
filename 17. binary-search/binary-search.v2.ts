export function find(
  haystack: number[],
  needle: number,
  startIndex = 0,
  endIndex = haystack.length - 1
): number | undefined {
  if (startIndex > endIndex) throw new Error('Value not in array')

  const middleIndex = Math.floor((startIndex + endIndex) / 2)

  if (needle === haystack[middleIndex]) return middleIndex

  if (needle < haystack[middleIndex])
    return find(haystack, needle, startIndex, middleIndex - 1)

  if (needle > haystack[middleIndex])
    return find(haystack, needle, middleIndex + 1, endIndex)
}
