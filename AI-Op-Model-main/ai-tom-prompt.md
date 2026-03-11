# Claude Code Prompt: Chubb APAC AI Operating Model — Interactive Single-Page Application

## Overview

Build a single-file HTML application (HTML + CSS + JS, no frameworks, no build tools) that serves as the **Chubb APAC Technology AI Operating Model** — a working tool that team members use daily to understand how to adopt, build, deploy, and govern AI across the organization.

This is NOT a presentation or report. It is an **interactive reference tool and guidance system**. Think of it as an internal portal that answers: "I want to do something with AI at Chubb — how do I do that?"

## Design Direction

- **Aesthetic**: Clean, professional, utilitarian — like a well-designed internal operations tool. Think Stripe documentation meets Bloomberg terminal. Dark mode default with a sophisticated color palette.
- **Typography**: Use a distinctive sans-serif from Google Fonts (e.g., DM Sans for body, Space Mono or JetBrains Mono for data/code elements). Avoid Inter, Roboto, Arial.
- **Color palette**: Deep navy/charcoal background (#0f1724 range), with Chubb-inspired gold/amber accents (#d4a843 range), and cool blue-grey for secondary elements. Use color purposefully — to indicate status, category, and hierarchy.
- **Layout**: Card-based navigation for pillars, with smooth panel expansions. Dense but readable. No wasted space.
- **Interactions**: Smooth transitions, hover states with purpose, expandable sections, filtering, tabbed content. All CSS + vanilla JS — no libraries.
- **Mobile responsive**: Must work on tablets and phones (team members may access on the go).

## Page Structure

### 1. Header
- Title: "Chubb APAC AI Operating Model"
- Subtitle: "Scale AI. At Speed. Safely."
- An "About This Model" button that opens a modal overlay explaining:
  - What this operating model is
  - Why it exists (context: scaling AI across Chubb APAC Technology and business functions)
  - How it connects to Chubb's broader transformation priorities
  - How to contribute feedback
  - Version: 1.0 | January 2026

### 2. Navigation — Six Pillars (Main Content)

Display the six pillars as clickable cards in a grid. Each card shows an icon (use unicode/emoji or simple SVG), title, and a one-line description. Clicking a card navigates to that pillar's detailed section.

The six pillars are:

---

#### PILLAR 1: Strategy & Governance

**Section: AI Strategy**
- Chubb APAC is embedding AI as a core operational capability — not running standalone pilots
- AI adoption is aligned to business outcomes: underwriting speed, claims efficiency, customer experience, cost optimization
- Every AI initiative must connect to a measurable business outcome

**Section: Decision Framework (Tiered Governance)**
Display as an interactive tiered model:

| Tier | Description | Examples | Approval Required |
|------|-------------|----------|-------------------|
| Tier 1: Self-Serve | Low risk, personal productivity | Summarizing documents, drafting emails, research, brainstorming | None — use approved tools freely |
| Tier 2: Team-Level | Moderate risk, shared workflows | Team dashboards, internal chatbots, process automation | Line manager + AI Champion sign-off |
| Tier 3: Business-Critical | High risk, customer-facing or decision-influencing | Underwriting copilots, claims triage, pricing models | AI Governance Committee approval |
| Tier 4: Enterprise | Strategic, cross-functional, or externally exposed | Customer-facing AI products, regulatory submissions, partner integrations | CTO / ExCo approval |

**Section: Data Classification & AI Usage Rules**
Interactive decision tree or table:

| Data Classification | Approved AI Tools | Restrictions |
|---|---|---|
| Public | Any approved tool (Claude, GPT, Gemini) via web interface | No restrictions |
| Internal | Approved tools via enterprise API only (no copy-paste to web UI) | No PII, no customer data in prompts |
| Confidential | Enterprise API with approved data connectors only | DLP controls, audit logging required |
| Restricted (PII, regulated) | On-premise / private cloud models only, or approved enterprise instances with BAA/DPA | Full audit trail, model validation required |

**Section: APAC Regional Considerations**
Table showing key markets and their AI/data constraints:

| Market | Key Regulatory Constraints | Data Residency Requirements | Notes |
|---|---|---|---|
| Australia | APRA CPS 234 (information security), Privacy Act, proposed AI regulation | Data should remain in AU for regulated entities | Strong focus on explainability for insurance decisions |
| Japan | APPI (data protection), FSA guidelines on AI in finance | Preference for domestic data hosting | Conservative adoption culture; strong on quality |
| Singapore | MAS FEAT principles, PDPA, AI Verify framework | Cross-border transfers allowed with safeguards | Progressive regulatory sandbox available |
| Hong Kong | PDPO, HKMA guidance on AI, upcoming AI regulation | Flexible on data location | Broker-heavy market; distribution AI high value |
| Thailand | PDPA (2022), OIC digital insurance guidelines | Local data storage preferred | Emerging AI adoption; focus on customer-facing |
| New Zealand | Privacy Act 2020, RBNZ guidelines | Follows AU patterns broadly | Smaller market; leverage AU frameworks |
| South Korea | PIPA, credit information rules, AI Basic Act (proposed) | Strict data localization for financial data | Advanced digital infrastructure; high AI literacy |

**Section: Responsible AI Principles**
- Transparency: Users must know when they're interacting with AI or when AI influenced a decision
- Fairness: AI models must be tested for bias, especially in underwriting and claims
- Accountability: A human is always accountable for AI-assisted decisions
- Privacy: Customer data is handled per data classification rules — no exceptions
- Security: All AI integrations go through security review
- Auditability: Key AI decisions must be logged and reproducible

---

#### PILLAR 2: Use Case Portfolio

**Section: Use Cases by Function**

Build this as a filterable, searchable interactive table/card grid. Users can filter by:
- Function (dropdown)
- Complexity (Low / Medium / High)
- Status (Available / In Development / Proposed)
- Recommended Model

Pre-populate with these use cases:

**Underwriting:**
1. Submission summarization — Extract key risk details from broker submissions and present structured summary | Low complexity | Claude (best for long documents) | Available
2. Peer company risk comparison — Compare submission against similar accounts in portfolio | Medium | Claude or GPT-4o | In Development
3. Policy wording analysis — Review policy wordings for coverage gaps, non-standard clauses | Medium | Claude (strong at legal/document analysis) | Available
4. Underwriting copilot — AI assistant that provides risk insights, pricing suggestions, portfolio context during underwriting workflow | High | Claude or GPT-4o | In Development
5. Exposure accumulation analysis — Aggregate and visualize exposure across portfolio by geography, peril, industry | High | Gemini (large context) or custom model | Proposed
6. Referral triage — Automatically classify and route referrals based on risk characteristics | Medium | GPT-4o or Claude | Proposed

**Actuarial:**
7. Loss trend analysis — Identify patterns in claims data and flag emerging trends | Medium | GPT-4o with Code Interpreter or custom model | In Development
8. Reserve adequacy review assistant — Summarize reserve reviews, flag outliers, prepare commentary | Medium | Claude | Available
9. Regulatory filing drafting — Draft sections of regulatory filings based on templates and data | Low | Claude | Available
10. Actuarial model documentation — Auto-generate model documentation from code and specifications | Low | Claude (strong at code comprehension) | Available

**Claims:**
11. First notification of loss (FNOL) triage — Classify incoming claims by severity, complexity, coverage applicability | Medium | GPT-4o or Claude | In Development
12. Claims summarization — Summarize lengthy claim files, adjuster notes, medical reports | Low | Claude (best for long documents) | Available
13. Fraud indicator detection — Flag claims with patterns consistent with fraud indicators | High | Custom model + GPT-4o | Proposed
14. Subrogation opportunity identification — Identify potential recovery opportunities from claim data | Medium | Claude or GPT-4o | Proposed
15. Claims correspondence drafting — Draft letters, emails to claimants and brokers | Low | Claude or GPT-4o | Available

**Distribution:**
16. Broker communication drafting — Draft professional correspondence to brokers | Low | Claude or GPT-4o | Available
17. Market intelligence summarization — Summarize competitor activity, market reports, news | Low | Claude or GPT-4o with web search | Available
18. Cross-sell opportunity identification — Analyze portfolio to identify coverage gaps for existing clients | Medium | GPT-4o or Claude | Proposed
19. Proposal/pitch generation — Generate tailored proposal documents for prospective clients | Medium | Claude | In Development

**Operations & Finance:**
20. Management reporting automation — Generate narrative commentary for dashboards and reports | Low | Claude | Available
21. Regulatory correspondence drafting — Draft responses to regulatory inquiries | Medium | Claude | Available
22. Invoice processing — Extract and validate data from vendor invoices | Medium | GPT-4o (vision) or custom OCR + model | In Development
23. Budget variance analysis — Analyze actuals vs. budget and generate explanations | Medium | Claude or GPT-4o with Code Interpreter | Proposed
24. Meeting summarization — Transcribe and summarize meetings with action items | Low | GPT-4o (audio) or Gemini | Available

**HR & Talent:**
25. Job description generation — Create role descriptions aligned to Chubb standards | Low | Claude or GPT-4o | Available
26. Learning content creation — Generate training materials, quizzes, guides | Low | Claude | Available
27. Employee FAQ chatbot — Internal HR policy Q&A assistant | Medium | Claude or GPT-4o | In Development

**Legal & Compliance:**
28. Contract review — Review vendor contracts for non-standard terms, risk flags | Medium | Claude (strong at document analysis) | In Development
29. Regulatory change monitoring — Monitor and summarize regulatory updates across APAC markets | Medium | Claude or GPT-4o with web search | Proposed
30. Compliance checklist generation — Generate compliance review checklists for new products/processes | Low | Claude | Available

**IT / Engineering:**
31. Code review assistant — Review pull requests for bugs, security issues, best practices | Medium | Claude (strong at code) | Available
32. Documentation generation — Generate technical documentation from codebases | Low | Claude | Available
33. Incident analysis — Summarize production incidents, identify root cause patterns | Medium | Claude or GPT-4o | In Development
34. Test case generation — Generate test cases from requirements and user stories | Medium | Claude or GPT-4o | Available
35. Infrastructure cost optimization — Analyze cloud spending and recommend optimizations | Medium | GPT-4o with Code Interpreter or Claude | Proposed

**Section: Model Comparison Matrix**

Interactive comparison table:

| Capability | Claude (Anthropic) | GPT-4o (OpenAI) | Gemini (Google) | Llama 3 (Meta) | Mistral Large |
|---|---|---|---|---|---|
| Long document analysis | ★★★★★ | ★★★★ | ★★★★★ | ★★★ | ★★★ |
| Code generation & review | ★★★★★ | ★★★★ | ★★★★ | ★★★ | ★★★★ |
| Legal/policy document analysis | ★★★★★ | ★★★★ | ★★★★ | ★★★ | ★★★ |
| Multimodal (vision) | ★★★★ | ★★★★★ | ★★★★★ | ★★★ | ★★★ |
| Reasoning & analysis | ★★★★★ | ★★★★★ | ★★★★ | ★★★ | ★★★★ |
| Creative writing & drafting | ★★★★★ | ★★★★ | ★★★★ | ★★★ | ★★★ |
| Data analysis / code execution | ★★★★ | ★★★★★ | ★★★★ | ★★★ | ★★★ |
| Conversation / chat quality | ★★★★★ | ★★★★ | ★★★★ | ★★★ | ★★★ |
| Multilingual (APAC languages) | ★★★★ | ★★★★ | ★★★★★ | ★★★ | ★★★ |
| Context window size | 200K tokens | 128K tokens | 2M tokens | 128K tokens | 128K tokens |
| Enterprise API availability | Yes | Yes | Yes | Self-hosted | Yes |
| Cost tier | Mid-High | Mid-High | Mid | Low (self-hosted) | Mid |
| Data privacy posture | Strong (no training on API data) | Strong (enterprise) | Strong (enterprise) | Full control (self-hosted) | Strong |
| Best for (insurance) | Underwriting analysis, document review, coding, complex reasoning | General-purpose, multimodal, data analysis | Large-scale document processing, workspace integration, multilingual | Cost-sensitive internal tools, privacy-critical | European regulatory contexts, code |

Note at the bottom: "Model capabilities change rapidly. This matrix is reviewed monthly by the AI Platform team. Last updated: [date]. If you believe a rating should change, contact the AI Platform team."

**Section: Suggest a Use Case**
A simple form concept (or link to an internal form) where anyone can propose a new AI use case. Fields: Function, Description, Expected value, Data involved, Urgency.

---

#### PILLAR 3: People & Capability

**Section: Role-Based Capability Framework**

Display as interactive tabs or an accordion — user picks their role type and sees their pathway.

**All Staff — AI Literacy (Mandatory)**
- What AI is and isn't (capabilities, limitations, hallucination risk)
- Responsible AI principles at Chubb
- Approved tools and how to access them
- Basic prompt engineering: how to get good results
- Data classification: what you can and can't share with AI
- When to escalate: recognizing when AI output needs human review
- Target: All Chubb APAC staff complete within Q1 2026

**Business Power Users — Advanced AI Skills**
- Advanced prompt engineering techniques (chain of thought, few-shot, system prompts)
- Workflow design: identifying where AI fits in your daily work
- Building simple AI-powered tools (Claude artifacts, custom GPTs, Gemini Gems)
- Quality assurance: how to validate AI outputs for business use
- Cost awareness: understanding API costs and efficient usage
- Target: 2-3 champions per team trained by Q2 2026

**Builders / Developers — AI Engineering**
- API integration: working with Claude, OpenAI, Google AI APIs
- App architecture for AI-powered applications
- Prompt management and versioning
- Retrieval-Augmented Generation (RAG) patterns for insurance data
- Security: API key management, data handling, input sanitization
- Deployment on the Chubb AI Platform (internal hosting)
- Testing AI applications: evaluation frameworks, regression testing
- Model orchestration: routing between models, fallback strategies
- Target: All developers baseline trained by Q2 2026

**AI Platform Team — Infrastructure & Operations**
- Model gateway management and monitoring
- Cost optimization and chargeback
- Model evaluation and benchmarking (new model releases)
- Security and compliance tooling
- Infrastructure scaling and reliability
- Vendor management across AI providers

**Leaders — AI Strategy & Decision-Making**
- Understanding AI capabilities at a strategic level
- Investment decision-making for AI initiatives
- Risk and governance: what leaders need to oversee
- Reading AI metrics: adoption, value delivered, cost efficiency
- Change leadership: driving AI adoption in teams

**Section: Training Catalog**
Table of available training resources:

| Training | Audience | Format | Duration | Status |
|---|---|---|---|---|
| AI Foundations at Chubb | All Staff | E-learning | 2 hours | Available |
| Prompt Engineering Masterclass | Power Users, Builders | Workshop | Half day | Available |
| Responsible AI for Insurance | All Staff | E-learning | 1 hour | Available |
| Building with AI APIs | Developers | Hands-on lab | 2 days | Available |
| AI App Deployment on Chubb Platform | Developers | Workshop | Half day | In Development |
| AI for Underwriters | Underwriting | Workshop | Half day | In Development |
| AI for Claims Professionals | Claims | Workshop | Half day | In Development |
| AI for Actuaries | Actuarial | Workshop | Half day | Proposed |
| AI Leadership Briefing | Senior leaders | Briefing | 90 minutes | Available |
| AI Champion Certification | Power Users | Program | 4 weeks | In Development |

**Section: Community of Practice**
- Monthly AI showcase: teams present what they've built
- AI Champions network: cross-functional group of power users
- Internal prompt library: shared, curated prompts and templates
- Slack/Teams channel for AI discussion and support
- Office hours with the AI Platform team

---

#### PILLAR 4: Technology Platform

**Section: Architecture Overview**
Display as a layered architecture diagram (built with CSS/HTML, not an image). Layers from bottom to top:

1. **AI Model Providers** (bottom layer): Claude API | OpenAI API | Google AI API | Self-hosted models (Llama)
2. **AI Gateway** (middle layer): Model routing | Cost tracking | Rate limiting | Audit logging | API key management | Usage analytics
3. **Application Platform** (upper layer): App hosting (internal Vercel equivalent) | Source control (Git) | CI/CD pipeline | App catalog/registry | Auth (SSO) | Security scanning
4. **User Interfaces** (top layer): Web apps | Chatbots | Copilots embedded in workflows | API endpoints for system integration

Each layer should be clickable/expandable to show more detail.

**Section: AI Gateway**
The AI Gateway is the single point through which all AI model requests flow. It provides:
- **Model routing**: Automatically direct requests to the optimal model based on task type, cost, latency requirements
- **Cost tracking & chargeback**: Every request is tagged to a team/project for cost allocation
- **Usage monitoring**: Real-time dashboards showing usage by team, model, use case
- **Audit logging**: Every interaction logged for compliance and governance
- **Rate limiting**: Prevent runaway costs and abuse
- **Model version management**: When providers release new versions, the gateway manages rollout — test new versions against benchmarks before switching
- **Fallback & resilience**: If one provider is down, automatically route to an alternative

**Section: App Hosting Platform ("Chubb AI Deploy")**
An internal platform for deploying AI-powered applications — like Vercel but for Chubb internal and external apps.

Key capabilities:
- **One-click deployment**: Push code, get a URL. Supports static sites, Node.js, Python apps
- **Internet-facing vs. internal-only**: Toggle at deployment time. Internet-facing apps go through additional security review
- **Authentication**: All apps integrated with Chubb SSO. Role-based access control per app
- **Source control**: All deployed apps must be in Git (GitHub Enterprise / Azure DevOps). No deploying from local machines
- **App catalog / registry**: Searchable directory of all deployed AI apps. Before building something new, check if it already exists
- **Environment management**: Dev → Staging → Production pipeline with automated testing gates
- **Security scanning**: Automated scans on every deployment — dependency checks, secret detection, OWASP compliance
- **Custom domains**: Internal apps get [appname].ai.chubb.internal; external apps go through standard domain process
- **Monitoring & alerting**: Health checks, error tracking, performance monitoring built in
- **Cost dashboard**: Per-app AI API cost tracking

**Section: Data Integration**
How AI apps connect to Chubb data:
- Approved data connectors for core systems (policy admin, claims, finance)
- Sandboxed data access — AI apps get read-only views of approved datasets
- No direct database access — all through approved APIs
- Data masking and anonymization tools available for development/testing
- Vector databases available for RAG use cases (embedding and searching Chubb documents)

**Section: Model Evaluation & Benchmarking**
How we keep models up to date:
- Monthly automated benchmark runs against insurance-specific test cases
- When a provider releases a major update, the AI Platform team runs the evaluation suite within 1 week
- Results published to the Model Comparison Matrix (Pillar 2)
- Teams notified of relevant capability changes
- Migration guides provided when switching models is recommended

---

#### PILLAR 5: Process & Operating Rhythm

**Section: Use Case Lifecycle**
Display as a visual process flow (horizontal steps):

**Step 1: Ideation**
- Anyone can propose a use case via the intake form
- AI Champions in each team help shape ideas

**Step 2: Assessment**
- AI Platform team evaluates: feasibility, data requirements, risk tier, estimated effort and value
- Classification into governance tier (Tier 1-4)

**Step 3: Approval**
- Tier 1: No approval needed — go ahead
- Tier 2: Line manager + AI Champion sign-off
- Tier 3: AI Governance Committee (meets fortnightly)
- Tier 4: CTO / ExCo (monthly review)

**Step 4: Build**
- Assigned to builder (internal dev or power user with support)
- Built on Chubb AI Platform using approved tools
- Code in source control from day one
- Security review for Tier 3+

**Step 5: Test & Validate**
- Functional testing, AI output quality testing
- Bias and fairness testing for Tier 3+ (underwriting, claims)
- User acceptance testing with business stakeholders

**Step 6: Deploy**
- Deploy through Chubb AI Deploy platform
- Register in App Catalog
- Monitoring and alerting configured

**Step 7: Operate & Improve**
- Usage and value metrics tracked
- Regular user feedback collected
- Model updates applied via AI Gateway
- Decommission if no longer delivering value

**Section: Model Research & Evaluation Cadence**

| Activity | Frequency | Owner | Output |
|---|---|---|---|
| Model landscape scan (new releases, announcements) | Weekly | AI Platform Team | Brief update to AI Champions |
| Benchmark evaluation of major model updates | Within 1 week of release | AI Platform Team | Updated Model Comparison Matrix |
| Deep evaluation of new providers/models | Quarterly | AI Platform Team + select builders | Evaluation report with recommendation |
| Use case-to-model mapping review | Quarterly | AI Platform Team + function AI Champions | Updated use case portfolio |
| Cost optimization review | Monthly | AI Platform Team | Cost report with optimization recommendations |
| Full model strategy review | Annually | CTO + AI Platform Team | Model strategy document |

**Section: Knowledge Management**
- **Prompt Library**: Curated, tagged, searchable collection of high-quality prompts by function and use case. Anyone can submit; AI Champions curate.
- **Pattern Library**: Reusable architecture patterns for common AI app types (chatbot, document analyzer, copilot, etc.)
- **Lessons Learned Log**: What worked, what didn't — updated after each project
- **AI Newsletter**: Monthly internal newsletter with updates, case studies, tips

**Section: Incident Management**
When an AI app produces incorrect, harmful, or unexpected output:
1. User reports via the app's feedback mechanism or to AI Platform team
2. App is flagged; if customer-facing, may be temporarily suspended
3. Root cause analysis: prompt issue? model issue? data issue?
4. Fix deployed and validated
5. Incident logged and shared as learning

**Section: Cost Management**
- All AI API usage tracked through the AI Gateway
- Costs allocated to teams/projects via chargeback
- Monthly cost reports to team leads
- Optimization recommendations (e.g., use a smaller model for simple tasks, cache frequent queries, batch processing)
- Spending alerts for unusual spikes

---

#### PILLAR 6: AI Pathfinder (Interactive Guided Journey)

Build this as a step-by-step wizard with 6-8 questions. Based on answers, the user gets personalized recommendations.

**Question flow:**

Q1: "What's your role?"
Options: Underwriter | Actuary | Claims Professional | Distribution/Broker Management | Operations/Finance | HR | Legal/Compliance | Developer/Engineer | Leader/Manager | Other

Q2: "How familiar are you with AI tools?"
Options: New to AI | I've tried ChatGPT/Claude a few times | I use AI regularly | I build with AI APIs

Q3: "What are you trying to do?"
Options: Improve my personal productivity | Automate a team workflow | Build an AI-powered application | Understand the governance rules | Find training resources | Explore what's possible

Q4: "What type of data would be involved?"
Options: No sensitive data | Internal business data | Confidential data | Customer PII / regulated data | I'm not sure

Q5: "How urgent is this?"
Options: Just exploring | Want to start within a month | Active project needing guidance now

**Results page:**
Based on the answers, display a personalized card with:
- Recommended next steps (3-5 specific actions)
- Links to relevant sections of the TOM (training, use cases, governance, platform)
- Suggested training to take
- Who to contact (AI Champion, AI Platform team, governance)
- Relevant use cases from the portfolio that match their function

Example: An underwriter who is "New to AI" and wants to "Improve personal productivity" with "Internal business data" gets:
1. Complete AI Foundations e-learning (link)
2. Access approved tools: Claude Enterprise, ChatGPT Enterprise (link to how-to)
3. Try these use cases: Submission summarization, Policy wording analysis (links)
4. Connect with your team's AI Champion: [name]
5. Join the AI Community of Practice (link)

---

### 3. About This Model (Modal Overlay)

Triggered by a button in the header. Content:

**What is this?**
The Chubb APAC AI Operating Model is a practical guide for how we adopt, build, deploy, and govern AI across our technology and business teams. It's designed to help everyone — from business users to developers to leaders — understand how AI works at Chubb and how to use it effectively and safely.

**Why does it exist?**
AI is no longer experimental. To scale it effectively, we need shared standards, clear processes, and the right tools. This operating model provides that structure while keeping things practical and accessible.

**How to use it**
- If you're new to AI at Chubb, start with the **AI Pathfinder** — it'll guide you to the right place
- If you have a specific question, use the **pillar navigation** to go directly to that topic
- If you want to propose a new AI use case, go to **Use Case Portfolio → Suggest a Use Case**

**How to contribute**
This is a living document. If you have feedback, suggestions, or corrections, contact the AI Platform team or submit via [internal channel].

**Version History**
- v1.0 — February 2026: Initial release

---

## Technical Requirements

1. **Single HTML file** — all CSS and JS inline. No external dependencies except Google Fonts.
2. **No frameworks** — vanilla HTML, CSS, JavaScript only.
3. **Responsive** — works on desktop (primary), tablet, and mobile.
4. **Performance** — fast load, smooth animations. Use CSS transitions, not JS animations where possible.
5. **Accessibility** — semantic HTML, keyboard navigation, sufficient contrast.
6. **Print-friendly** — include a print stylesheet that renders a clean, readable version.
7. **Search** — include a search function that searches across all content on the page.
8. **Smooth scrolling** — clicking navigation items smoothly scrolls to sections.
9. **Sticky navigation** — pillar navigation stays accessible as you scroll.
10. **Collapsible sections** — long content sections can be collapsed/expanded.
11. **The AI Pathfinder wizard** should work as a multi-step form with dynamic results.
12. **The Use Case Portfolio** should have working filters (by function, complexity, status, model).
13. **The Architecture diagram** should be built with HTML/CSS (layered boxes), not images.
14. **All data is hardcoded** — no backend, no API calls, no local storage.
15. **File size**: Keep under 200KB total.

---

## Important Notes

- This is for Chubb APAC Technology — use appropriate professional language
- Don't use Chubb's actual logo (we don't have it) — use text-based branding
- The content should feel authoritative but approachable — not corporate jargon-heavy
- Every section should be practically useful, not just descriptive
- The AI Pathfinder is the key differentiator — make it genuinely helpful
- The use case portfolio is the most-used section — make it easy to browse and filter
