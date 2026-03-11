export const pathfinderQuestions = [
  {
    id: 'role',
    question: 'What do you do?',
    options: [
      'Underwriting',
      'Actuarial',
      'Claims',
      'Distribution / Brokers',
      'Operations / Finance',
      'HR',
      'Legal / Compliance',
      'Tech / Engineering',
      'Leadership',
      'Something else',
    ],
  },
  {
    id: 'familiarity',
    question: 'How much have you used AI?',
    options: [
      'Never tried it',
      'Played around a bit',
      'Use it regularly',
      'I build things with AI',
    ],
  },
  {
    id: 'goal',
    question: 'What do you want to do?',
    options: [
      'Save time on everyday tasks',
      'Automate something for my team',
      'Build an AI-powered app',
      'Understand what\'s allowed',
      'Find training',
      'Just exploring',
    ],
  },
  {
    id: 'dataType',
    question: 'What kind of data would you use?',
    options: [
      'Nothing sensitive',
      'Internal stuff',
      'Confidential',
      'Customer info',
      'Not sure',
    ],
  },
  {
    id: 'urgency',
    question: 'How soon do you need this?',
    options: [
      'Just curious for now',
      'Sometime this month',
      'Right now — I have a project',
    ],
  },
]

export function generateRecommendations(answers) {
  const recommendations = {
    nextSteps: [],
    training: [],
    useCases: [],
    sections: [],
    contact: '',
  }

  const roleFunctionMap = {
    'Underwriting': 'Underwriting',
    'Actuarial': 'Actuarial',
    'Claims': 'Claims',
    'Distribution / Brokers': 'Distribution',
    'Operations / Finance': 'Operations & Finance',
    'HR': 'HR & Talent',
    'Legal / Compliance': 'Legal & Compliance',
    'Tech / Engineering': 'IT / Engineering',
  }

  // Based on experience level
  if (answers.familiarity === 'Never tried it') {
    recommendations.nextSteps.push('Take the AI basics course (2 hours online)')
    recommendations.nextSteps.push('Get access to Claude Desktop or ChubbGPT')
    recommendations.training.push('AI Foundations')
    recommendations.training.push('Responsible AI')
    recommendations.sections.push('/people-capability')
  } else if (answers.familiarity === 'Played around a bit') {
    recommendations.nextSteps.push('Finish the basics course if you haven\'t')
    recommendations.nextSteps.push('Try the prompt engineering workshop')
    recommendations.training.push('Prompt Engineering')
    recommendations.sections.push('/people-capability')
  } else if (answers.familiarity === 'Use it regularly') {
    recommendations.nextSteps.push('Consider becoming an AI champion for your team')
    recommendations.nextSteps.push('Look for more advanced use cases')
    recommendations.training.push('AI Champion program')
    recommendations.sections.push('/use-case-portfolio')
  } else if (answers.familiarity === 'I build things with AI') {
    recommendations.nextSteps.push('Check out our platform and tools')
    recommendations.nextSteps.push('Talk to the AI team about what you\'re building')
    recommendations.training.push('Building with AI APIs')
    recommendations.training.push('Deploying AI apps')
    recommendations.sections.push('/technology-platform')
  }

  // Based on goal
  if (answers.goal === 'Save time on everyday tasks') {
    recommendations.nextSteps.push('Start with simple stuff — no approval needed')
    recommendations.useCases.push('Summarising documents')
    recommendations.useCases.push('Drafting emails')
    recommendations.useCases.push('Research help')
  } else if (answers.goal === 'Automate something for my team') {
    recommendations.nextSteps.push('Write down what you want to automate')
    recommendations.nextSteps.push('Check what approval you might need')
    recommendations.sections.push('/process-rhythm')
    recommendations.sections.push('/strategy-governance')
  } else if (answers.goal === 'Build an AI-powered app') {
    recommendations.nextSteps.push('Look at our tools and platform')
    recommendations.nextSteps.push('Talk to the AI team about your idea')
    recommendations.nextSteps.push('Make sure you\'ve done the developer training')
    recommendations.sections.push('/technology-platform')
  } else if (answers.goal === 'Understand what\'s allowed') {
    recommendations.nextSteps.push('Read the rules page')
    recommendations.nextSteps.push('Check what tier your idea falls into')
    recommendations.sections.push('/strategy-governance')
  } else if (answers.goal === 'Find training') {
    recommendations.sections.push('/people-capability')
  } else if (answers.goal === 'Just exploring') {
    recommendations.nextSteps.push('Browse examples from other teams')
    recommendations.nextSteps.push('Try this guide again with a specific goal')
    recommendations.sections.push('/use-case-portfolio')
  }

  // Based on data sensitivity
  if (answers.dataType === 'Customer info') {
    recommendations.nextSteps.push('Be careful — customer data has extra rules')
    recommendations.nextSteps.push('Only use approved, secure tools')
    recommendations.sections.push('/strategy-governance')
  } else if (answers.dataType === 'Confidential') {
    recommendations.nextSteps.push('Use enterprise tools only, not the web versions')
    recommendations.sections.push('/strategy-governance')
  } else if (answers.dataType === 'Not sure') {
    recommendations.nextSteps.push('Ask your AI champion about data rules')
  }

  // Role-specific
  const functionName = roleFunctionMap[answers.role]
  if (functionName) {
    recommendations.useCases.push(`See ${functionName} examples`)
  }

  // Who to contact
  if (answers.goal === 'Build an AI-powered app' || answers.urgency === 'Right now — I have a project') {
    recommendations.contact = 'The AI team — they can help with your project'
  } else {
    recommendations.contact = 'Your team\'s AI champion is a good first stop'
  }

  recommendations.nextSteps.push('Join the AI chat channel')

  recommendations.sections = [...new Set(recommendations.sections)]

  return recommendations
}
