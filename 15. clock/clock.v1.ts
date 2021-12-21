// Solution 1

export class Clock {
  private static MINUTES_IN_A_HOUR = 60
  private static HOURS_IN_A_DAY = 24
  hour: number
  minute: number

  constructor(hour: number, minute: number = 0) {
    this.hour = hour
    this.minute = minute
  }

  private getAdditionalHours(minutes: number) {
    let additionalHours =
      (minutes / Clock.MINUTES_IN_A_HOUR) % Clock.HOURS_IN_A_DAY

    if (additionalHours < 0) additionalHours -= 1

    additionalHours = Math.trunc(additionalHours) % Clock.HOURS_IN_A_DAY

    return additionalHours
  }

  private getTime() {
    const additionalHours = this.getAdditionalHours(this.minute)

    let hour = Clock.HOURS_IN_A_DAY + (this.hour % Clock.HOURS_IN_A_DAY)
    hour = (hour + additionalHours) % Clock.HOURS_IN_A_DAY

    const minute =
      (Clock.MINUTES_IN_A_HOUR + (this.minute % Clock.MINUTES_IN_A_HOUR)) %
      Clock.MINUTES_IN_A_HOUR

    return [hour, minute]
  }

  public toString(): string {
    const numberToTimeString = (number: number) =>
      number.toString().padStart(2, '0')

    const [hour, minute] = this.getTime()

    const stringHour = numberToTimeString(hour)
    const stringMinute = numberToTimeString(minute)

    return `${stringHour}:${stringMinute}`
  }

  private updateTime(minutes: number) {
    this.minute = minutes % Clock.MINUTES_IN_A_HOUR
    this.hour += Math.trunc(minutes / Clock.MINUTES_IN_A_HOUR)
  }

  public plus(minutes: number): Clock {
    const totalMinutes = this.minute + minutes
    this.updateTime(totalMinutes)
    return this
  }

  public minus(minutes: number): Clock {
    const totalMinutes = this.minute - minutes
    this.updateTime(totalMinutes)
    return this
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }
}
