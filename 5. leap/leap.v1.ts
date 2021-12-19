// Solution 1

export function isLeap(year: number): boolean {
  return !(year % 4) && (!(year % 400) || !!(year % 100))
}
