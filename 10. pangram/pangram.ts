// Solution 3

export function isPangram(sentence: string): boolean {
  const lowerCaseSentence = sentence.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return [...alphabet].every(
    (letter) => lowerCaseSentence.indexOf(letter) !== -1
  )
}
