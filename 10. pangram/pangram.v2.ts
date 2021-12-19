// Solution 2

export function isPangram(sentence: string): boolean {
  const loweCaseSentence = sentence.toLowerCase()
  const regexp = /[a-z]/g
  const matchesArray = loweCaseSentence.match(regexp)
  const matchesSet = new Set(matchesArray)
  return matchesSet.size === 26
}
