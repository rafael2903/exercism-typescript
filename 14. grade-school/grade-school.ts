type Grade = string | number
type Name = string
type GradeList = Name[]
type Roster = Record<Grade, GradeList>

export class GradeSchool {
  private Roster: Roster = {}

  roster(): Roster {
    const rosterDeepCopy = JSON.parse(JSON.stringify(this.Roster))
    return rosterDeepCopy
  }

  add(name: Name, grade: Grade) {
    const roster = this.Roster

    this.removeIfAlreadyExists(name)

    if (grade in roster) {
      roster[grade].push(name)
      roster[grade].sort()
    } else roster[grade] = [name]
  }

  grade(grade: Grade): GradeList {
    const roster = this.Roster
    return [...(roster[grade] || [])]
  }

  private removeIfAlreadyExists(studentName: Name) {
    const roster = this.Roster
    Object.keys(roster).forEach(
      (grade) =>
        (roster[grade] = roster[grade].filter((name) => studentName !== name))
    )
  }
}
