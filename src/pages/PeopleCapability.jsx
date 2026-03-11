import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import CollapsibleSection from '../components/CollapsibleSection/CollapsibleSection'
import { trainingCatalog, trainingRoleFilters, roleCapabilities } from '../data/trainingCatalog'
import styles from './PillarPage.module.css'

function PeopleCapability() {
  const [activeTab, setActiveTab] = useState('allStaff')
  const [trainingFilter, setTrainingFilter] = useState('all')

  const tabs = [
    { id: 'allStaff', label: 'Everyone' },
    { id: 'powerUsers', label: 'Regular users' },
    { id: 'builders', label: 'Developers' },
    { id: 'platformTeam', label: 'AI team' },
    { id: 'leaders', label: 'Leaders' },
  ]

  const filteredTraining = useMemo(() => {
    if (trainingFilter === 'all') {
      return trainingCatalog
    }
    return trainingCatalog.filter((course) =>
      course.roles.includes(trainingFilter) || course.roles.includes('everyone')
    )
  }, [trainingFilter])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
        <h1 className={styles.title}>How do I learn more?</h1>
        <p className={styles.subtitle}>
          Training, guides, and people who can help — depending on what you want to do.
        </p>
      </header>

      <div className={styles.content}>
        <CollapsibleSection title="What should I learn?" defaultOpen={true}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Pick the group that best describes you to see what's recommended.
            </p>

            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
                {roleCapabilities[activeTab].title}
              </h3>
              <div className={styles.targetBadge}>
                {roleCapabilities[activeTab].target}
              </div>
              <ul className={styles.skillsList}>
                {roleCapabilities[activeTab].skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Available training" defaultOpen={true}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Filter by role to find relevant courses.
            </p>

            <div className={styles.filterButtons}>
              {trainingRoleFilters.map((filter) => (
                <button
                  key={filter.id}
                  className={`${styles.filterBtn} ${trainingFilter === filter.id ? styles.active : ''}`}
                  onClick={() => setTrainingFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Who it's for</th>
                    <th>Format</th>
                    <th>Time</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTraining.map((course) => (
                    <tr key={course.id}>
                      <td><strong>{course.name}</strong></td>
                      <td>{course.audience}</td>
                      <td>{course.format}</td>
                      <td>{course.duration}</td>
                      <td>
                        <a
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.trainingLink}
                        >
                          Go to course →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTraining.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 'var(--spacing-xl)' }}>
                No courses for this filter yet.
              </p>
            )}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Who can help?" defaultOpen={false}>
          <div className={styles.section}>
            <ul className={styles.bulletList}>
              <li><strong>Monthly AI show and tell:</strong> See what other teams have built</li>
              <li><strong>AI champions:</strong> People in each team who know AI well and can help</li>
              <li><strong>Prompt library:</strong> Ready-made prompts you can copy and use</li>
              <li><strong>Chat channel:</strong> Ask questions and share tips with others</li>
              <li><strong>Office hours:</strong> Drop in and talk to the AI team</li>
            </ul>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
}

export default PeopleCapability
