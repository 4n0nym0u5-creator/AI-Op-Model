import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from '../Modal/Modal'
import styles from './Header.module.css'

function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/strategy-governance', label: 'Rules' },
    { path: '/use-case-portfolio', label: 'Examples' },
    { path: '/people-capability', label: 'Training' },
    { path: '/technology-platform', label: 'Tools' },
    { path: '/process-rhythm', label: 'Process' },
    { path: '/ai-pathfinder', label: 'Guide me' },
  ]

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <Link to="/" className={styles.title}>
              AI Guide
            </Link>
            <span className={styles.subtitle}>APAC</span>
          </div>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <button
              className={styles.aboutBtn}
              onClick={() => setIsAboutOpen(true)}
            >
              About
            </button>

            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuOpen : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMenuOpen(false)}>
          <nav
            className={styles.mobileNav}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.mobileLink} ${location.pathname === item.path ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <Modal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} title="About this guide">
        <div className={styles.aboutContent}>
          <section>
            <h4>What is this?</h4>
            <p>
              A simple guide to help you use AI at work. Whether you want to speed up everyday tasks,
              try something new, or build an AI-powered tool — this will point you in the right direction.
            </p>
          </section>

          <section>
            <h4>Who is it for?</h4>
            <p>
              Everyone. You don't need to be technical. If you've ever wondered "could AI help me with this?" —
              this guide is for you.
            </p>
          </section>

          <section>
            <h4>Where do I start?</h4>
            <ul>
              <li>Not sure? Try <strong>Guide me</strong> — answer a few questions and get pointed in the right direction</li>
              <li>Want ideas? Check out <strong>Examples</strong> to see what others are doing</li>
              <li>Need to check if something's allowed? Go to <strong>Rules</strong></li>
            </ul>
          </section>

          <section>
            <h4>Got feedback?</h4>
            <p>
              This guide gets better with your input. If something's confusing, missing, or wrong — let the AI team know.
            </p>
          </section>

          <section className={styles.version}>
            <p>Version 1.0 — February 2026</p>
          </section>
        </div>
      </Modal>
    </>
  )
}

export default Header
