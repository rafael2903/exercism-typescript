// Solution 2

type Planet =
  | 'earth'
  | 'mercury'
  | 'venus'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'

const planetsOrbitalPeriod: Record<Planet, number> = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

export function age(planet: Planet, seconds: number): number {
  const SECONDS_IN_AN_EARTH_YEAR = 31_557_600
  const earthYears = seconds / SECONDS_IN_AN_EARTH_YEAR
  const age = earthYears / planetsOrbitalPeriod[planet]

  return Number(age.toFixed(2))
}
