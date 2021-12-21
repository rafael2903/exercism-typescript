// Solution 3

export class Clock {
  dateObject: Date

  constructor(hour: number, minute: number = 0) {
    const dateObject = new Date()
    dateObject.setHours(hour, minute)
    this.dateObject = dateObject
  }

  public toString(): string {
    return this.dateObject.toTimeString().slice(0, 5)
  }

  public plus(minutes: number): Clock {
    const totalMinutes = this.dateObject.getMinutes() + minutes
    this.dateObject.setMinutes(totalMinutes)
    return this
  }

  public minus(minutes: number): Clock {
    const totalMinutes = this.dateObject.getMinutes() - minutes
    this.dateObject.setMinutes(totalMinutes)
    return this
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }
}
