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

// export class Clock {
//   private static HOURS_IN_A_DAY = 24
//   private static MINUTES_IN_A_HOUR = 60
//   private static SECONDS_IN_A_MINUTE = 60
//   private static SECONDS_IN_A_HOUR =
//     this.MINUTES_IN_A_HOUR * this.SECONDS_IN_A_MINUTE
//   private static SECONDS_IN_A_DAY = this.HOURS_IN_A_DAY * this.SECONDS_IN_A_HOUR

//   hour: number
//   minute: number

//   constructor(hour: number, minute: number = 0) {
//     this.hour = hour
//     this.minute = minute
//   }

//   get totalSeconds(): number {
//     return (
//       this.hour * Clock.SECONDS_IN_A_HOUR +
//       this.minute * Clock.SECONDS_IN_A_MINUTE
//     )
//   }

//   private getTime() {
//     let totalSecondsRolled = this.totalSeconds % Clock.SECONDS_IN_A_DAY
//     if (totalSecondsRolled < 0) totalSecondsRolled += Clock.SECONDS_IN_A_DAY

//     const hour =
//       Math.trunc(totalSecondsRolled / Clock.SECONDS_IN_A_HOUR) %
//       Clock.HOURS_IN_A_DAY

//     const minute =
//       Math.trunc(
//         (totalSecondsRolled % Clock.SECONDS_IN_A_HOUR) /
//           Clock.SECONDS_IN_A_MINUTE
//       ) % Clock.MINUTES_IN_A_HOUR

//     return [hour, minute]
//   }

//   public toString(): string {
//     const numberToTimeString = (number: number) =>
//       number.toString().padStart(2, '0')

//     const [hour, minute] = this.getTime()

//     const stringHour = numberToTimeString(hour)
//     const stringMinute = numberToTimeString(minute)

//     return `${stringHour}:${stringMinute}`
//   }

//   private updateTime(minutes: number) {
//     this.minute = minutes % Clock.MINUTES_IN_A_HOUR
//     this.hour += Math.trunc(minutes / Clock.MINUTES_IN_A_HOUR)
//   }

//   public plus(minutes: number): Clock {
//     const totalMinutes = this.minute + minutes
//     this.updateTime(totalMinutes)
//     return this
//   }

//   public minus(minutes: number): Clock {
//     const totalMinutes = this.minute - minutes
//     this.updateTime(totalMinutes)
//     return this
//   }

//   public equals(other: Clock): boolean {
//     return this.toString() === other.toString()
//   }
// }
