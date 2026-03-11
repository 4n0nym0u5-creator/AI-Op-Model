import StepJourney from '../components/StepJourney/StepJourney'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>How can we help you with AI?</h1>
        <p className={styles.heroSubtitle}>
          Answer three quick questions and we'll point you to the right resources for your role.
        </p>
      </section>

      <StepJourney />
    </div>
  )
}

export default Home
