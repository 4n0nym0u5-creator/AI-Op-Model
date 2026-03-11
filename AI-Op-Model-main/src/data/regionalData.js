export const regionalConstraints = [
  {
    market: 'Australia',
    regulations: 'APRA rules on security, Privacy Act, new AI rules coming',
    dataResidency: 'Keep data in Australia for regulated work',
    notes: 'Big focus on explaining how AI made decisions',
  },
  {
    market: 'Japan',
    regulations: 'APPI (data protection), FSA guidelines',
    dataResidency: 'Prefer local data storage',
    notes: 'More conservative — quality matters a lot',
  },
  {
    market: 'Singapore',
    regulations: 'MAS guidelines, PDPA, AI Verify framework',
    dataResidency: 'Can move data with safeguards',
    notes: 'Good sandbox for testing new things',
  },
  {
    market: 'Hong Kong',
    regulations: 'PDPO, HKMA guidance, new rules coming',
    dataResidency: 'Flexible',
    notes: 'Lots of brokers — AI for distribution is valuable',
  },
  {
    market: 'Thailand',
    regulations: 'PDPA (2022), digital insurance rules',
    dataResidency: 'Local storage preferred',
    notes: 'Growing AI adoption — customer-facing is hot',
  },
  {
    market: 'New Zealand',
    regulations: 'Privacy Act 2020, RBNZ guidelines',
    dataResidency: 'Mostly follows Australia',
    notes: 'Smaller market — use AU frameworks',
  },
  {
    market: 'South Korea',
    regulations: 'PIPA, credit rules, AI law being developed',
    dataResidency: 'Strict — financial data stays local',
    notes: 'Very digital — people know AI well',
  },
]

export const dataClassification = [
  {
    classification: 'Public',
    approvedTools: 'Any approved tool (Claude Desktop, ChubbGPT, Copilot)',
    restrictions: 'None',
  },
  {
    classification: 'Internal',
    approvedTools: 'Enterprise tools only (through our systems, not the public websites)',
    restrictions: 'No personal info, no customer data',
  },
  {
    classification: 'Confidential',
    approvedTools: 'Enterprise tools with approved connections only',
    restrictions: 'Needs logging and monitoring',
  },
  {
    classification: 'Restricted (customer data)',
    approvedTools: 'Only secure, approved systems',
    restrictions: 'Full audit trail, extra validation',
  },
]

export const governanceTiers = [
  {
    tier: 1,
    name: 'Just do it',
    description: 'Low risk, personal stuff',
    examples: 'Summarising docs, drafting emails, research, brainstorming',
    approval: 'None — go ahead',
  },
  {
    tier: 2,
    name: 'Quick check',
    description: 'Medium risk, team tools',
    examples: 'Team dashboards, internal chatbots, workflow automation',
    approval: 'Your manager + AI champion',
  },
  {
    tier: 3,
    name: 'Proper review',
    description: 'Higher risk, affects customers or decisions',
    examples: 'Underwriting helpers, claims sorting, pricing tools',
    approval: 'AI committee (meets every 2 weeks)',
  },
  {
    tier: 4,
    name: 'Full approval',
    description: 'Big stuff, external or strategic',
    examples: 'Customer-facing AI, regulatory submissions, partner work',
    approval: 'CTO or leadership team',
  },
]

export const responsibleAIPrinciples = [
  {
    principle: 'Be honest',
    description: 'Tell people when they\'re talking to AI or when AI helped with a decision',
  },
  {
    principle: 'Be fair',
    description: 'Test for bias, especially in underwriting and claims',
  },
  {
    principle: 'Stay accountable',
    description: 'A person is always responsible for AI decisions',
  },
  {
    principle: 'Protect privacy',
    description: 'Follow the data rules — no shortcuts',
  },
  {
    principle: 'Keep it secure',
    description: 'All AI tools go through security review',
  },
  {
    principle: 'Keep records',
    description: 'Important AI decisions need to be logged and explainable',
  },
]
