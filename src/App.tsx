import './App.scss'
import HeroSection from './components/HeroSection/HeroSection'
import MainSection from './components/MainSection/MainSection'
import WaveDivider from './components/WaveDivider/WaveDivider'

function App() {
  return (
    <div className="app">
      <HeroSection />
      <WaveDivider />
      <MainSection />
    </div>
  )
}

export default App
