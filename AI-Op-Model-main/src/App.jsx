import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import StrategyGovernance from './pages/StrategyGovernance'
import UseCasePortfolio from './pages/UseCasePortfolio'
import PeopleCapability from './pages/PeopleCapability'
import TechnologyPlatform from './pages/TechnologyPlatform'
import ProcessRhythm from './pages/ProcessRhythm'
import AIPathfinder from './pages/AIPathfinder'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/strategy-governance" element={<StrategyGovernance />} />
            <Route path="/use-case-portfolio" element={<UseCasePortfolio />} />
            <Route path="/people-capability" element={<PeopleCapability />} />
            <Route path="/technology-platform" element={<TechnologyPlatform />} />
            <Route path="/process-rhythm" element={<ProcessRhythm />} />
            <Route path="/ai-pathfinder" element={<AIPathfinder />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
