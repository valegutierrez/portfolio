import HeroImage from '../HeroSection/HeroImage'
import Window from '../Window/Window'

function HeroSection() {
  return (
    <section className="hero-section">
      <Window 
        heading={
          <>
            ¡Hola! Soy <span>Valentina</span> 🎀
          </>
        }
        body="Diseñadora UX/UI & desarrolladora front-end."
      />
      <HeroImage />
    </section>
  )
}
export default HeroSection;