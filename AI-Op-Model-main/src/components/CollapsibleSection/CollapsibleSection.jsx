import { useState } from 'react'
import styles from './CollapsibleSection.module.css'

function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`${styles.section} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h4 className={styles.title}>{title}</h4>
        <svg
          className={styles.chevron}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={styles.content}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CollapsibleSection
