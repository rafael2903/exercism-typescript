export function find(
  haystack: number[],
  needle: number,
  startIndex = 0
): number | undefined {
  const haystackLength = haystack.length

  if (!haystackLength) throw new Error('Value not in array')

  const middle = Math.floor(haystackLength / 2)

  if (needle === haystack[middle]) return startIndex + middle

  if (needle > haystack[middle])
    return find(haystack.slice(middle + 1), needle, startIndex + middle + 1)

  if (needle < haystack[middle])
    return find(haystack.slice(0, middle), needle, startIndex)
}
