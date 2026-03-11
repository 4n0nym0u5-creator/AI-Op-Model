import { Link } from 'react-router-dom'
import CollapsibleSection from '../components/CollapsibleSection/CollapsibleSection'
import styles from './PillarPage.module.css'

const lifecycleSteps = [
  { number: 1, title: 'Idea' },
  { number: 2, title: 'Check' },
  { number: 3, title: 'Approve' },
  { number: 4, title: 'Build' },
  { number: 5, title: 'Test' },
  { number: 6, title: 'Launch' },
  { number: 7, title: 'Run' },
]

function ProcessRhythm() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
        <h1 className={styles.title}>How does this all work?</h1>
        <p className={styles.subtitle}>
          How AI projects go from idea to reality, and who does what along the way.
        </p>
      </header>

      <div className={styles.content}>
        <CollapsibleSection title="What's the process?" defaultOpen={true}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Every AI project follows roughly the same path. Here's what happens at each step.
            </p>
            <div className={styles.processFlow}>
              {lifecycleSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <span className={styles.processStepNumber}>{step.number}</span>
                  <div className={styles.processStepTitle}>{step.title}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'var(--spacing-xl)' }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>What happens at each step?</h4>
              <ul className={styles.bulletList}>
                <li><strong>1. Idea:</strong> You have an idea. Write it down. Talk to your team's AI champion.</li>
                <li><strong>2. Check:</strong> The AI team looks at it — is it doable? What data do we need? How risky is it?</li>
                <li><strong>3. Approve:</strong> Simple stuff? Just start. Bigger stuff? Get sign-off from the right people.</li>
                <li><strong>4. Build:</strong> Someone builds it using our approved tools. Could be you, could be a developer.</li>
                <li><strong>5. Test:</strong> Does it work? Is the AI output good enough? Does it cause any problems?</li>
                <li><strong>6. Launch:</strong> Deploy it, add it to the directory, set up monitoring.</li>
                <li><strong>7. Run:</strong> Keep an eye on it. Collect feedback. Improve or shut down if it's not working.</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Who keeps an eye on AI tools?" defaultOpen={false}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              The AI team regularly checks what's new and what's changed.
            </p>
            <ul className={styles.bulletList}>
              <li><strong>Every week:</strong> Check for new AI tool updates and announcements</li>
              <li><strong>When something new comes out:</strong> Test it within a week</li>
              <li><strong>Every few months:</strong> Deep dive on new tools worth considering</li>
              <li><strong>Every month:</strong> Look at costs and find ways to save</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Where do we share what we learn?" defaultOpen={false}>
          <div className={styles.section}>
            <ul className={styles.bulletList}>
              <li><strong>Prompt library:</strong> Good prompts that work, organised by task</li>
              <li><strong>Templates:</strong> Patterns for common types of AI apps</li>
              <li><strong>Lessons learned:</strong> What worked, what didn't</li>
              <li><strong>Newsletter:</strong> Monthly updates, tips, and stories</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="What if something goes wrong?" defaultOpen={false}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Sometimes AI gives bad answers. Here's what to do.
            </p>
            <ol style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              paddingLeft: 0
            }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  background: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  borderRadius: '50%',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>1</span>
                Report it — use the feedback button or tell the AI team
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  background: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  borderRadius: '50%',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>2</span>
                If it's customer-facing, it might get paused while we investigate
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  background: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  borderRadius: '50%',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>3</span>
                We figure out why — was it the prompt? The AI? The data?
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  background: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  borderRadius: '50%',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>4</span>
                Fix it and test it
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  background: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  borderRadius: '50%',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>5</span>
                Share what we learned so it doesn't happen again
              </li>
            </ol>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="How do we manage costs?" defaultOpen={false}>
          <div className={styles.section}>
            <ul className={styles.bulletList}>
              <li>Every AI request is tracked and charged to teams</li>
              <li>Monthly reports show what each team is spending</li>
              <li>Tips on how to save money (use simpler AI for simple tasks, cache common questions)</li>
              <li>Alerts if spending spikes unexpectedly</li>
            </ul>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
}

export default ProcessRhythm
