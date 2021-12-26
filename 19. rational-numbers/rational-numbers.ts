export class Rational {
  constructor(readonly numerator: number, readonly denominator: number) {}

  static gcd(a: number, b: number): number {
    if (a < 0) a = Math.abs(a)
    if (b < 0) b = Math.abs(b)

    if (a == 0) return b
    if (b == 0) return a
    if (a == b) return a

    if (a > b) return this.gcd(a - b, b)

    return this.gcd(a, b - a)
  }

  add(operand: Rational) {
    const numerator =
      this.numerator * operand.denominator +
      operand.numerator * this.denominator
    const denominator = this.denominator * operand.denominator

    return new Rational(numerator, denominator).reduce()
  }

  sub(operand: Rational) {
    const opposedOperand = new Rational(-operand.numerator, operand.denominator)

    return this.add(opposedOperand)
  }

  mul(operand: Rational) {
    let numerator = this.numerator * operand.numerator
    let denominator = this.denominator * operand.denominator

    return new Rational(numerator, denominator).reduce()
  }

  div(operand: Rational) {
    const invertedOperand = new Rational(operand.denominator, operand.numerator)

    return this.mul(invertedOperand)
  }

  abs() {
    const absoluteNumerator = Math.abs(this.numerator)
    const absoluteDenominator = Math.abs(this.denominator)

    return new Rational(absoluteNumerator, absoluteDenominator)
  }

  exprational(power: number) {
    const poweredNumerator = this.numerator ** power
    const poweredDenominator = this.denominator ** power

    return new Rational(poweredNumerator, poweredDenominator)
  }

  expreal(base: number) {
    if (this.denominator == 2) return Math.sqrt(base ** this.numerator)
    if (this.denominator == 3) return Math.cbrt(base ** this.numerator)
    return Math.pow(base, this.numerator / this.denominator)
  }

  reduce() {
    const gcd = Rational.gcd(this.numerator, this.denominator)
    let reducedNumerator = this.numerator / gcd
    let reducedDenominator = this.denominator / gcd

    if (reducedDenominator < 0) {
      reducedNumerator *= -1
      reducedDenominator *= -1
    }

    return new Rational(reducedNumerator, reducedDenominator)
  }
}
