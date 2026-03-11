import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import CollapsibleSection from '../components/CollapsibleSection/CollapsibleSection'
import { useCases, functions, complexities, statuses, models } from '../data/useCases'
import { modelComparison, modelSpecs, modelBestFor, modelProviders } from '../data/modelComparison'
import styles from './PillarPage.module.css'

function UseCasePortfolio() {
  const [selectedFunction, setSelectedFunction] = useState('All')
  const [selectedComplexity, setSelectedComplexity] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedModel, setSelectedModel] = useState('All')

  const filteredUseCases = useMemo(() => {
    return useCases.filter((uc) => {
      if (selectedFunction !== 'All' && uc.function !== selectedFunction) return false
      if (selectedComplexity !== 'All' && uc.complexity !== selectedComplexity) return false
      if (selectedStatus !== 'All' && uc.status !== selectedStatus) return false
      if (selectedModel !== 'All' && !uc.model.toLowerCase().includes(selectedModel.toLowerCase())) return false
      return true
    })
  }, [selectedFunction, selectedComplexity, selectedStatus, selectedModel])

  const getStatusClass = (status) => {
    switch (status) {
      case 'Available': return styles.statusAvailable
      case 'In Development': return styles.statusInDevelopment
      case 'Proposed': return styles.statusProposed
      default: return ''
    }
  }

  const getComplexityClass = (complexity) => {
    switch (complexity) {
      case 'Low': return styles.complexityLow
      case 'Medium': return styles.complexityMedium
      case 'High': return styles.complexityHigh
      default: return ''
    }
  }

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
        <h1 className={styles.title}>What are others doing with AI?</h1>
        <p className={styles.subtitle}>
          Real examples from teams across the business. Find something similar to what you want to do.
        </p>
      </header>

      <div className={styles.content}>
        <CollapsibleSection title="Browse examples" defaultOpen={true}>
          <div className={styles.section}>
            <div className={styles.filters}>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Team</label>
                <select
                  className={styles.filterSelect}
                  value={selectedFunction}
                  onChange={(e) => setSelectedFunction(e.target.value)}
                >
                  {functions.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Difficulty</label>
                <select
                  className={styles.filterSelect}
                  value={selectedComplexity}
                  onChange={(e) => setSelectedComplexity(e.target.value)}
                >
                  {complexities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Status</label>
                <select
                  className={styles.filterSelect}
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>AI tool</label>
                <select
                  className={styles.filterSelect}
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  {models.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div className={styles.filterCount}>
                <strong>{filteredUseCases.length}</strong> examples
              </div>
            </div>

            <div className={styles.useCaseGrid}>
              {filteredUseCases.map((uc) => (
                <div key={uc.id} className={styles.useCaseCard}>
                  <div className={styles.useCaseHeader}>
                    <h4 className={styles.useCaseName}>{uc.name}</h4>
                    <span className={`${styles.statusBadge} ${getStatusClass(uc.status)}`}>
                      {uc.status}
                    </span>
                  </div>
                  <p className={styles.useCaseDesc}>{uc.description}</p>
                  <div className={styles.useCaseMeta}>
                    <span className={styles.useCaseFunction}>{uc.function}</span>
                    <span className={`${styles.complexityBadge} ${getComplexityClass(uc.complexity)}`}>
                      {uc.complexity}
                    </span>
                    <span className={styles.useCaseModel}>{uc.model}</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredUseCases.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 'var(--spacing-2xl)' }}>
                No examples match your filters. Try changing your selection.
              </p>
            )}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Which AI tool should I use?" defaultOpen={false}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Different tools are good at different things. Here's a quick comparison.
            </p>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Good at...</th>
                    {modelProviders.map((p) => (
                      <th key={p.key}>{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map((row) => (
                    <tr key={row.capability}>
                      <td><strong>{row.capability}</strong></td>
                      {modelProviders.map((p) => (
                        <td key={p.key}><span className={styles.starRating}>{renderStars(row[p.key])}</span></td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td><strong>Best for</strong></td>
                    {modelProviders.map((p) => (
                      <td key={p.key}>{modelBestFor[p.key]}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.modelNote}>
              These ratings change as AI tools improve. Last updated by the AI team.
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Got an idea?" defaultOpen={false}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Want to try something not on this list? Great — we want to hear about it.
            </p>
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--border)',
              textAlign: 'center'
            }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)' }}>
                Tell us what you want to do:
              </p>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'var(--spacing-sm)'
              }}>
                <li style={{
                  padding: 'var(--spacing-xs) var(--spacing-sm)',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)'
                }}>What's the task?</li>
                <li style={{
                  padding: 'var(--spacing-xs) var(--spacing-sm)',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)'
                }}>Why would it help?</li>
                <li style={{
                  padding: 'var(--spacing-xs) var(--spacing-sm)',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)'
                }}>What data is involved?</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
}

export default UseCasePortfolio
