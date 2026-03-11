import { Link } from 'react-router-dom'
import CollapsibleSection from '../components/CollapsibleSection/CollapsibleSection'
import styles from './PillarPage.module.css'

const architectureLayers = [
  {
    id: 'ui',
    title: 'What you see',
    colour: '#f56565',
    items: ['Web apps', 'Chatbots', 'Tools built into your workflow', 'Connections to other systems'],
  },
  {
    id: 'platform',
    title: 'Where apps run',
    colour: '#ed8936',
    items: ['App hosting', 'Code storage', 'Automatic testing', 'App directory', 'Login system', 'Security checks'],
  },
  {
    id: 'gateway',
    title: 'Traffic controller',
    colour: '#48bb78',
    items: ['Picks the right AI', 'Tracks costs', 'Limits usage', 'Keeps logs', 'Manages access', 'Monitors usage'],
  },
  {
    id: 'providers',
    title: 'AI services',
    colour: '#63b3ed',
    items: ['Claude Desktop', 'Claude Code', 'Copilot', 'ChubbGPT'],
  },
]

function TechnologyPlatform() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
        <h1 className={styles.title}>How do I build something?</h1>
        <p className={styles.subtitle}>
          The tools and systems available for building AI-powered apps. Mostly for developers, but useful to understand.
        </p>
      </header>

      <div className={styles.content}>
        <CollapsibleSection title="How does it all fit together?" defaultOpen={true}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Think of it like layers. Your app sits at the top, AI services at the bottom.
            </p>
            <div className={styles.architectureDiagram}>
              {architectureLayers.map((layer) => (
                <div
                  key={layer.id}
                  className={styles.archLayer}
                  style={{ borderLeftColor: layer.colour, borderLeftWidth: '4px' }}
                >
                  <div className={styles.archLayerTitle} style={{ color: layer.colour }}>
                    {layer.title}
                  </div>
                  <div className={styles.archLayerItems}>
                    {layer.items.map((item, index) => (
                      <span key={index} className={styles.archItem}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="What does the 'traffic controller' do?" defaultOpen={true}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              Every AI request goes through this. It handles the boring-but-important stuff.
            </p>
            <ul className={styles.bulletList}>
              <li><strong>Picks the right AI:</strong> Sends your request to the best AI for the job</li>
              <li><strong>Tracks costs:</strong> Every request is logged so teams know what they're spending</li>
              <li><strong>Monitors usage:</strong> Dashboards showing who's using what</li>
              <li><strong>Keeps logs:</strong> Records everything for compliance and debugging</li>
              <li><strong>Prevents runaway costs:</strong> Limits usage if something goes wrong</li>
              <li><strong>Handles updates:</strong> When AI tools release new versions, this manages the switch</li>
              <li><strong>Backup plans:</strong> If one AI is down, automatically uses another</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="How do I deploy an app?" defaultOpen={false}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              We have a platform for hosting AI apps — like Vercel or Netlify but for internal use.
            </p>
            <ul className={styles.bulletList}>
              <li><strong>Push and deploy:</strong> Push your code, get a URL. Works with common frameworks</li>
              <li><strong>Internal or public:</strong> Choose whether it's just for us or customer-facing</li>
              <li><strong>Login built in:</strong> All apps use company login. Set who can access what</li>
              <li><strong>Code in Git:</strong> Everything must be in version control. No deploying from your laptop</li>
              <li><strong>App directory:</strong> Search what's already built before making something new</li>
              <li><strong>Dev, staging, production:</strong> Test properly before going live</li>
              <li><strong>Security scans:</strong> Automatic checks on every deploy</li>
              <li><strong>Monitoring:</strong> See if your app is working and how much it costs</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="How do I connect to data?" defaultOpen={false}>
          <div className={styles.section}>
            <p className={styles.sectionIntro}>
              AI apps need data. Here's how to get it safely.
            </p>
            <ul className={styles.bulletList}>
              <li>Use approved connectors for main systems (policies, claims, finance)</li>
              <li>AI apps get read-only access to specific datasets</li>
              <li>No direct database access — everything goes through approved APIs</li>
              <li>Tools to hide sensitive data when testing</li>
              <li>Search tools for finding information in documents</li>
            </ul>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
}

export default TechnologyPlatform
