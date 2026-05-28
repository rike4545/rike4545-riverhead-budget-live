export type RetirementRiskFactor = {
  title: string
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Unvalidated'
  description: string
  whyItMatters: string
  operationalImpact: string
  fiscalImpact: string
}

export const retirementRiskFactors: RetirementRiskFactor[] = [
  {
    title: 'Backfill risk',
    riskLevel: 'High',
    description: 'If critical employees retire and the Town refills those positions, projected savings may shrink substantially.',
    whyItMatters: 'Municipal governments often cannot permanently eliminate operational positions tied to public safety, infrastructure, utilities, inspections, finance, or administration.',
    operationalImpact: 'Service levels may require replacement hiring even after retirements occur.',
    fiscalImpact: 'Actual savings may only equal the wage differential between the retiring employee and the replacement employee rather than the full salary removed from payroll.',
  },
  {
    title: 'Overtime substitution risk',
    riskLevel: 'Moderate',
    description: 'Reduced staffing levels may increase overtime requirements in highway, sewer, water, emergency response, inspections, and public works operations.',
    whyItMatters: 'Municipal overtime frequently expands when experienced workers leave faster than staffing structures adapt.',
    operationalImpact: 'Departments may rely on extended shifts, call-ins, or temporary staffing.',
    fiscalImpact: 'Overtime growth can offset projected payroll savings.',
  },
  {
    title: 'Leave payout exposure',
    riskLevel: 'High',
    description: 'Vacation, sick leave, and comp-time payouts can create large one-time expenditures during retirement waves.',
    whyItMatters: 'Accrued leave balances are often underestimated in early retirement modeling.',
    operationalImpact: 'Large payout obligations may reduce operational flexibility during the transition period.',
    fiscalImpact: 'The Town may need reserve usage or temporary financing to absorb payout spikes.',
  },
  {
    title: 'Institutional knowledge loss',
    riskLevel: 'Moderate',
    description: 'Senior personnel often hold operational, technical, and regulatory knowledge that is difficult to replace quickly.',
    whyItMatters: 'Water, sewer, engineering, grant administration, finance, and infrastructure functions frequently depend on experienced staff.',
    operationalImpact: 'Projects, reporting, permitting, or infrastructure operations may slow during turnover periods.',
    fiscalImpact: 'Consulting costs, delays, or inefficiencies can reduce net savings.',
  },
  {
    title: 'Pension timing mismatch',
    riskLevel: 'Unvalidated',
    description: 'Pension contribution savings may not occur in the same fiscal period as the retirements themselves.',
    whyItMatters: 'Employer pension contribution rates are actuarially driven and may lag staffing changes.',
    operationalImpact: 'Departments may continue operating under legacy pension cost structures for multiple cycles.',
    fiscalImpact: 'Near-term budget relief may be overstated.',
  },
  {
    title: 'Structural versus temporary savings',
    riskLevel: 'Moderate',
    description: 'Temporary vacancies do not always become permanent staffing reductions.',
    whyItMatters: 'Municipal governments frequently restore positions after service pressure emerges.',
    operationalImpact: 'Operational demands may drive future rehiring.',
    fiscalImpact: 'Projected long-term savings may not persist.',
  },
]

export const retirementProgramAssessment = {
  classification: 'UNVALIDATED PROJECTED SAVINGS',
  explanation: 'The fiscal impact of the retirement incentive program cannot be validated without staffing assumptions, payroll tables, leave payout estimates, overtime trends, pension timing analysis, and replacement hiring plans.',
  requiredData: [
    'eligible employee counts',
    'department staffing plans',
    'replacement hiring assumptions',
    'leave payout liabilities',
    'overtime trend history',
    'pension contribution timing',
    'service-level impact analysis',
  ],
}
