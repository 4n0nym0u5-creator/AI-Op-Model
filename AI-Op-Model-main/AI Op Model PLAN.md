# APAC AI Operating Model — Implementation Plan

## Project Overview

Build a React + Vite application serving as the APAC Technology AI Operating Model — an interactive reference tool for AI adoption, governance, and guidance.

**Design Direction**: Clean, professional, dark mode. Stripe documentation meets Bloomberg terminal aesthetic.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework, component architecture |
| **Vite** | Build tool, dev server, hot module replacement |
| **CSS Modules** | Scoped styling per component |
| **React Router** | Client-side routing between pillars |
| **Google Fonts** | DM Sans (body), JetBrains Mono (code/data) |

---

## Project Structure

```
AI Op Model/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                 # Entry point
│   ├── App.jsx                  # Root component with routing
│   ├── App.css                  # Global styles, CSS variables
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── PillarCard/
│   │   │   ├── PillarCard.jsx
│   │   │   └── PillarCard.module.css
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   └── Modal.module.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.module.css
│   │   ├── CollapsibleSection/
│   │   │   ├── CollapsibleSection.jsx
│   │   │   └── CollapsibleSection.module.css
│   │   ├── FilterableTable/
│   │   │   ├── FilterableTable.jsx
│   │   │   └── FilterableTable.module.css
│   │   ├── ArchitectureDiagram/
│   │   │   ├── ArchitectureDiagram.jsx
│   │   │   └── ArchitectureDiagram.module.css
│   │   └── Wizard/
│   │       ├── Wizard.jsx
│   │       └── Wizard.module.css
│   ├── pages/
│   │   ├── Home.jsx             # Pillar navigation grid
│   │   ├── StrategyGovernance.jsx
│   │   ├── UseCasePortfolio.jsx
│   │   ├── PeopleCapability.jsx
│   │   ├── TechnologyPlatform.jsx
│   │   ├── ProcessRhythm.jsx
│   │   └── AIPathfinder.jsx
│   └── data/
│       ├── useCases.js          # 35 use cases
│       ├── modelComparison.js   # Model comparison matrix
│       ├── trainingCatalog.js   # Training courses
│       ├── regionalData.js      # APAC market constraints
│       └── pathfinderLogic.js   # Wizard recommendation logic
```

---

## Implementation Phases

### Phase 1: Project Setup

1. Initialise Vite + React project
2. Configure CSS variables for colour palette:
   - `--bg-primary: #0f1724` (deep navy)
   - `--accent: #d4a843` (gold/amber)
   - `--text-primary`, `--text-secondary`, etc.
3. Set up Google Fonts (DM Sans, JetBrains Mono)
4. Create base layout structure
5. Configure React Router

### Phase 2: Core Components

**Header** — sticky, title, subtitle, search bar, "About" button
**Modal** — reusable overlay with focus trap
**PillarCard** — icon, title, description, click navigation
**CollapsibleSection** — expand/collapse with animation
**FilterableTable** — sortable, filterable data display

### Phase 3: Pages & Content

**Home** — 6 pillar cards in responsive grid

**Pillar 1: Strategy & Governance**
- AI Strategy section
- Decision Framework (Tier 1-4 interactive table)
- Data Classification rules
- APAC Regional Considerations (7 markets)
- Responsible AI Principles

**Pillar 2: Use Case Portfolio**
- FilterableTable with 35 use cases
- Filters: Function, Complexity, Status, Model
- Model Comparison Matrix (5 models)
- "Suggest a Use Case" form mockup

**Pillar 3: People & Capability**
- Role-based tabs (All Staff, Power Users, Builders, Leaders)
- Training Catalog table
- Community of Practice info

**Pillar 4: Technology Platform**
- ArchitectureDiagram component (4-layer CSS diagram)
- AI Gateway capabilities
- App Hosting Platform features
- Data Integration details

**Pillar 5: Process & Operating Rhythm**
- Use Case Lifecycle (horizontal step flow)
- Model Evaluation Cadence table
- Knowledge Management
- Incident & Cost Management

**Pillar 6: AI Pathfinder**
- Wizard component (5-step form)
- Dynamic results based on answers
- Personalised recommendations with links

### Phase 4: Interactivity

- Global search across all content
- URL-based routing (shareable links to pillars)
- Filter state in URL params (Use Case Portfolio)
- Smooth scroll behaviour
- Print stylesheet

### Phase 5: Polish & Accessibility

- Keyboard navigation throughout
- ARIA labels and roles
- Focus management for modals
- Responsive breakpoints (desktop/tablet/mobile)
- Loading states
- Error boundaries

---

## Key Files to Create

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `vite.config.js` | Vite configuration |
| `src/main.jsx` | React entry point |
| `src/App.jsx` | Root component with Router |
| `src/App.css` | Global styles, CSS variables |
| `src/data/useCases.js` | 35 use cases data |
| `src/pages/*.jsx` | 7 page components |
| `src/components/*.jsx` | 8 reusable components |

---

## Verification Steps

1. **Dev server**: Run `npm run dev`, verify app loads at localhost
2. **Navigation**: Click all pillar cards, verify routing works
3. **Modal**: Test "About This Model" opens/closes correctly
4. **Search**: Test search finds content across all pillars
5. **Use Case Filters**: Test all filter combinations
6. **AI Pathfinder**: Complete wizard with different answers, verify recommendations
7. **Responsive**: Test at 1440px, 768px, 375px viewports
8. **Keyboard**: Navigate entire app using only keyboard
9. **Build**: Run `npm run build`, verify production build succeeds
10. **Preview**: Run `npm run preview`, verify production build works

---

## Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Notes

- Use British English throughout (colour, behaviour, categorise, etc.)
- Professional but approachable tone
- All data hardcoded in `/src/data/` — no API calls
- Do NOT auto-open in browser after changes
- Commit and push to GitHub after completing features
