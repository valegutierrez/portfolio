import HeroImage from '../HeroSection/HeroImage'
import Window from '../Window/Window'
import HeroImageSmaller from './HeroImageSmaller';

function HeroSection() {
  return (
    <section className="hero-section">
      <HeroImage />
      <Window
        className="hero-window"
        heading={<>
          ¡Hola! Soy <span className="nowrap">Valentina &#127872;</span>
        </>}
        body="Diseñadora UX/UI & desarrolladora front-end."
      />
      <HeroImageSmaller />
    </section>
  )
}
export default HeroSection;