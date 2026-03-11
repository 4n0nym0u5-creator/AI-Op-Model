import { Link } from 'react-router-dom'
import styles from './PillarCard.module.css'

function PillarCard({ icon, title, description, path, accentColour }) {
  return (
    <Link to={path} className={styles.card} style={{ '--card-accent': accentColour }}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.arrow}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4 10H16M16 10L11 5M16 10L11 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  )
}

export default PillarCard
