export type RetirementScenario = {
  name: string
  uptakeRate: number
  eligibleEmployees: number
  averageSalary: number
  averageLeavePayout: number
  averageIncentive: number
  replacementSalaryRatio: number
  vacancyMonths: number
  overtimeBackfillRate: number
}

export function modelRetirementScenario(input: RetirementScenario) {
  const retirees = Math.round(input.eligibleEmployees * input.uptakeRate)
  const grossPayrollSavings = retirees * input.averageSalary
  const leavePayoutCost = retirees * input.averageLeavePayout
  const incentiveCost = retirees * input.averageIncentive
  const vacancySavings = grossPayrollSavings * (input.vacancyMonths / 12)
  const replacementCost = retirees * input.averageSalary * input.replacementSalaryRatio * ((12 - input.vacancyMonths) / 12)
  const overtimeBackfillCost = grossPayrollSavings * input.overtimeBackfillRate
  const yearOneNetImpact = vacancySavings + (grossPayrollSavings - replacementCost) - leavePayoutCost - incentiveCost - overtimeBackfillCost

  return {
    retirees,
    grossPayrollSavings,
    leavePayoutCost,
    incentiveCost,
    vacancySavings,
    replacementCost,
    overtimeBackfillCost,
    yearOneNetImpact,
  }
}

export const retirementScenarios: RetirementScenario[] = [
  { name: 'Conservative uptake', uptakeRate: 0.05, eligibleEmployees: 80, averageSalary: 92000, averageLeavePayout: 28000, averageIncentive: 15000, replacementSalaryRatio: 0.78, vacancyMonths: 3, overtimeBackfillRate: 0.04 },
  { name: 'Moderate uptake', uptakeRate: 0.15, eligibleEmployees: 80, averageSalary: 92000, averageLeavePayout: 28000, averageIncentive: 15000, replacementSalaryRatio: 0.78, vacancyMonths: 4, overtimeBackfillRate: 0.08 },
  { name: 'High uptake', uptakeRate: 0.25, eligibleEmployees: 80, averageSalary: 92000, averageLeavePayout: 28000, averageIncentive: 15000, replacementSalaryRatio: 0.78, vacancyMonths: 5, overtimeBackfillRate: 0.14 }
]
