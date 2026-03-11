import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pathfinderQuestions, generateRecommendations } from '../data/pathfinderLogic'
import styles from './PillarPage.module.css'

function AIPathfinder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = pathfinderQuestions[currentStep]
  const totalSteps = pathfinderQuestions.length

  const handleOptionSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  const recommendations = showResults ? generateRecommendations(answers) : null

  const sectionLabels = {
    '/strategy-governance': "What's allowed",
    '/use-case-portfolio': 'Examples',
    '/people-capability': 'Training',
    '/technology-platform': 'Tools',
    '/process-rhythm': 'How it works',
  }

  if (showResults && recommendations) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1 className={styles.title}>Here's what we suggest</h1>
          <p className={styles.subtitle}>
            Based on your answers, here's where to start.
          </p>
        </header>

        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>Your next steps</h2>

          <div className={styles.resultsSection}>
            <h3 className={styles.resultsSectionTitle}>
              <span>👉</span> Do this first
            </h3>
            <ul className={styles.resultsList}>
              {recommendations.nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          {recommendations.training.length > 0 && (
            <div className={styles.resultsSection}>
              <h3 className={styles.resultsSectionTitle}>
                <span>📚</span> Useful training
              </h3>
              <ul className={styles.resultsList}>
                {recommendations.training.map((training, index) => (
                  <li key={index}>{training}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.useCases.length > 0 && (
            <div className={styles.resultsSection}>
              <h3 className={styles.resultsSectionTitle}>
                <span>💡</span> Things to try
              </h3>
              <ul className={styles.resultsList}>
                {recommendations.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.sections.length > 0 && (
            <div className={styles.resultsSection}>
              <h3 className={styles.resultsSectionTitle}>
                <span>📖</span> Read more
              </h3>
              <div className={styles.resultsLinks}>
                {recommendations.sections.map((section, index) => (
                  <Link key={index} to={section} className={styles.resultsLink}>
                    {sectionLabels[section] || section}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className={styles.resultsSection}>
            <h3 className={styles.resultsSectionTitle}>
              <span>💬</span> Talk to someone
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              {recommendations.contact}
            </p>
          </div>

          <button className={`btn-secondary ${styles.restartBtn}`} onClick={handleRestart}>
            Start again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
        <h1 className={styles.title}>Let's figure out where to start</h1>
        <p className={styles.subtitle}>
          Answer a few quick questions and we'll point you in the right direction.
        </p>
      </header>

      <div className={styles.wizard}>
        <div className={styles.wizardProgress}>
          {pathfinderQuestions.map((_, index) => (
            <div
              key={index}
              className={`${styles.progressDot} ${index === currentStep ? styles.active : ''} ${index < currentStep ? styles.completed : ''}`}
            />
          ))}
        </div>

        <div className={styles.wizardQuestion}>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)', fontSize: '0.875rem' }}>
            Question {currentStep + 1} of {totalSteps}
          </p>
          <h2 className={styles.wizardQuestionText}>{currentQuestion.question}</h2>
        </div>

        <div className={styles.wizardOptions}>
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className={`${styles.wizardOption} ${answers[currentQuestion.id] === option ? styles.selected : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className={styles.wizardNav}>
          {currentStep > 0 && (
            <button className={`btn-secondary ${styles.wizardBtn}`} onClick={handlePrevious}>
              Back
            </button>
          )}
          <button
            className={`btn-primary ${styles.wizardBtn}`}
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            style={{ opacity: answers[currentQuestion.id] ? 1 : 0.5 }}
          >
            {currentStep === totalSteps - 1 ? 'Show me' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIPathfinder
