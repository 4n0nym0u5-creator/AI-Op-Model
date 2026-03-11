import { Link } from 'react-router-dom'
import CollapsibleSection from '../components/CollapsibleSection/CollapsibleSection'
import { regionalConstraints, dataClassification, governanceTiers, responsibleAIPrinciples } from '../data/regionalData'
import styles from './PillarPage.module.css'

function StrategyGovernance() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
        <h1 className={styles.title}>What can I use AI for?</h1>
        <p className={styles.subtitle}>
          The quick answer: a lot! But some things need approval first. Here's how to know what's okay.
        </p>
      </header>

      <div className={styles.content}>
        <CollapsibleSection title="Do I need approval?" defaultOpen={true}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              It depends on what you're doing. Low-risk stuff? Go ahead. Higher-risk? Check first.
            </p>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Type of work</th>
                    <th>Examples</th>
                    <th>Do I need approval?</th>
                  </tr>
                </thead>
                <tbody>
                  {governanceTiers.map((tier) => (
                    <tr key={tier.tier}>
                      <td>
                        <span className={`${styles.tierBadge} ${styles[`tier${tier.tier}`]}`}>
                          {tier.name}
                        </span>
                        <br />
                        <small style={{ color: 'var(--text-muted)' }}>{tier.description}</small>
                      </td>
                      <td>{tier.examples}</td>
                      <td>{tier.approval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="What data can I share with AI?" defaultOpen={true}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              The golden rule: the more sensitive the data, the more careful you need to be.
            </p>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Type of data</th>
                    <th>Which AI tools can I use?</th>
                    <th>What to watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  {dataClassification.map((row) => (
                    <tr key={row.classification}>
                      <td><strong>{row.classification}</strong></td>
                      <td>{row.approvedTools}</td>
                      <td>{row.restrictions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="What about different countries?" defaultOpen={false}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Different places have different rules about data and AI. Here's a quick overview.
            </p>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Main rules to know</th>
                    <th>Where should data live?</th>
                    <th>Good to know</th>
                  </tr>
                </thead>
                <tbody>
                  {regionalConstraints.map((row) => (
                    <tr key={row.market}>
                      <td><strong>{row.market}</strong></td>
                      <td>{row.regulations}</td>
                      <td>{row.dataResidency}</td>
                      <td>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="What's expected of me?" defaultOpen={true}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              A few simple principles to keep in mind when using AI.
            </p>
            <div className={styles.principlesGrid}>
              {responsibleAIPrinciples.map((item) => (
                <div key={item.principle} className={styles.principleCard}>
                  <h4 className={styles.principleName}>{item.principle}</h4>
                  <p className={styles.principleDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
}

export default StrategyGovernance
