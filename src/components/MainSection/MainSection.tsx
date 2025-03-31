import Window from "../Window/Window"
import Cloud from "./Cloud"
import MainVideo from "./MainVideo"

function MainSection() {
  return (
    <div className="lilac-section">
      <div className="display-flex">
        <Window
          subheading="Acerca de mí"
          body={<>
            Trabajo creando desde el año 2017 de manera freelance, pero he sido creativa desde mucho antes.
            Cuando era chica disfrutaba creando páginas web estáticas y blogs con HTML.
            <br /><br />
            Me gusta mucho aprender cosas nuevas, por eso estudié ilustración, programación full-stack y diseño UX/UI. ¡Incluso gastronomía!
          </>}
        />
        <div className="cloud-container">
          <Cloud />
          <Cloud isReverse />
        </div>
      </div>
      <div className="display-flex">
        <MainVideo />
        <Window
          subheading="Actualmente..."
          body="Busco nuevos desafíos donde amplíe mis conocimientos como Diseñadora UX/UI o desarrolladora front-end y poder dedicarme a ello de manera full time. (｡•̀ᴗ-)✧"
        />
      </div>
    </div>
  )
}

export default MainSection;