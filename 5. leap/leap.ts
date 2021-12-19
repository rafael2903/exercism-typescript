// Solution 2

const isDivisibleBy4 = (number: number): boolean => !(number % 4)
const isDivisibleBy400 = (number: number): boolean => !(number % 400)
const isDivisibleBy100 = (number: number): boolean => !(number % 100)

export function isLeap(year: number): boolean {
  if (isDivisibleBy4(year) && isDivisibleBy400(year)) return true
  if (isDivisibleBy4(year) && isDivisibleBy100(year)) return false
  return isDivisibleBy4(year)
}
