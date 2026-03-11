export const journeyRoles = [
  {
    id: 'underwriter',
    label: 'Underwriter',
    description: 'Risk assessment and pricing',
    icon: '📊',
    trainingRoles: ['underwriting', 'everyone'],
    useCaseFunction: 'Underwriting',
  },
  {
    id: 'claims',
    label: 'Claims handler',
    description: 'Processing and managing claims',
    icon: '📋',
    trainingRoles: ['claims', 'everyone'],
    useCaseFunction: 'Claims',
  },
  {
    id: 'actuary',
    label: 'Actuary',
    description: 'Data modelling and risk analysis',
    icon: '📈',
    trainingRoles: ['actuarial', 'everyone'],
    useCaseFunction: 'Actuarial',
  },
  {
    id: 'broker',
    label: 'Broker / Agent',
    description: 'Client-facing sales and distribution',
    icon: '🤝',
    trainingRoles: ['regular', 'everyone'],
    useCaseFunction: 'Distribution',
  },
  {
    id: 'operations',
    label: 'Operations',
    description: 'Operational workflows and processes',
    icon: '⚙️',
    trainingRoles: ['regular', 'everyone'],
    useCaseFunction: 'Operations & Finance',
  },
  {
    id: 'admin',
    label: 'Admin',
    description: 'Administrative and support functions',
    icon: '🗂️',
    trainingRoles: ['everyone'],
    useCaseFunction: null,
  },
  {
    id: 'developer',
    label: 'IT / Developer',
    description: 'Building and maintaining systems',
    icon: '💻',
    trainingRoles: ['developers', 'everyone'],
    useCaseFunction: 'IT / Engineering',
  },
  {
    id: 'risk',
    label: 'Risk / Compliance',
    description: 'Governance, risk, and regulatory',
    icon: '🛡️',
    trainingRoles: ['everyone'],
    useCaseFunction: 'Legal & Compliance',
  },
]

export const journeyGoals = [
  {
    id: 'rules',
    label: "Check what I'm allowed to use",
    description: 'Understand the rules and what needs approval',
    icon: '✅',
    primarySection: '/strategy-governance',
    sectionLabel: 'What can I use AI for?',
  },
  {
    id: 'examples',
    label: 'See what others are doing',
    description: 'Browse examples and get inspiration',
    icon: '💡',
    primarySection: '/use-case-portfolio',
    sectionLabel: 'What are others doing with AI?',
  },
  {
    id: 'training',
    label: 'Get trained / learn more',
    description: 'Find courses and guides for your role',
    icon: '📚',
    primarySection: '/people-capability',
    sectionLabel: 'How do I learn more?',
  },
  {
    id: 'build',
    label: 'Build something with AI',
    description: 'Find tools and technical resources',
    icon: '🛠️',
    primarySection: '/technology-platform',
    sectionLabel: 'How do I build something?',
  },
  {
    id: 'process',
    label: 'Understand the approval process',
    description: 'See how projects move from idea to launch',
    icon: '📋',
    primarySection: '/process-rhythm',
    sectionLabel: 'How does this all work?',
  },
  {
    id: 'explore',
    label: "Not sure — help me figure it out",
    description: 'Take a more detailed quiz',
    icon: '🧭',
    primarySection: '/ai-pathfinder',
    sectionLabel: 'Guide me',
  },
]

export const journeyExperience = [
  {
    id: 'new',
    label: 'Brand new',
    description: "Haven't really used AI yet",
  },
  {
    id: 'some',
    label: 'Some experience',
    description: 'Tried a few tools, still finding my feet',
  },
  {
    id: 'regular',
    label: 'Use it regularly',
    description: 'Use AI tools most days',
  },
  {
    id: 'experienced',
    label: 'Very experienced',
    description: 'Already building or deeply embedded',
  },
]

export function generateJourneyRecommendations(roleId, goalId, experienceId) {
  const roleData = journeyRoles.find((r) => r.id === roleId)
  const goalData = journeyGoals.find((g) => g.id === goalId)

  const result = {
    startHere: [],
    sections: [],
    trainingRoles: roleData?.trainingRoles ?? ['everyone'],
    useCaseFunction: roleData?.useCaseFunction ?? null,
  }

  // Start here — based on experience
  if (experienceId === 'new') {
    result.startHere.push('Complete the AI Foundations course — it only takes 2 hours')
    result.startHere.push("Read the rules page so you know what's approved")
  } else if (experienceId === 'some') {
    result.startHere.push('Check the examples page for ideas from your area')
    result.startHere.push('Try the prompt engineering workshop to sharpen your skills')
  } else if (experienceId === 'regular') {
    result.startHere.push('Browse advanced use cases and find something to try this week')
    result.startHere.push('Consider joining the AI champion programme for your team')
  } else if (experienceId === 'experienced') {
    result.startHere.push("Check out the platform and tools available for building")
    result.startHere.push("Reach out to the AI team about what you're working on")
  }

  // Primary section from goal
  if (goalData) {
    result.sections.push({
      label: goalData.sectionLabel,
      path: goalData.primarySection,
      primary: true,
    })
  }

  // Supporting sections based on goal
  if (goalId === 'build') {
    result.sections.push({ label: 'What can I use AI for?', path: '/strategy-governance', primary: false })
    result.sections.push({ label: 'How does this all work?', path: '/process-rhythm', primary: false })
  } else if (goalId === 'rules') {
    result.sections.push({ label: 'How does this all work?', path: '/process-rhythm', primary: false })
  } else if (goalId === 'examples') {
    result.sections.push({ label: 'How do I learn more?', path: '/people-capability', primary: false })
  } else if (goalId === 'explore') {
    // Already sent to AI Pathfinder — no extra sections needed
  } else if (experienceId === 'new') {
    result.sections.push({ label: 'What can I use AI for?', path: '/strategy-governance', primary: false })
    result.sections.push({ label: 'How do I learn more?', path: '/people-capability', primary: false })
  }

  // De-duplicate sections
  const seen = new Set()
  result.sections = result.sections.filter((s) => {
    if (seen.has(s.path)) return false
    seen.add(s.path)
    return true
  })

  return result
}
