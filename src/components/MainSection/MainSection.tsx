import Button from "../Button/Button";
import Window from "../Window/Window"
import Cloud from "./Cloud"
import MainVideo from "./MainVideo"

function MainSection() {
  return (
    <section className="lilac-section nogap">
      <div id="about-me" className="main-section smaller">
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
      <div className="main-section smaller col-reverse">
        <MainVideo />
        <div className="grid floating-window">
          <Window
            subheading="Actualmente..."
            body={<>
              Busco nuevos desafíos donde amplíe mis conocimientos como Diseñadora UX/UI o desarrolladora front-end y poder dedicarme a ello de manera full time.
              <span className="nowrap">(｡•̀ᴗ-)✧˖°</span>
            </>}
          />
          <div className="button-section">
            <Button url="/portfolio" label="Ir a mi portafolio &#128187;"/>
            <Button url="https://drive.google.com/file/d/1r-_qHUapy496Qd9Yv7BSUzFtcHJDIrsR/view" label="Descargar CV" secondary/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection;