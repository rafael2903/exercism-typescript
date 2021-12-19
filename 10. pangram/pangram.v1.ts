// Solution 1

export function isPangram(sentence: string): boolean {
  const lowerCaseSentence = sentence.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (const letter of alphabet) {
    if (lowerCaseSentence.indexOf(letter) === -1) return false
  }

  return true
}
