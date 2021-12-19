// Solution 3

interface IDnDCharacter {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

export class DnDCharacter implements IDnDCharacter {
  readonly strength = DnDCharacter.generateAbilityScore()
  readonly dexterity = DnDCharacter.generateAbilityScore()
  readonly constitution = DnDCharacter.generateAbilityScore()
  readonly intelligence = DnDCharacter.generateAbilityScore()
  readonly wisdom = DnDCharacter.generateAbilityScore()
  readonly charisma = DnDCharacter.generateAbilityScore()
  readonly hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)

  private static getRandomIntInclusive(min: number = 1, max: number = 6) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  public static generateAbilityScore(): number {
    const diceValues = [...Array(4)].map(() =>
      DnDCharacter.getRandomIntInclusive()
    )
    const minDice = Math.min(...diceValues)
    const largestThreeDice = diceValues.filter((dice) => dice != minDice)

    return largestThreeDice.reduce((acc, value) => {
      return acc + value
    })
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
