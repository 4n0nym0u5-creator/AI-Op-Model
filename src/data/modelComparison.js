export const modelComparison = [
  {
    capability: 'Document analysis & review',
    claudeDesktop: 5,
    claudeCode: 2,
    copilot: 1,
    chubbGPT: 4,
  },
  {
    capability: 'Code generation & review',
    claudeDesktop: 3,
    claudeCode: 5,
    copilot: 5,
    chubbGPT: 3,
  },
  {
    capability: 'Writing & drafting',
    claudeDesktop: 5,
    claudeCode: 2,
    copilot: 1,
    chubbGPT: 4,
  },
  {
    capability: 'Data analysis',
    claudeDesktop: 4,
    claudeCode: 4,
    copilot: 2,
    chubbGPT: 4,
  },
  {
    capability: 'Chat & Q&A',
    claudeDesktop: 5,
    claudeCode: 2,
    copilot: 2,
    chubbGPT: 5,
  },
  {
    capability: 'Reasoning & complex tasks',
    claudeDesktop: 5,
    claudeCode: 5,
    copilot: 3,
    chubbGPT: 4,
  },
  {
    capability: 'Multilingual (APAC languages)',
    claudeDesktop: 4,
    claudeCode: 3,
    copilot: 3,
    chubbGPT: 4,
  },
]

export const modelSpecs = [
  {
    spec: 'Access',
    claudeDesktop: 'Desktop app',
    claudeCode: 'CLI / terminal',
    copilot: 'IDE extension',
    chubbGPT: 'Web app',
  },
  {
    spec: 'Best suited for',
    claudeDesktop: 'Analysis, writing, research',
    claudeCode: 'Coding, documentation',
    copilot: 'Code completion, review',
    chubbGPT: 'General tasks, chat, Q&A',
  },
  {
    spec: 'Who uses it',
    claudeDesktop: 'Everyone',
    claudeCode: 'Developers',
    copilot: 'Developers',
    chubbGPT: 'Everyone',
  },
  {
    spec: 'Data handling',
    claudeDesktop: 'Enterprise (no training on data)',
    claudeCode: 'Enterprise (no training on data)',
    copilot: 'Enterprise (code stays private)',
    chubbGPT: 'Internal (company-controlled)',
  },
]

export const modelBestFor = {
  claudeDesktop: 'Document review, underwriting analysis, drafting, complex reasoning',
  claudeCode: 'Code generation, documentation, debugging, test writing',
  copilot: 'Code completion, pull request review, in-IDE assistance',
  chubbGPT: 'General Q&A, meeting summaries, quick lookups, chat',
}

export const modelProviders = [
  { key: 'claudeDesktop', name: 'Claude Desktop' },
  { key: 'claudeCode', name: 'Claude Code' },
  { key: 'copilot', name: 'Copilot' },
  { key: 'chubbGPT', name: 'ChubbGPT' },
]
