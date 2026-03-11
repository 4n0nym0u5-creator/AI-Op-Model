import { Fragment } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import {
  journeyRoles,
  journeyGoals,
  journeyExperience,
  generateJourneyRecommendations,
} from '../../data/journeyLogic'
import { trainingCatalog } from '../../data/trainingCatalog'
import styles from './StepJourney.module.css'

const steps = [
  { number: 1, label: 'Your role' },
  { number: 2, label: 'Your goal' },
  { number: 3, label: 'Your experience' },
  { number: 4, label: 'Your guide' },
]

function StepJourney() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  // Derive all state from URL so browser back/forward work naturally
  const currentStep = parseInt(searchParams.get('step') ?? '1')
  const role = searchParams.get('role')
  const goal = searchParams.get('goal')
  const exp = searchParams.get('exp')

  // Selecting a card immediately advances to the next step
  const handleSelect = (key, value) => {
    const next = new URLSearchParams(searchParams)
    next.set(key, value)
    next.set('step', currentStep + 1)
    navigate(`/?${next.toString()}`)
  }

  // Back uses browser history — works for both the button and the browser back button
  const handleBack = () => {
    navigate(-1)
  }

  const handleRestart = () => {
    navigate('/')
  }

  const recommendations =
    currentStep === 4
      ? generateJourneyRecommendations(role, goal, exp)
      : null

  const relevantTraining = recommendations
    ? trainingCatalog
        .filter((course) =>
          recommendations.trainingRoles.some((r) => course.roles.includes(r))
        )
        .slice(0, 3)
    : []

  return (
    <div className={styles.journey}>

      {/* Step indicator */}
      <div className={styles.stepIndicator}>
        {steps.map((step, index) => (
          <Fragment key={step.number}>
            <div
              className={[
                styles.stepItem,
                currentStep === step.number ? styles.active : '',
                currentStep > step.number ? styles.completed : '',
              ].join(' ')}
            >
              <div className={styles.stepDot}>
                {currentStep > step.number ? '✓' : step.number}
              </div>
              <span className={styles.stepLabel}>{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={[
                  styles.stepLine,
                  currentStep > step.number ? styles.lineCompleted : '',
                ].join(' ')}
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Step 1 — Role */}
      {currentStep === 1 && (
        <div className={styles.stepContent}>
          <h2 className={styles.stepQuestion}>Who are you?</h2>
          <p className={styles.stepHint}>Pick the role that best describes what you do.</p>
          <div className={styles.roleGrid}>
            {journeyRoles.map((r) => (
              <button
                key={r.id}
                className={[
                  styles.roleCard,
                  role === r.id ? styles.selected : '',
                ].join(' ')}
                onClick={() => handleSelect('role', r.id)}
              >
                <span className={styles.roleIcon}>{r.icon}</span>
                <span className={styles.roleName}>{r.label}</span>
                <span className={styles.roleDesc}>{r.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Goal */}
      {currentStep === 2 && (
        <div className={styles.stepContent}>
          <h2 className={styles.stepQuestion}>What do you want to do?</h2>
          <p className={styles.stepHint}>What brings you here today?</p>
          <div className={styles.goalGrid}>
            {journeyGoals.map((g) => (
              <button
                key={g.id}
                className={[
                  styles.goalCard,
                  goal === g.id ? styles.selected : '',
                ].join(' ')}
                onClick={() => handleSelect('goal', g.id)}
              >
                <span className={styles.goalIcon}>{g.icon}</span>
                <div className={styles.goalText}>
                  <div className={styles.goalLabel}>{g.label}</div>
                  <div className={styles.goalDesc}>{g.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 — Experience */}
      {currentStep === 3 && (
        <div className={styles.stepContent}>
          <h2 className={styles.stepQuestion}>How much experience do you have?</h2>
          <p className={styles.stepHint}>
            Be honest — it helps us point you to the right resources.
          </p>
          <div className={styles.experienceGrid}>
            {journeyExperience.map((e) => (
              <button
                key={e.id}
                className={[
                  styles.expCard,
                  exp === e.id ? styles.selected : '',
                ].join(' ')}
                onClick={() => handleSelect('exp', e.id)}
              >
                <div className={styles.expLabel}>{e.label}</div>
                <div className={styles.expDesc}>{e.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4 — Results */}
      {currentStep === 4 && recommendations && (
        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.resultsTitle}>Here's where to start</h2>
            <p className={styles.resultsSubtitle}>
              Based on your role, goal, and experience level.
            </p>
          </div>

          <div className={styles.resultsGrid}>
            {/* Start here */}
            <div className={styles.resultsCard}>
              <h3 className={styles.resultsCardTitle}>Start here</h3>
              <ul className={styles.actionList}>
                {recommendations.startHere.map((action, i) => (
                  <li key={i} className={styles.actionItem}>{action}</li>
                ))}
              </ul>
            </div>

            {/* Explore sections */}
            <div className={styles.resultsCard}>
              <h3 className={styles.resultsCardTitle}>Explore next</h3>
              <div className={styles.sectionLinks}>
                {recommendations.sections.map((section) => (
                  <Link
                    key={section.path}
                    to={section.path}
                    className={[
                      styles.sectionLink,
                      section.primary ? styles.primaryLink : '',
                    ].join(' ')}
                  >
                    {section.label} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Training */}
            {relevantTraining.length > 0 && (
              <div className={styles.resultsCard}>
                <h3 className={styles.resultsCardTitle}>Training for you</h3>
                <ul className={styles.trainingList}>
                  {relevantTraining.map((course) => (
                    <li key={course.id} className={styles.trainingItem}>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.trainingLink}
                      >
                        {course.name}
                      </a>
                      <span className={styles.trainingMeta}>
                        {course.format} · {course.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Use case ideas */}
            {recommendations.useCaseFunction && (
              <div className={styles.resultsCard}>
                <h3 className={styles.resultsCardTitle}>Use case ideas</h3>
                <p className={styles.useCaseHintText}>
                  See what {recommendations.useCaseFunction} teams are doing with AI.
                </p>
                <Link to="/use-case-portfolio" className={styles.useCaseLink}>
                  Browse {recommendations.useCaseFunction} examples →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className={styles.nav}>
        {currentStep > 1 && (
          <button className={styles.btnSecondary} onClick={handleBack}>
            ← Back
          </button>
        )}
        {currentStep === 4 && (
          <button className={styles.btnSecondary} onClick={handleRestart}>
            Start over
          </button>
        )}
      </div>
    </div>
  )
}

export default StepJourney
