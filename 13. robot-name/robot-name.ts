// Solution 2

export class Robot {
  name: string
  static usedNames = new Set<string>()

  constructor() {
    this.name = Robot.generateName()
  }

  resetName() {
    this.name = Robot.generateName()
  }

  static releaseNames(): void {
    this.usedNames = new Set()
  }

  private static getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  private static generateRandomLetters() {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const firstLetter = ALPHABET.charAt(this.getRandomIntInclusive(0, 25))
    const secondLetter = ALPHABET.charAt(this.getRandomIntInclusive(0, 25))

    return firstLetter + secondLetter
  }

  private static generateRandomNumbers() {
    const robotNumbers = this.getRandomIntInclusive(0, 999)
    return robotNumbers.toString().padStart(3, '0')
  }

  private static generateRandomName() {
    return this.generateRandomLetters() + this.generateRandomNumbers()
  }

  private static generateName() {
    let randomName: string

    do {
      randomName = this.generateRandomName()
    } while (this.usedNames.has(randomName))

    this.usedNames.add(randomName)

    return randomName
  }
}
