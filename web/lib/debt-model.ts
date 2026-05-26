export type DebtScenario = {
  principal: number
  annualRate: number
  years: number
}

export function annualDebtService(input: DebtScenario) {
  const r = input.annualRate
  const n = input.years
  if (r === 0) return input.principal / n
  return input.principal * (r / (1 - Math.pow(1 + r, -n)))
}

export function totalInterest(input: DebtScenario) {
  return annualDebtService(input) * input.years - input.principal
}

export const townSquareDebtScenario: DebtScenario = {
  principal: 2625000,
  annualRate: 0.035,
  years: 15
}
