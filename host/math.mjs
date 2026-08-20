export const add = (left, right) => left + right
export const subtract = (left, right) => left - right
export const multiply = (left, right) => left * right
export const divide = (left, right) => left / right
export const power = (base, exponent) => base ** exponent

export const square = (value) => value ** 2
export const cube = (value) => value ** 3
export const reciprocal = (value) => 1 / value
export const squareRoot = (value) => Math.sqrt(value)
export const cubeRoot = (value) => Math.cbrt(value)
export const exponential = (value) => Math.exp(value)
export const tenPower = (value) => 10 ** value
export const naturalLog = (value) => Math.log(value)
export const log10 = (value) => Math.log10(value)

export const factorial = (value) => {
  if (!Number.isInteger(value) || value < 0 || value > 170) return Number.NaN
  let result = 1
  for (let current = 2; current <= value; current += 1) result *= current
  return result
}

const radians = (degrees) => degrees * Math.PI / 180

export const sineRadians = (value) => Math.sin(value)
export const cosineRadians = (value) => Math.cos(value)
export const tangentRadians = (value) => Math.tan(value)
export const sineDegrees = (value) => Math.sin(radians(value))
export const cosineDegrees = (value) => Math.cos(radians(value))
export const tangentDegrees = (value) => Math.tan(radians(value))
export const sinh = (value) => Math.sinh(value)
export const cosh = (value) => Math.cosh(value)
export const tanh = (value) => Math.tanh(value)
export const euler = (_unit) => Math.E
export const pi = (_unit) => Math.PI
