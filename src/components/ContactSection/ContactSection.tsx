import LogoFooter from "../Footer/LogoFooter";
import SocialNetworkIcons from "../SocialNetworkIcons/SocialNetworkIcons";
import Window from "../Window/Window"

function ContactSection() {
  return (
    <>
      <section className="main-section smaller">
        <Window
          heading={<span>Contacto</span>}
          body={<>
            Si te interesa trabajar conmigo ¡No dudes en contactarme! Estoy disponible para comunicarme via email, y además dejé abajo otros canales donde me puedes encontrar.
            <br /><br />
            <strong>¡Gracias por tomarte el tiempo de ver este sitio!</strong>
          </>}
        />
      </section>
      <section className="main-section smaller">
        <Window
          body={<>
            <span><strong><u>vale.gutierrezc@gmail.com</u></strong></span>
            <br /><br />
            <SocialNetworkIcons fuschia />
            <LogoFooter />
          </>}
        />
      </section>
    </>
  )
}

export default ContactSection;